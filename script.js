// Array de productos con sus datos completos
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

// Obtener el contenedor principal del DOM
const productContainer = document.getElementById('product-container');

// Iterar sobre cada producto y crear su tarjeta
products.forEach(product => {
    // Crear el elemento div para la tarjeta
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // Asignar el HTML interno con la imagen, nombre y precio
    productCard.innerHTML = `
        <a href="producto_detalle.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h4>${product.name}</h4>
                <p class="price">${product.price}</p>
            </div>
        </a>
    `;

    // Añadir la tarjeta al contenedor principal
    productContainer.appendChild(productCard);
});