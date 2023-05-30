function bienvenida(){
    let nombre = prompt("Ingrese su nombre")
    alert("Bienvenido " + nombre + " a Nora Rey Boutique")
}

function comprar(){
        let plato = prompt(`Seleccione un plato congelado
        1: ${plato1.nombre}    
        2: ${plato2.nombre}
        3: ${plato3.nombre}
        4: ${plato4.nombre}
        `)
        switch(plato){
            case "1":
                alert(`Agregaste al carrito 1 ${plato1.nombre}, valor ${plato1.precio}`)
                carrito.push(plato1)
                importeFinal = importeFinal + plato1.precio; 

            break;
            case "2":
                alert(`Agregaste al carrito 1 ${plato2.nombre}, valor ${plato2.precio}`)
                carrito.push(plato2)
                importeFinal = importeFinal + plato2.precio;
            break;
            case "3":
                alert(`Agregaste al carrito 1 ${plato3.nombre}, valor ${plato3.precio}`)
                carrito.push(plato3)
                importeFinal = importeFinal + plato3.precio;
            break;
            case "4":
                alert(`Agregaste al carrito 1 ${plato4.nombre}, valor ${plato3.precio}`)
                carrito.push(plato4)
                importeFinal = importeFinal + plato4.precio;
            break;
            default:
                alert("Ninguna opción es válida")
            break;   
        } 
        alert(`El subtotal de su carrito es ${importeFinal}`)
    }

function terminar(){
    console.log(carrito)
    alert(`El imorte a pagar son ${importeFinal} pesos`)
    alert("Gracias por su compra")
}
function Plato(nombre, precio, ingrediente, disponible){
    this.nombre = nombre
    this.precio = precio
    this.ingrediente = ingrediente
    this.disponible = true
}

const plato1 = new Plato("Lasagna de carne", 780, "carne")
const plato2 = new Plato("Lasagna de pollo", 780, "pollo")
const plato3 = new Plato("Canelones de carne", 650, "carne")
const plato4 = new Plato("Carne a la pimienta", 1050, "carne")
const platos = [
    plato1,
    plato2,
    plato3,
    plato4]
console.log(platos)

let importeFinal = 0;
const carrito = []
bienvenida()
comprar()
let respuesta = prompt(`¿Qué desea hacer?
1: Agregar más platos
2: Mostrar carrito
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
let totalCompra = carrito.reduce((accum, plato)=>{
    return accum + plato.precio}, 0)
console.log(totalCompra)

let precioMenorQue = platos.filter((plato) => plato.precio < 700)
console.log([precioMenorQue])

