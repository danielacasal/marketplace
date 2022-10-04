let edad = parseInt (prompt("Para confirmar, por favor ingrese su edad"))
edad > 17 ? Swal.fire({text:"Puede continuar", confirmButtonColor: "blue"}) : Swal.fire({text:"Puede continuar pero necesita autorizacion de adulto para comprar", confirmButtonColor: "blue"})

class Servicio {
    constructor(id, nombre, duracion, precio, imagen) {
        this.id = id,
        this.nombre = nombre,
        this.duracion = duracion,
        this.precio = precio,
        this.imagen = imagen
    }
    mostrarCatalogo () {
        console.log(`El servicio de ${this.nombre} tiene un costo de $${this.precio} por sesion de ${this.duracion}`)
    }
}

const servicio001 = new Servicio (1,"Cabello","45 minutos",25,"servicio_cabello.jpg")
const servicio002 = new Servicio (2,"Facial","30 minutos",40,"servicio_facial.jpg")
const servicio003 = new Servicio (3,"Maquillaje","30 minutos",30,"servicio_makeup.jpg")
const servicio004 = new Servicio (4,"Manicure","45 minutos",20,"servicio_manos.jpg")
const servicio005 = new Servicio (5,"Reiki","30 minutos",28,"servicio_reiki.jpg")
const servicio006 = new Servicio (6,"Sastre","30 minutos",21,"servicio_sastre.jpg")
const servicio007 = new Servicio (7,"Acupuntura","20 minutos",19,"servicio_acupuntura.jpg")
const servicio008 = new Servicio (8,"Tibetano","30 minutos",33,"servicio_tibetano.jpg")
const servicio009 = new Servicio (9,"Meditacion","45 minutos",40,"servicio_meditacion.jpg")
const servicio010 = new Servicio (10,"Ventosas","30 minutos",50,"servicio_ventosas.jpg")

const catalogo = []
catalogo.push(servicio001,servicio002,servicio003,servicio004,servicio005,servicio006,servicio007,servicio008,servicio009,servicio010)

let divServicios = document.getElementById("servicios1")
catalogo.forEach ((servicio)=>{
    let nuevoServicio = document.createElement("div") //como puedo hacer que estas tarjetas sean responsive?
    nuevoServicio.innerHTML =   `<div id="${servicio.id}" class="card" style="width: 18rem">
                                        <img class="card-img-top" style="height:300px;" src="../Assets/${servicio.imagen}" alt="${servicio.nombre}">
                                            <div class="card-body">
                                                <h5 class="card-title">${servicio.nombre}</h5>
                                                <p class="card-text">Duracion ${servicio.duracion}.</p>
                                                <a href="#" class="btn btn-primary btnAgregar" style="color: #000000">Agregar por $${servicio.precio}</a>
                                            </div>
                                    </div>`
divServicios.append(nuevoServicio)

})

let botonAgregar = document.getElementsByClassName("btnAgregar")
for (let agregado of botonAgregar){
    agregado.addEventListener("click",()=>{
        alert("Producto agregado")
    })
}

let serv1JSON= JSON.stringify(servicio001)
localStorage.setItem("objetoServicio", servicio001)
localStorage.setItem("objetoServJSON", serv1JSON)

let servicioStore = localStorage.getItem("objetoServicio")
console.log(servicioStore)

let objetoServJSON = JSON.parse(localStorage.getItem("objetoServJSON"))
console.log(objetoServJSON)


