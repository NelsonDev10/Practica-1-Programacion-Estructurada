const header = document.querySelectorAll('h1,h2,h3,h4,h5,h6')

for (let i=0; i<header.length; i++){
    header[i].innerText = `Nuevo Encabezado de nivel ${i+1}`;
    }