const fs = require('fs');

async function getTM() {
  const res = await fetch('https://www.transfermarkt.com/joel-monteiro/profil/spieler/663527', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
  });
  const html = await res.text();
  const m = html.match(/https:\/\/img\.a\.transfermarkt\.technology\/portrait\/[^\"]+/);
  console.log('TM image match:', m ? m[0] : 'none');
  if (m) {
    const imgRes = await fetch(m[0], { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (imgRes.ok) {
      const buf = Buffer.from(await imgRes.arrayBuffer());
      fs.writeFileSync('public/assets/players/monteiro-joel.png', buf);
      fs.writeFileSync('public/assets/players/monteiro-joel.jpg', buf);
      console.log('Saved monteiro-joel:', buf.length, 'bytes');
    }
  }
}

getTM();

