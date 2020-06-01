const express = require('express');
const path = require('path');
const app = module.exports = express();

const PORT = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'dev.html'));
});

app.get('/release', (req, res) => {
    res.sendFile(path.resolve(__dirname,'index.html'));
})

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);