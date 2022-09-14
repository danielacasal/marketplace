// Primera forma de DOM

//getElementByClassName POR CLASS NAME -- se esperan 1+ elementos dentro de la clase / una coleccion de elementos 
//let cupon = document.getElementsByClassName("cupon");
//console.log(cupon)

//getElementById POR ID -- se espera que sea 1 elemento
//let frase = document.getElementById("frase");
//console.log(frase)

//getElementByTag POR ETIQUETA -- devuelve un HTML collection. Mas dificil de controlar 


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