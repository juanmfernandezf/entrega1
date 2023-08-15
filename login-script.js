document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Simulamos la autenticación
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Comprobar las credenciales (ficticio)
        if (username === "usuario" && password === "contraseña") {
            // Guardar el estado de autenticación en localStorage
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "products.html"; // Redirigir a la pagina de productos
        } else {
            alert("Credenciales incorrectas");
        }
    });
});

