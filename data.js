//esta funcion es para llamar a la api y que nos funcione en local
fetch ('http://localhost:3000/data')
.then(data => data.json())
.then(res=> console.log(res))