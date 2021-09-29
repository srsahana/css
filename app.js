var heading = document.getElementById('heading')
var body = document.querySelector('body')

console.log(heading)
heading.innerHTML="gggg"
heading.style="color:red;font-size:2rem"

heading.classList.add('five')
heading.classList.remove('one')


body.classList.add('dark')