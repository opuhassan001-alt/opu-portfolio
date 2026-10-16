/**
 * Flexible Football Goal Net & Vertex Deformation Engine
 * 
 * Implements FIFA regulation 7.32m x 2.44m goal frame with:
 * - 12cm white cylindrical posts and crossbar
 * - 2.0m back depth with support stanchions
 * - Custom vertex grid netting
 * - Damped harmonic oscillation vertex displacement upon ball impact
 */

import * as THREE from 'three';
import { Coordinate3D } from '../../types/football';

export interface FlexibleNetOptions {
  goalX?: number;   // default 52.5 (attacking goal line)
  width?: number;   // default 7.32m FIFA standard
  height?: number;  // default 2.44m FIFA standard
  depth?: number;   // default 2.0m
  direction?: 1 | -1; // 1 for +X (attacking goal), -1 for -X (defending goal)
}

export class FlexibleNet {
  public readonly group: THREE.Group;
  public readonly width: number;
  public readonly height: number;
  public readonly depth: number;
  public readonly goalX: number;
  public readonly direction: number;

  private backNetMesh!: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  private restPositions!: Float32Array;
  private currentDisplacement: number = 0;

  constructor(options: FlexibleNetOptions = {}) {
    this.goalX = options.goalX ?? 52.5;
    this.width = options.width ?? 7.32;
    this.height = options.height ?? 2.44;
    this.depth = options.depth ?? 2.0;
    this.direction = options.direction ?? (this.goalX >= 0 ? 1 : -1);

    this.group = new THREE.Group();
    this.group.name = `goal-net-${this.direction > 0 ? 'attacking' : 'defending'}`;

    this.buildGoalFrame();
    this.buildNetting();
  }

