let Edad = prompt("edad"); // por que no funciona cuando se le hace parseint(prompt)? , como hacer que solo acepte numeros y de 2 digitos?
while(Edad == ""){
Edad = prompt("edad");
}

let AnioDeNac = parseInt (prompt("Para confirmar, por favor ingrese anio de nacimiento")); //como hacer que solo acepte numeros y de 4 digitos o de 1900 al ano actual por ejemplo?//
    if (AnioDeNac <= 2004){ //por que deja ingresar caracteres especiales sin dar error? ej
        let MayorEdad = prompt("Necesitamos una ultima confirmacion, confirma usted que es mayor de edad? Si / No");
            if (MayorEdad.toLowerCase() == "si"){
                alert("Gracias! Puede continuar");  
            }
            else if (MayorEdad.toLowerCase() == "no") {
                alert("Puedes ver la informacion de la pagina, pero para recibir servicio debe autorizarte tu representante legal");
            }
            else {
                alert("Respuesta invalida");
            }
    }
    else if (AnioDeNac > 2004){
        alert("Puedes ver la informacion de la pagina, pero para recibir servicio debe autorizarte tu representante legal");
        }
    else {
        alert("Respuesta invalida");  
    }