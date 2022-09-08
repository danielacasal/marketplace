let resultado = 0;

function TotalCarrito(Servicio1,Servicio2,Servicio3,Servicio4) {
    subtotal = Servicio1 + Servicio2 + Servicio3 + Servicio4
    descuento = subtotal*0.10
    resultado = (Servicio1 + Servicio2 + Servicio3 + Servicio4)-descuento
}

function mostrar() {
    console.log("El total por separado es" + " " + subtotal)
    console.log("Al comprar el paquete ahorras 10%, nuevo total es" + " " + resultado)
}
//Paquete 1
TotalCarrito(25,40,30,20);
mostrar();

//Paquete 2
TotalCarrito(28,21,19,33);
mostrar();

