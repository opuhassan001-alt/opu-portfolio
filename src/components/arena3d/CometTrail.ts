/**
 * Dynamic Trajectory Comet Trail Ribbon
 * 
 * Generates an illuminated ribbon trailing behind the spinning football in flight.
 * Tapers dynamically from maximum width at the ball to a sharp tail, with additive
 * glow and color adapted to the pass classification (Crimson for free-kick, Emerald for assist, etc.).
 */

import * as THREE from 'three';
import { Coordinate3D, PassCategory, PASS_CATEGORY_COLORS } from '../../types/football';

export interface CometTrailOptions {
  maxPoints?: number;
  ribbonWidth?: number;
  category?: PassCategory;
}

export class CometTrail {
  public readonly object: THREE.Group;
  public categoryColor: THREE.Color;
  public maxPoints: number;
  public ribbonWidth: number;

  private points: Coordinate3D[] = [];
  private ribbonMesh: THREE.Mesh;
  private ribbonGeo: THREE.BufferGeometry;
  private ribbonMat: THREE.MeshBasicMaterial;

  constructor(options: CometTrailOptions = {}) {
    this.maxPoints = options.maxPoints ?? 36;
    this.ribbonWidth = options.ribbonWidth ?? 0.22;
    const cat = options.category ?? 'normal';
    this.categoryColor = new THREE.Color(PASS_CATEGORY_COLORS[cat]);

    this.object = new THREE.Group();
    this.object.name = 'comet-trail';

    this.ribbonGeo = new THREE.BufferGeometry();
    this.ribbonMat = new THREE.MeshBasicMaterial({
      color: this.categoryColor,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.ribbonMesh = new THREE.Mesh(this.ribbonGeo, this.ribbonMat);
    this.object.add(this.ribbonMesh);
  }

  /**
   * Appends a new position coordinate to the trail and rebuilds ribbon geometry.
   */
  public addPoint(point: Coordinate3D): void {
    this.points.push({ ...point });
    if (this.points.length > this.maxPoints) {
      this.points.shift();
    }
    this.updateGeometry();
  }

  /**
   * Sets trail color based on football pass category.
   */
  public setCategory(category: PassCategory): void {
    const hex = PASS_CATEGORY_COLORS[category] ?? '#38bdf8';
    this.categoryColor = new THREE.Color(hex);
    this.ribbonMat.color = this.categoryColor;
  }

  /**
   * Returns current count of recorded trajectory points.
   */
  public getPointCount(): number {
    return this.points.length;
  }

  /**
   * Clears all recorded points and empties the mesh geometry.
   */
  public reset(): void {
    this.points = [];
    this.ribbonGeo.dispose();
    this.ribbonGeo = new THREE.BufferGeometry();
    this.ribbonMesh.geometry = this.ribbonGeo;
  }

  /**
   * Reconstructs ribbon quad-strip geometry along the recorded trajectory curve.
   */
  private updateGeometry(): void {
    const n = this.points.length;
    if (n < 2) {
      return;
    }

    const vertices: number[] = [];
    const indices: number[] = [];

    const up = new THREE.Vector3(0, 0, 1);
    const tangent = new THREE.Vector3();
    const normal = new THREE.Vector3();

    for (let i = 0; i < n; i++) {
      const p = this.points[i];
      // Compute local tangent
      if (i < n - 1) {
        const next = this.points[i + 1];
        tangent.set(next.x - p.x, next.y - p.y, next.z - p.z).normalize();
      } else {
        const prev = this.points[i - 1];
        tangent.set(p.x - prev.x, p.y - prev.y, p.z - prev.z).normalize();
      }

      // Lateral vector perpendicular to flight direction and up vector
      normal.crossVectors(tangent, up);
      if (normal.lengthSq() < 1e-4) {
        normal.set(0, 1, 0);
      } else {
        normal.normalize();
      }

      // Taper width: 0 at oldest point (tail), full ribbonWidth at newest point (ball)
      const u = n === 1 ? 1 : i / (n - 1);
      const w = this.ribbonWidth * Math.pow(u, 0.7);

      // Left vertex
      vertices.push(p.x - normal.x * w, p.y - normal.y * w, p.z - normal.z * w);
      // Right vertex
      vertices.push(p.x + normal.x * w, p.y + normal.y * w, p.z + normal.z * w);

      // Generate triangle indices for quad strip
      if (i < n - 1) {
        const v0 = i * 2;
        const v1 = i * 2 + 1;
        const v2 = (i + 1) * 2;
        const v3 = (i + 1) * 2 + 1;

        indices.push(v0, v1, v2);
        indices.push(v1, v3, v2);
      }
    }

    this.ribbonGeo.dispose();
    this.ribbonGeo = new THREE.BufferGeometry();
    this.ribbonGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    this.ribbonGeo.setIndex(indices);
    this.ribbonGeo.computeVertexNormals();
    this.ribbonMesh.geometry = this.ribbonGeo;
  }
}
