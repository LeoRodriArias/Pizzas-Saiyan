let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');

    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio.toFixed(3)}`;
        listaCarrito.appendChild(li);
    });

    totalElemento.textContent = total.toFixed(3);
}

function pagar() {
    alert(`Total a pagar: $${total.toFixed(3)}`);
    vaciarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}

function toggleCarrito() {      
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.style.display = (carritoDiv.style.display === 'block') ? 'none' : 'block';
}

function toggleAccordion(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}