// Import modules
const fs = require('fs')
const path = require('path')
const os = require('os')
const http = require('http')
const crypto = require('crypto')

// 1. File System - Write & Read File
fs.writeFileSync('info.txt', 'Hello from Node.js!')
console.log('File content:', fs.readFileSync('info.txt', 'utf8'))

// 2. Path - Get absolute path
console.log('File path:', path.join(__dirname, 'info.txt'))

// 3. OS - Show system info
console.log('OS Platform:', os.platform())
console.log('Free Memory:', os.freemem())

// 4. Crypto - Hash example
const hash = crypto.createHash('sha256').update('myPassword').digest('hex')
console.log('SHA256 Hash:', hash)

// 5. HTTP - Create a small server
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello, Node.js World!')
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
