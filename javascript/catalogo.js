class Servicio {
    constructor(id, nombre, duracion, precio) {
        this.id = id,
        this.nombre = nombre,
        this.duracion = duracion,
        this.precio = precio
    }
    mostrarCatalogo () {
        console.log(`El servicio de ${this.nombre} tiene un costo de $${this.precio} por sesion de ${this.duracion}`)
    }
}

const servicio001 = new Servicio (1,"Cabello","45 minutos",25)
const servicio002 = new Servicio (2,"Facial","30 minutos",40)
const servicio003 = new Servicio (3,"Maquillaje","30 minutos",30)
const servicio004 = new Servicio (4,"Manicure","45 minutos",20)
const servicio005 = new Servicio (5,"Reiki","30 minutos",28)
const servicio006 = new Servicio (6,"Sastre","30 minutos",21)
const servicio007 = new Servicio (7,"Acupuntura","20 minutos",19)
const servicio008 = new Servicio (8,"Tibetano","30 minutos",33)

const catalogo = []
catalogo.push(servicio001,servicio002,servicio003,servicio004,servicio005,servicio006,servicio007,servicio008)

function mostrarServicios (array) {
    console.log("Lista de todos nuestros servicios")
    array.forEach((Servicio)=> {
        Servicio.mostrarCatalogo()
    })
}

function buscadorDeServicio(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver catálogo completo
                        0 - Salir
                        `))
    menu(opcion)
}

function menu(servicioSeleccionado){
    switch(servicioSeleccionado){
        case 0:
            salir = true
            alert(`Gracias por visitarnos, puede ver el resto de nuestra pagina`)
        break    
        case 1:
            mostrarServicios(catalogo)
      	break  
   	    default: 
      	alert(`Ingrese una opción`)
    }
}

let salir 
while(salir != true){
    buscadorDeServicio()
    
}

console.log("RESULTADO DE BUSCAR SERVICIO")
let buscarServicio = prompt ("Ingresa servicio que deseas")
let servicioBuscado = catalogo.find ((Servicio)=> Servicio.nombre.toLowerCase () == buscarServicio.toLowerCase())
if (servicioBuscado == undefined) {
    alert("No pudimos encontrar coincidencia, vea nuestro catalogo completo")
}else{
    console.log(`El servicio fue encontrado`)
}

console.log("PAQUETES")
let resultado = 0;

function totalCarrito(Servicio1,Servicio2,Servicio3,Servicio4) {
    subtotal = Servicio1 + Servicio2 + Servicio3 + Servicio4
    descuento = subtotal*0.10
    resultado = (Servicio1 + Servicio2 + Servicio3 + Servicio4)-descuento
}

function mostrar() {
    console.log("El total por separado es" + " " + subtotal)
    console.log("Al comprar el paquete ahorras 10%, nuevo total es" + " " + resultado)
}
//Paquete 1
totalCarrito(25,40,30,20);
mostrar();

//Paquete 2
totalCarrito(28,21,19,33);
mostrar();

