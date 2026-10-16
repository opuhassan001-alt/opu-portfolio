const https = require('https');

const players = [
  { id: 18884, name: 'tomori' },
  { id: 18861, name: 'loftus-cheek' },
  { id: 1165, name: 'fofana' },
  { id: 47311, name: 'chukwueze' },
  { id: 18886, name: 'abraham' },
  { id: 18835, name: 'emerson-royal' },
  { id: 24765, name: 'thiaw' },
  { id: 8492, name: 'pavlovic' },
  { id: 48375, name: 'gabbia' },
  { id: 30412, name: 'calabria' },
  { id: 161933, name: 'musah' },
  { id: 35142, name: 'okafor' },
  { id: 2289, name: 'saelemaekers' }
];

players.forEach(p => {
  const url = `https://media.api-sports.io/football/players/${p.id}.png`;
  https.get(url, (res) => {
    console.log(`${p.name} (${p.id}): status = ${res.statusCode}, size = ${res.headers['content-length']}`);
  }).on('error', err => {
    console.log(`${p.name} (${p.id}): error = ${err.message}`);
  });
});

