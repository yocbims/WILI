// La misma lista de productos que en script.js
const products = [
    {
        id: 1,
        name: "Cabecera de cama Matrimonial",
        image: "imagenes/1.jpg",
        price: "S/ 1,200",
        description: "Cabecera de cama matrimonial con diseño moderno, tapizado en tela resistente color azul oscuro. Ideal para un dormitorio elegante."
    },
    {
        id: 2,
        name: "Cabecera de Cama",
        image: "imagenes/2.jpg",
        price: "S/ 950",
        description: "Cabecera de cama simple con acabado capitoné en color gris claro. Proporciona un toque de sofisticación y confort."
    },
    {
        id: 3,
        name: "Cabecera de Cama King",
        image: "imagenes/3.jpg",
        price: "S/ 1,450",
        description: "Cabecera de cama king con forma de oreja, tapizado en un elegante color gris oscuro. Diseño único y robusto."
    },
    {
        id: 4,
        name: "Cabecera con Diseño de Rombos",
        image: "imagenes/4.jpg",
        price: "S/ 1,100",
        description: "Cabecera de cama con diseño de rombos, tapizado en tela de alta calidad. Combina perfectamente con cualquier estilo de decoración."
    },
    {
        id: 5,
        name: "Cabecera con un Patrón de Cuadros",
        image: "imagenes/5.jpg",
        price: "S/ 1,300",
        description: "Cabecera de cama con un patrón de cuadros grandes, tapizado en color negro. Un diseño audaz y contemporáneo para tu habitación."
    },
    {
        id: 6,
        name: "Cabecera Tablillas Verticales",
        image: "imagenes/6.jpg",
        price: "S/ 800",
        description: "Cabecera de cama de madera con un diseño de tablillas verticales. Simple, minimalista y perfecto para ambientes rústicos o modernos."
    }
];

// Obtener el ID del producto de la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Buscar el producto en el array
const selectedProduct = products.find(p => p.id == productId);

const detailsContainer = document.getElementById('details-container');

if (selectedProduct) {
    // Si se encuentra el producto, renderizar el HTML con sus datos
    detailsContainer.innerHTML = `
        <div class="product-image-container">
            <img src="${selectedProduct.image}" alt="${selectedProduct.name}">
        </div>
        <div class="product-info-container">
            <h2>${selectedProduct.name}</h2>
            <p class="product-price">${selectedProduct.price}</p>
            <p class="product-description">${selectedProduct.description}</p>
            <button class="add-to-cart-btn">Añadir al Carrito</button>
        </div>
    `;
    document.title = selectedProduct.name;
} else {
    // Si no se encuentra el producto
    detailsContainer.innerHTML = `<p class="not-found-message">Producto no encontrado.</p>`;
    document.title = "Producto no encontrado";
}