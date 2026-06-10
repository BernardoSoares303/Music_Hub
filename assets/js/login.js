const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

  try{

    const response = await fetch(
      `http://localhost:3000/usuarios?login=${login}&senha=${senha}`
    );

    const usuarios = await response.json();

    if(usuarios.length > 0){

      sessionStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuarios[0])
      );

      alert("Login realizado!");

      window.location.href = "../../index.html";

    } else {

      alert("Login ou senha inválidos");

    }

  } catch(error){

    console.log(error);

    alert("Erro ao conectar com JSON Server");

  }

});