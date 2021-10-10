var button= document.querySelector('label')
var body= document.querySelector('body')

const callback =(ele)=>{
    body.classList.toggle('dark')
}

button.addEventListener('click',callback)