const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const files = {'/':'index.html','/index.html':'index.html','/styles.css':'styles.css','/app.js':'app.js'};
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript'};
http.createServer((req,res) => {
  if (req.url === '/api/forecast') {
    res.writeHead(200, {'Content-Type':'application/json'});
    return res.end(JSON.stringify({place:'North Harbor',temperature:18,condition:'Clear skies'}));
  }
  const file = files[req.url];
  if (!file) { res.writeHead(404); return res.end('Not found'); }
  res.writeHead(200, {'Content-Type':types[path.extname(file)]});
  res.end(fs.readFileSync(path.join(__dirname,file)));
}).listen(Number(process.env.PORT || 8080), '127.0.0.1');
