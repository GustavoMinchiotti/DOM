//! Manejo del DOM con documentación

// capturo el botón de suma para el resultado:
// 1- document.getElementById("sumar")  esto es capturar
// 2- .addEventListener le digo que escuche determinado evento
// 3- ("click", function () {}); con cada evento click ejecute una función

// 4- dentro capturo los dos inputs del formulario:
// 5- creo una variable le asigno con esta sentencia el valor obtenido ----let numA = document.getElementById("num1").value;----
// 6- en la variable resultado almaceno el resultado de la función invocada: ---let resultado = sumar(numA, numB);---

// 7- capturo el span dentro del párrafo en html donde voy a mostrar el resultado y con .innerHTML lo inserto.  document.getElementById('resultadoSuma').innerHTML = resultado;
// 8- hago visible el div que estaba invisible desde Css con la propiedad .style entro a la hoja css
//  con .display digo que quiero modificar ese atributo y para que modifique le paso como string el cambio de parámetro

// const existir = document.getElementById('sumar');
// if (existir) {
//     console.log('Solo una prueba de que existe el id sumar');
// }

document.getElementById("sumar").addEventListener("click", function () {// -1-2-3
    let numA = document.getElementById("num1").value; // -5
    let numB = document.getElementById("num2").value; // -5

    let resultado = sumar(parseInt(numA), parseInt(numB)); // -6

    document.getElementById("resultadoSuma").innerHTML = resultado; // -7
    console.log(resultado); // prueba de función visible en la consola de dev de google
    document.getElementById("probarRes").style.display = "block";
});

//* creo la función sumar para que luego la ejecute el botón capturado
function sumar(a, b) {
  return a + b;
}