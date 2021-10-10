const a =document.querySelectorAll('input')[0]
const b =document.querySelectorAll('input')[1]
const add =document.querySelector('#add')
const multiply =document.querySelector('#multiply')
const subtract =document.querySelector('#subtract')
const resultbox =document.querySelector('.result')

const sum =()=>{
    const result=parseInt(a.value)+parseInt(b.value)
    resultbox.innerHTML=result
}
const product =()=>{
    const result=parseInt(a.value)*parseInt(b.value)
    resultbox.innerHTML=result
}
const sub =()=>{
    const result=parseInt(a.value)-parseInt(b.value)
    resultbox.innerHTML=result
}

const calculate =(op)=>{
    switch(op){
        case "add":
            resultbox.innerHTML =parseInt(a.value)+parseInt(b.value)
            break
        case "multiply":
            resultbox.innerHTML =parseInt(a.value)*parseInt(b.value)
            break
        case "subtract":
            resultbox.innerHTML =parseInt(a.value)-parseInt(b.value)
            break
        default:
            resultbox.innerHTML ="Not valid"
    }
}
add.addEventListener('click',sum)
multiply.addEventListener('click',product)
subtract.addEventListener('click',sub)


add.addEventListener('click',()=>{
    return calculate('add')
})
subtract.addEventListener('click',()=>{
    return calculate('subtract')
})
multiply.addEventListener('click',()=>{
    return calculate('multiply')
})
