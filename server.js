const http = require('http')
const fs =require('fs')
const path =require('path')

const server = http.createServer((request,response)=>{
    //request.url
    //console.log(request.url)
    //const path =request.url
    const markup =fs.readFileSync(path.resolve('./index.html'))
    response.write(markup)
    response.end()
})

console.log(server)
server.listen(3000,()=>{
    console.log(`Server lisening at PORT: ${3000}`)
})