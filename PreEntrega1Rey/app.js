function bienvenida(){
    let nombre = prompt("Ingrese su nombre")
    alert("Bienvenido " + nombre + " a Nora Rey Boutique")

}
function comprar(){
    let plato = prompt(`Seleccione un plato congelado
    1: Lasagna de carne
    2: Lasagna de Pollo
    3: Canelones de carne
    4: Carne a la pimienta verde
    `)
    switch(plato){
        case "1":
            alert(`Agregaste al carrito 1 Lasagna de carne, valor ${lasagnaCarne}`)
            importeFinal = importeFinal + lasagnaCarne; 
        break;
        case "2":
            alert(`Agregaste al carrito 1 Lasagna de Pollo, valor ${lasagnaPollo}`)
            importeFinal = importeFinal + lasagnaPollo;
        break;
        case "3":
            alert(`Agregaste al carrito 1 Canelones de carne, valor ${canelonesCarne}`)
            importeFinal = importeFinal + canelonesCarne;
        break;
        case "4":
            alert(`Agregaste al carrito Carne a la pimienta, valor ${carnePimienta}`)
            importeFinal = importeFinal + carnePimienta;
        break;
        default:
            alert("Ninguna opción es válida")
        break;   
    } 
    alert(`El subtotal de su carrito es ${importeFinal}`)
    
}

function terminar(){
    alert(`El imorte a pagar son ${importeFinal} pesos`)
    alert("Gracias por su compra")
}



let plato
let lasagnaCarne = 780;
let lasagnaPollo = 780;
let canelonesCarne = 650;
let carnePimienta = 1050;
let importeFinal = 0

bienvenida()
comprar()
let respuesta = prompt(`¿Qué desea hacer?
1: Agregar más platos
2: Ir a pagar
3: Cancelar`)
while (respuesta !=="3"){
    if (respuesta === "1"){
        comprar()
        respuesta = prompt(`¿Qué desea hacer?
        1: Agregar más platos
        2: Ir a pagar
        3: Cancelar`)

     }
    else if(respuesta === "2"){
        terminar()
        respuesta = "3";
    }
}


