const http = require('http')

const server = http.createServer((request,response)=>{
    //request.url
    console.log(request.url)
    console.log(request.method)
})

console.log(server)
server.listen(3000,()=>{
    console.log(`Server lisening at PORT: ${3000}`)
})