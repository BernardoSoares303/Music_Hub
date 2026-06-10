const form = document.getElementById("cadastroForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const usuario = {

        nome: document.getElementById("nome").value,

        email: document.getElementById("email").value,

        login: document.getElementById("login").value,

        senha: document.getElementById("senha").value,

        admin: false,

        favoritos: []
    };

    try {

        await fetch("http://localhost:3000/usuarios", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(usuario)

        });

        window.location.href = "login.html";

    } catch (error) {

        console.log(error);

        alert("Erro ao cadastrar usuário");

    }

});