  /**
   * Constructs white tubular posts, crossbar, and back ground support bars.
   */
  private buildGoalFrame(): void {
    const postMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.1
    });

    const postRadius = 0.06; // 12cm diameter
    const halfW = this.width / 2;

    // Left Post (standing vertically in Z from 0 to height)
    const leftPostGeo = new THREE.CylinderGeometry(postRadius, postRadius, this.height, 16);
    const leftPost = new THREE.Mesh(leftPostGeo, postMat);
    leftPost.position.set(this.goalX, -halfW, this.height / 2);
    leftPost.rotation.x = Math.PI / 2; // Orient upright along Z
    this.group.add(leftPost);

    // Right Post
    const rightPostGeo = new THREE.CylinderGeometry(postRadius, postRadius, this.height, 16);
    const rightPost = new THREE.Mesh(rightPostGeo, postMat);
    rightPost.position.set(this.goalX, halfW, this.height / 2);
    rightPost.rotation.x = Math.PI / 2;
    this.group.add(rightPost);

    // Crossbar (connecting posts along Y at z = height)
    const crossbarGeo = new THREE.CylinderGeometry(postRadius, postRadius, this.width, 16);
    const crossbar = new THREE.Mesh(crossbarGeo, postMat);
    crossbar.position.set(this.goalX, 0, this.height);
    // Cylinder is along Y by default in Three.js
    this.group.add(crossbar);

    // Support frame bars extending backward
    const backX = this.goalX + this.direction * this.depth;

    // Top horizontal stanchions
    const addStanchion = (y: number) => {
      const stanGeo = new THREE.CylinderGeometry(0.04, 0.04, this.depth, 12);
      const stanMesh = new THREE.Mesh(stanGeo, postMat);
      stanMesh.position.set(this.goalX + (this.direction * this.depth) / 2, y, this.height);
      stanMesh.rotation.z = Math.PI / 2;
      this.group.add(stanMesh);
    };
    addStanchion(-halfW);
    addStanchion(halfW);

    // Back top crossbar
    const backTopGeo = new THREE.CylinderGeometry(0.04, 0.04, this.width, 12);
    const backTop = new THREE.Mesh(backTopGeo, postMat);
    backTop.position.set(backX, 0, this.height);
    this.group.add(backTop);

    // Ground base frame bars
    const baseSideGeo = new THREE.CylinderGeometry(0.04, 0.04, this.depth, 12);
    const baseLeft = new THREE.Mesh(baseSideGeo, postMat);
    baseLeft.position.set(this.goalX + (this.direction * this.depth) / 2, -halfW, 0.04);
    baseLeft.rotation.z = Math.PI / 2;
    this.group.add(baseLeft);

    const baseRight = new THREE.Mesh(baseSideGeo, postMat);
    baseRight.position.set(this.goalX + (this.direction * this.depth) / 2, halfW, 0.04);
    baseRight.rotation.z = Math.PI / 2;
    this.group.add(baseRight);

    const baseBackGeo = new THREE.CylinderGeometry(0.04, 0.04, this.width, 12);
    const baseBack = new THREE.Mesh(baseBackGeo, postMat);
    baseBack.position.set(backX, 0, 0.04);
    this.group.add(baseBack);
  }

  /**
   * Constructs the deformable back net vertex grid mesh and top/side netting.
   */
  private buildNetting(): void {
    const netMat = new THREE.MeshBasicMaterial({
      color: 0x94a3b8, // Light netting slate
      wireframe: true,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide
    });

    const halfW = this.width / 2;
    const backX = this.goalX + this.direction * this.depth;

    // Back net grid (local X = height, local Y = width so that after rotateY, Y is width and Z is height)
    const segsY = 24;
    const segsZ = 16;
    const backGeo = new THREE.PlaneGeometry(this.height, this.width, segsZ, segsY);

    // PlaneGeometry default is centered at (0, 0, 0) on XY plane.
    // Rotate around Y: local X (height 2.44m) rotates to Z in [-1.22, 1.22],
    // while local Y (width 7.32m) remains along Y in [-3.66, 3.66].
    backGeo.rotateY(Math.PI / 2);
    // Translate to back of goal frame at backX, and elevate by height/2 so Z spans [0, 2.44]
    backGeo.translate(backX, 0, this.height / 2);
    backGeo.computeBoundingBox();

    this.backNetMesh = new THREE.Mesh(backGeo, netMat);
    this.backNetMesh.name = 'back-net-mesh';
    this.group.add(this.backNetMesh);

    // Save pristine rest positions for oscillation calculations
    const posAttr = backGeo.attributes.position;
    this.restPositions = new Float32Array(posAttr.array);

    // Top net panel
    const topGeo = new THREE.PlaneGeometry(this.depth, this.width, 8, 16);
    topGeo.translate(this.goalX + (this.direction * this.depth) / 2, 0, this.height);
    const topMesh = new THREE.Mesh(topGeo, netMat);
    this.group.add(topMesh);

    // Left net side panel
    const sideGeoA = new THREE.PlaneGeometry(this.depth, this.height, 8, 8);
    sideGeoA.rotateX(Math.PI / 2);
    sideGeoA.translate(this.goalX + (this.direction * this.depth) / 2, -halfW, this.height / 2);
    const sideMeshA = new THREE.Mesh(sideGeoA, netMat);
    this.group.add(sideMeshA);

    // Right net side panel
    const sideGeoB = new THREE.PlaneGeometry(this.depth, this.height, 8, 8);
    sideGeoB.rotateX(Math.PI / 2);
    sideGeoB.translate(this.goalX + (this.direction * this.depth) / 2, halfW, this.height / 2);
    const sideMeshB = new THREE.Mesh(sideGeoB, netMat);
    this.group.add(sideMeshB);
  }

  /**
   * Deforms netting backward with damped harmonic oscillation upon ball impact.
   * 
   * Formula:
   *   Δx = direction * A * exp(-γ * t) * cos(ω * t) * exp(-dist^2 / (2 * σ^2))
   * 
   * @param impactPoint 3D coordinates where the ball strikes the netting
   * @param velocity Ball impact velocity in m/s
   * @param time Elapsed seconds since initial impact
   */
  public deformNet(impactPoint: Coordinate3D, velocity: number, time: number): void {
    const posAttr = this.backNetMesh.geometry.attributes.position;
    const posArray = posAttr.array as Float32Array;
    const vertexCount = posAttr.count;

    // Harmonic spring constants
    const dampingGamma = 3.0; // Damping rate (1/s)
    const omega = 14.0;       // Natural oscillation frequency (rad/s)
    const sigma = 1.25;       // Spatial falloff radius (meters)

    // Damped harmonic temporal envelope
    const temporalEnvelope = Math.exp(-dampingGamma * time) * Math.cos(omega * time);

    // Amplitude scaled by impact velocity
    const amplitude = Math.min(0.85, Math.max(0.15, velocity * 0.024));

    let maxDisp = 0;

    for (let i = 0; i < vertexCount; i++) {
      const idx = i * 3;
      const restX = this.restPositions[idx];
      const restY = this.restPositions[idx + 1];
      const restZ = this.restPositions[idx + 2];

      // Euclidean distance in YZ plane from impact point to this vertex
      const dy = restY - impactPoint.y;
      const dz = restZ - impactPoint.z;
      const distSq = dy * dy + dz * dz;

      // Spatial Gaussian falloff
      const spatialWeight = Math.exp(-distSq / (2 * sigma * sigma));

      // Displacement in direction of ball entry
      const displacement = this.direction * amplitude * spatialWeight * temporalEnvelope;

      posArray[idx] = restX + displacement;

      const currentDispMag = Math.abs(displacement);
      if (currentDispMag > maxDisp) {
        maxDisp = currentDispMag;
      }
    }

    this.currentDisplacement = maxDisp;
    posAttr.needsUpdate = true;
    this.backNetMesh.geometry.computeVertexNormals();
  }

  /**
   * Restores all net vertices to their undeflected resting state.
   */
  public reset(): void {
    const posAttr = this.backNetMesh.geometry.attributes.position;
    const posArray = posAttr.array as Float32Array;
    posArray.set(this.restPositions);
    posAttr.needsUpdate = true;
    this.currentDisplacement = 0;
  }

  /**
   * Returns the current maximum displacement across all net vertices in meters.
   */
  public getMaxDisplacement(): number {
    return this.currentDisplacement;
  }

  /**
   * Returns the back net mesh instance for bounding box inspection.
   */
  public getBackNetMesh(): THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial> {
    return this.backNetMesh;
  }
}
