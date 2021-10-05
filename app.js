let response = fetch('https://jsonplaceholder.typicode.com/users').then(data =>{
    let parsed = data.json() 
    console.log(parsed)
    return (parsed)
}).then(book =>{console.log(book)})

