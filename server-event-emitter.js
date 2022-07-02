const http = require('http')

const server = http.createServer()

server.on('request', (req, res)=>{
    res.end('This is the end')
})

server.listen(5000, ()=>{
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log('Server listening on port 5000')
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
})