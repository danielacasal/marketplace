let frases =  document.getElementById("frase")
console.log(frases)

let cupones = document.getElementsByClassName("cupones")
console.log(cupones)

let grupoCupones = document.getElementsByClassName("cupon")
console.log(grupoCupones)
for (let cadaCupon of grupoCupones) {
    console.log(cadaCupon)
}

let titulosh1 = document.getElementsByTagName("h1")
console.log(titulosh1)

let tituloIndex = document.getElementById("titleIndex")
console.log(tituloIndex.innerText)
 
tituloIndex.innerText = "Encuentra lo que estas buscando"
console.log(tituloIndex.innerText)

let anioDeNac = parseInt (prompt("Por favor ingrese anio de nacimiento")); //como hacer que solo acepte numeros y de 4 digitos o de 1900 al ano actual por ejemplo?//
function calcularEdad () {
    let edad = 0;
    edad = 2022 - anioDeNac;
    alert("Su edad aproximada es"+" "+ edad + " " + "años")
}
calcularEdad()
    if (anioDeNac <= 2004){ //por que deja ingresar caracteres especiales sin dar error? ej
        let mayorEdad = prompt("Alerta de autoidentificacion, confirma usted que es mayor de edad? Si / No");
            if (mayorEdad.toLowerCase() == "si"){
                alert("Gracias! Puede continuar");  
            }
            else if (mayorEdad.toLowerCase() == "no") {
                alert("Puedes ver la informacion de la pagina, pero para recibir servicio debe autorizarte tu representante legal");
            }
            else {
                alert("Respuesta invalida");
            }
    }
    else if (anioDeNac > 2004){
        alert("Puedes ver la informacion de la pagina, pero para recibir servicio debe autorizarte tu representante legal");
        }
    else {
        alert("Respuesta invalida");  
    }

    let cuponesDescuento = document.getElementById("frases")
    cuponesDescuento.innerHTML += `<li class="frase">FRASE 2</li>`
