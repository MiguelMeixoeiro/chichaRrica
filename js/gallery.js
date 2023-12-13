fetch('http://localhost:3000/data')
    .then(data => data.json())
    .then(res => console.log(res))