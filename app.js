var list=document.querySelector('ul')

var arr=['go to the gym','cook ','eat']

arr.push('complete')

for (var i=0;i<arr.length; i++){
    var element=document.createElement('li')
    var textNode= document.createTextNode(arr[i])
    element.appendChild(textNode)
    list.appendChild(element)
}