// 1. Variable para guardar el número actual
let numero = 0;

// 2. Seleccionamos los elementos del HTML
const pantalla = document.getElementById('valor-contador');
const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');
const btnReiniciar = document.getElementById('btn-reiniciar');

// 3. Evento para sumar +1

btnSumar.addEventListener('click', function() {
    numero = numero + 1;
    pantalla.textContent = numero;
});

// 4. Evento para restar -1
if(numero>=0){
btnRestar.addEventListener('click', function() {
    numero = numero - 1;
    pantalla.textContent = numero;
});
};
else{
    console.log(numero);
}
// 5. Evento para reiniciar a 0
btnReiniciar.addEventListener('click', function() {
    numero = 0;
    pantalla.textContent = numero;
});
