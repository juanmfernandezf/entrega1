document.addEventListener("DOMContentLoaded", () => {
    // Comprobar si el usuario está autenticado
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        window.location.href = "products.html"; // Redirigir a la página de inicio de sesión
    }
});
