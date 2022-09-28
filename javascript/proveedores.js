const serviciosProveedores = []
let idUnico = 0
class ServicioProveedor {
        constructor(idUnico, nombre, duracion, precio, imagen) {
            this.id = idUnico++,
            this.nombre = nombre,
            this.duracion = duracion,
            this.precio = precio,
            this.imagen = imagen
        }
    }

const nombreInput = document.getElementById('nombreInput')
const duracionInput= document.getElementById('duracionInput')
const precioInput = document.getElementById('precioInput')
const guardarServicioBtn = document.getElementById('guardarServicioBtn')
const verCatalogo = document.getElementById('verCatalogo')
const borrarCatalogo = document.getElementById('borrarCatalogo')
const listaServicios= document.getElementById('listaServicios')

guardarServicioBtn.addEventListener('click', ()=> {
    serviciosProveedores.push(new ServicioProveedor(nombreInput.value, duracionInput.value, precioInput.value,"servicio_cabello.jpg"))
    console.log(serviciosProveedores)
    crearServicio ()
})

function crearServicio () {
    const ofertaServicio = document.createElement('div')
    serviciosProveedores.forEach((e)=> {
        ofertaServicio.innerHTML =   `<div id="${e.idUnico}" class="card" style="width: 18rem">
        <img class="card-img-top" style="height:300px;" src="../Assets/${e.imagen}" alt="${e.nombre}">
            <div class="card-body">
                <h5 class="card-title">${e.nombre}</h5>
                <p class="card-text">Duracion ${e.duracion}.</p>
                <a href="#" class="btn btn-primary btnAgregar" style="color: #000000">Agregar por $${e.precio}</a>
                <button class="btn btn-success">Realizada</button>
                <button class="btn btn-danger">Eliminar</button>
            </div>
    </div>`
    })
    listaServicios.append(ofertaServicio)
}

localStorage.setItem('Comision Coder', 34010)
let nombre = localStorage.getItem('Comision Coder')
console.log(nombre)

localStorage.removeItem('Comision Coder')
//sessionStorage.setItem("Comision Coder", 34010)
//let nombre1 = sessionStorage.getItem("Comision Coder")
//console.log(nombre1)