document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-list");

    // Cargar productos desde el archivo JSON local
    fetch("listaproductos.json")
        .then(response => response.json())
        .then(data => {
            const products = data.products;

            // Generar la lista de productos
            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                // Agregar información del producto a la tarjeta
                productCard.innerHTML = `
                    <img src="${product['product.imagen']}" alt="${product['product.nombre']}">
                    <h2>${product['product.nombre']}</h2>
                    <p>${product['product.descripcion']}</p>
                    <p>Precio: ${product.cost} ${product.currency}</p>
                    <p>Cantidad vendida: ${product.soldCount}</p>
                `;

                productContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error("Error al cargar los productos:", error));
});
