let montos = {
    '987654321': 800,
    '99887766': 250,
    '11223344': 480
}
/* cargar la referencia a un archivo externo */
let url = new URL(window.location.href);
let numcta = url.searchParams.get('numcta');
const nomCliente = url.searchParams.get('usuario');

console.log(nomCliente);
function actulizaSaldoActual(){
    const saldoActual = document.getElementById('saldoActual');
    saldoActual.innerHTML = '$' + montos[numcta];
}

actulizaSaldoActual();

function actulizaNumUsuario(){
    const numUsuario = document.getElementById('numUsuario');
    const nClnt = document.getElementById('nClnt');
    numUsuario.innerHTML = numcta;
    nClnt.value = nomCliente;
}

actulizaNumUsuario();

/*Bloque que permite depositos*/
const inputMonto = document.getElementById('inputMonto'); //obtiene la cantidad a depositar
const ingresarMonto = document.getElementById('ingresarMonto'); //asigna al objeto botón para el listener
ingresarMonto.addEventListener('click', function(e){
    let monto = inputMonto.value; 
    monto = parseInt(monto); // convierte el valor de cadena a entero
//Reglas de negocio no se permite saldos mayores a 990 y tampoco saldos menores a 10
    if ((montos[numcta] + monto) > 990) {
        alert('Excederia el monto permitido en su cuenta, no se permite el deposito');
        inputMonto.value = "";
    } else {
        montos[numcta] = montos[numcta] + monto;
        actulizaSaldoActual();
        alert('Deposito = ' + monto + "  " + 'Saldo actual = ' + montos[numcta]);
        inputMonto.value = '';
    }
    
});

/* Bloque que permite retiros*/
const disminuyeMonto = document.getElementById('inputMonto'); //obtiene la cantidad a retirar
const disminuyeSaldo = document.getElementById('retirarMonto'); // asigna al objeto botón para el listener
disminuyeSaldo.addEventListener('click', function(e){
    let monto = disminuyeMonto.value;
    monto = parseInt(monto); //convierte el valor de cadena a entero
    //Reglas de negocio no se permite saldos mayores a 990 y tampoco saldos menores a 10
    if ((montos[numcta] - monto) < 10) {
        alert('El retiro excede el límite permitido, quedaria saldo insufuciente en su cuenta');
        inputMonto.value = "";
    } else {
        montos[numcta] = montos[numcta] - monto;
        actulizaSaldoActual();
        alert('Retiro = ' + monto + "  " + 'Saldo actual = ' + montos[numcta]);
        inputMonto.value = '';
    }
});

const inputTerminar = document.getElementById('Terminar');
inputTerminar.addEventListener('click', function(e){
    window.location.href = '/index.html';
});


