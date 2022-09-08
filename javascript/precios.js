const ServiciosCosmeticos = ["Cabello", "Facial", "Maquillaje", "Manicure"]
const ServiciosOtros = ["Reiki", "Sastre","Psicologia","Medicina"]
const Servicios = ServiciosCosmeticos.concat(ServiciosOtros)
Servicios.push ("Acupuntura", "Tibetano")
Servicios.splice (6,2)
console.log("Lista de todos los servicios: "+ Servicios.join(", "))

const Precios = [30,20,28,21,19,33,200]
Precios.unshift (100,25,40,)
Precios.pop()
Precios.shift()

//Mostrar precio de todos los servicios
for (let i = 0; i<8;i++) {
    console.log("El precio del servicio de "+ Servicios[i]+" es de $"+ Precios[i])
}

//Paquete1
const PaqueteUno = Servicios.slice(0,4)

//Paquete2
const PaqueteDos = Servicios.slice(4,8)

//Prompt para buscar servicio
let Buscado = prompt("Por favor ingrese servicio que desea buscar") //No supe donde meter por ejemplo un .toLowerCase para que acepte el nombre si se escribe en minuscula/ mayuscula
let Busqueda = Servicios.indexOf (Buscado)
    if (Busqueda < 0) {
        alert("Su busqueda no coincide con nuestro catalogo, vea nuestros otros servicios");
    }
    else {
        alert("Su busqueda ha dado los siguientes resultados")
    }

const PaqueteUnoPrecios = [{id:"Cabello", precio: 25},
                        {id: "Facial", precio: 40},
                        {id: "Maquillaje", precio: 30},
                        {id: "Manicure", precio: 20}];
console.log("PAQUETE 1")
for(let ofertas of PaqueteUnoPrecios){
    console.log("El precio por sesion del servicio de "+ofertas.id+" es de $"+ofertas.precio)
                        }

const PaqueteDosPrecios = [{id:"Reiki",  precio: 28},
                        {id:"Sastre", precio: 21},
                        {id:"Acupuntura", precio: 19},
                        {id:"Tibetano", precio: 33}];
console.log("PAQUETE 2")
for(let ofertas of PaqueteDosPrecios){
    console.log("El precio por sesion del servicio de "+ofertas.id+" es de $"+ofertas.precio)
}





