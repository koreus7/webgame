const express = require('express');
const path = require('path');
const fs = require('fs');
const app = module.exports = express();

const PORT = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'index-dev.html'));
});

app.get('/levels', (req, res) => {
  const dir = fs.readdirSync('./levels');
  const levels = [];
  for(const filename of dir) {
    const contents = fs.readFileSync('./levels/' + filename, 'utf8');
    const json = JSON.parse(contents);
    if(!json) {
      return res.status(500).json({ error: `could not read level "${filename}" - invalid json`});
    }

    levels.push(json);
  }

  res.send(levels);
})

app.get('/dev', (req, res) => {
    res.sendFile(path.resolve(__dirname,'index-dev.html'));
});

app.get('/release', (req, res) => {
    res.sendFile(path.resolve(__dirname,'index-release.html'));
})

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);