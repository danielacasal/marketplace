const serviciosCosmeticos = ["Cabello", "Facial", "Maquillaje", "Manicure"]
const serviciosOtros = ["Reiki", "Sastre","Psicologia","Medicina"]
const servicios = serviciosCosmeticos.concat(serviciosOtros)
servicios.push ("Acupuntura", "Tibetano")
servicios.splice (6,2)
console.log("Lista de todos los servicios: "+ servicios.join(", "))

const precios = [30,20,28,21,19,33,200]
precios.unshift (100,25,40,)
precios.pop()
precios.shift()

//Mostrar precio de todos los servicios
for (let i = 0; i<8;i++) {
    console.log("El precio del servicio de "+ servicios[i]+" es de $"+ precios[i])
}

//Paquete1
const paqueteUno = servicios.slice(0,4)

//Paquete2
const paqueteDos = servicios.slice(4,8)

//Prompt para buscar servicio
let buscado = prompt("Por favor ingrese servicio que desea buscar") //No supe donde meter por ejemplo un .toLowerCase para que acepte el nombre si se escribe en minuscula/ mayuscula
let busqueda = servicios.indexOf (buscado)
    if (busqueda < 0) {
        alert("Su busqueda no coincide con nuestro catalogo, vea nuestros otros servicios");
    }
    else {
        alert("Su busqueda ha dado los siguientes resultados")
    }

const paqueteUnoPrecios = [{id:"Cabello", precio: 25},
                        {id: "Facial", precio: 40},
                        {id: "Maquillaje", precio: 30},
                        {id: "Manicure", precio: 20}];
console.log("PAQUETE 1")
for(let ofertas of paqueteUnoPrecios){
    console.log("El precio por sesion del servicio de "+ofertas.id+" es de $"+ofertas.precio)
                        }

const paqueteDosPrecios = [{id:"Reiki",  precio: 28},
                        {id:"Sastre", precio: 21},
                        {id:"Acupuntura", precio: 19},
                        {id:"Tibetano", precio: 33}];
console.log("PAQUETE 2")
for(let ofertas of paqueteDosPrecios){
    console.log("El precio por sesion del servicio de "+ofertas.id+" es de $"+ofertas.precio)
}





