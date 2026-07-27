 // Variable para contar los productos seleccionados
let total = 0;

// 1. SUMAR / RESTAR AL CONTADOR DE LA TIENDITA
function agregarAlContador(boton) {
    if (boton.innerText === "❤️ Me interesa") {
        boton.innerText = "✔ Seleccionado";
        boton.style.backgroundColor = "red";
        total = total + 1;
    } else {
        boton.innerText = "❤️ Me interesa";
        boton.style.backgroundColor = "#1a233a";
        total = total - 1;
    }

    document.getElementById("contador").innerText = total;
}

// 2. FILTRAR POR CATEGORÍAS USANDO SWITCH
function filtrarCategoria(categoria) {
    let productos = document.querySelectorAll(".producto");

    for (let i = 0; i < productos.length; i++) {
        let prod = productos[i];

        switch (categoria) {
            case "accesorios":
                if (prod.classList.contains("accesorios")) {
                    prod.style.display = "block";
                } else {
                    prod.style.display = "none";
                }
                break;

            case "pantallas":
                if (prod.classList.contains("pantallas")) {
                    prod.style.display = "block";
                } else {
                    prod.style.display = "none";
                }
                break;

            case "cpu":
                if (prod.classList.contains("cpu")) {
                    prod.style.display = "block";
                } else {
                    prod.style.display = "none";
                }
                break;

            case "laptops":
                if (prod.classList.contains("laptops")) {
                    prod.style.display = "block";
                } else {
                    prod.style.display = "none";
                }
                break;

            default:
                // Mostrar todos los productos
                prod.style.display = "block";
                break;
        }
    }
}

// 3. BUSCADOR EN TIEMPO REAL
function buscarProductos() {
    let texto = document.getElementById("input-buscar").value.toLowerCase();
    let productos = document.querySelectorAll(".producto");

    for (let i = 0; i < productos.length; i++) {
        let prod = productos[i];
        let nombre = prod.innerText.toLowerCase();

        if (nombre.includes(texto)) {
            prod.style.display = "block";
        } else {
            prod.style.display = "none";
        }
    }
}