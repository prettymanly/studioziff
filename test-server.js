const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head><title>Test Server</title></head>
      <body>
        <h1>Server is working!</h1>
        <p>If you can see this, the port and networking are fine.</p>
        <p>The issue is likely with Next.js specifically.</p>
      </body>
    </html>
  `);
});

server.listen(3333, () => {
  console.log('Test server running at http://localhost:3333');
});