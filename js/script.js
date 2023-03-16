const listaSpesa = [
    'Pasta',
    'Uova',
    'Guanciale',
    'Pecorino romano',
    'Pepe nero',
    'Latte',
    'Pane',
    'Yougurt',
    'Biscotti',
    'Cereali'
];

const lista = document.querySelector('ul');
let counter = 0;

while(counter < listaSpesa.length){
    lista.innerHTML += `
        <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
              <label class="form-check-label" for="firstCheckbox">${listaSpesa[counter]}</label>
        </li>
    `;
    console.log(listaSpesa[counter]);
    counter++;
};