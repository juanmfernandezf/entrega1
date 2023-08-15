document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-list");

    // Cargar productos desde el archivo JSON local
    fetch("listaproductos.json")
        .then(response => response.json())
        .then(products => {
            // Generar la lista de productos
            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                // Agregar información del producto a la tarjeta
                // Acceder a los campos del producto como product.nombre, product.precio, etc.
                productCard.innerHTML = `
                    <img src="${product.imagen}" alt="${product.nombre}">
                    <h2>${product.nombre}</h2>
                    <p>${product.descripcion}</p>
                    <p>Precio: $${product.precio}</p>
                    <p>Cantidad vendida: ${product.cantidad_vendidos}</p>
                `;

                productContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error("Error al cargar los productos:", error));
});
