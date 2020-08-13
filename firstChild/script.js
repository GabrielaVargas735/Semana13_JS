let div = document.getElementById('elemento1');
let paragraph = document.createElement('p');
paragraph.innerHTML = 'Mi nombre es Gabriela';
div.appendChild(paragraph);
let paragraph2 = document.createElement('ul');
paragraph2.innerHTML = 'Gabriela Vargas Elizondo';
div.appendChild(paragraph2);
console.log(div.firstElementChild);
