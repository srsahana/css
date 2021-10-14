const http = require('http')

const server = http.createServer((request,response)=>{
    //request.url
    //console.log(request.url)
    const path =request.url
    response.write(`You made a request to ${path}`)
    response.end()
})

console.log(server)
server.listen(3000,()=>{
    console.log(`Server lisening at PORT: ${3000}`)
})