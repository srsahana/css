var button= document.querySelector('button')
var input= document.querySelector('input')
var list= document.querySelector('ul')

const callback =(ele)=>{
    const inputValue=input.value
    const element=document.createElement('li')
    const textNode=document.createTextNode(inputValue)
    element.appendChild(textNode)
    list.appendChild(element)

}

button.addEventListener('click',callback)