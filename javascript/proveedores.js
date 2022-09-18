class VitrinaDeServicios {
    constructor(id,nombre,duracion,precio) {
        this.id = id,
        this.nombre = nombre,
        this.duracion = duracion,
        this.precio=precio
    }
}

let S1 = new VitrinaDeServicios (1,"reiki",20,50)
let S2 = new VitrinaDeServicios (2,"sastre",10,40)

const vitrina = [S1,S2]
console.log(vitrina)

// NO ENTIENDO POR QUE NO SIRVE ESTA FUNCION, AYUDA , VEO QUE SALE UN ARRAY DE 3 EN LA CONSOLA PERO NO SE QUEDA CONSOLOGUEADO
function guardarServicio (vitrina){
let nombre = document.getElementById("nombreInput")
let duracion = document.getElementById("duracionInput")
let precio = document.getElementById("precioInput")
let S3 = new VitrinaDeServicios (vitrina.length+1,nombre.value,duracion.value,precio.value)
console.log(S3)
vitrina.push(S3)
console.log(vitrina)
}

let botonGuardar = document.getElementById("guardarServicioBtn")
botonGuardar.addEventListener("click",()=> {
    guardarServicio (vitrina)
    alert("guardado")
})
