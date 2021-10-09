const a =document.querySelectorAll('input')[0]
const b =document.querySelectorAll('input')[1]
const add =document.querySelector('#add')
const multiply =document.querySelector('#multiply')
const resultbox =document.querySelector('.result')
const sum =()=>{
    const result=parseInt(a.value)+parseInt(b.value)
    resultbox.innerHTML=result
}
const product =()=>{
    const result=parseInt(a.value)*parseInt(b.value)
    resultbox.innerHTML=result
}

const calculate =(op)=>{
    if (op =='add'){
        console.log('adding')
    } else if(op=='multiply'){
        console.log('multiply')
    }
}
add.addEventListener('click',sum)
multiply.addEventListener('click',product)


add.addEventListener('click',()=>{
    return calculate('add')
})
multiply.addEventListener('click',()=>{
    return calculate('multiply')
})
