let value = new Promise((resolve,reject)=>{
    setTimeout(()=>{
         reject('nhhh')
         console.log(value)
    },3000)
})
console.log(value)