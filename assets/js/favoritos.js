async function carregarFavoritos() {

    const lista =
        document.getElementById(
            "listaFavoritos"
        );

    // USUARIO LOGADO

    const usuario = JSON.parse(
        sessionStorage.getItem(
            "usuarioLogado"
        )
    );

    // SEM LOGIN

    if (!usuario) {

        lista.innerHTML = `

      <div class="mensagem-vazia">

        <h3>
          Faça login para acessar seus favoritos.
        </h3>

      </div>

    `;

        return;
    }

    // BUSCA MUSICAS

    const response =
        await fetch(API);

    const musicas =
        await response.json();

    // FILTRA FAVORITAS

    const favoritas =
        musicas.filter(musica =>

            usuario.favoritos?.includes(
                Number(musica.id)
            )
        );

    // SEM FAVORITOS

    if (favoritas.length === 0) {

        lista.innerHTML = `

      <div class="mensagem-vazia">

        <h3>
          Você ainda não possui músicas favoritas.
        </h3>

      </div>

    `;

        return;
    }

    // RENDERIZA CARDS

    lista.innerHTML = favoritas.map(musica => `

    <div class="col-lg-4 col-md-6 mb-4">

      <div class="card card-favorito h-100">

        <img
          src="${musica.imagem}"
          class="card-img-top imagem-card"
        >

        <div class="card-body d-flex flex-column">

          <div class="d-flex justify-content-between align-items-center">

            <h5 class="card-title">

              ${musica.nome}

            </h5>

            <i
              class="bi bi-heart-fill icone-favorito"
              onclick="toggleFavorito(${musica.id})"
            ></i>

          </div>

          <p class="card-text">

            ${musica.descricao}

          </p>

          <a
            href="detalhes.html?id=${musica.id}"
            class="btn btn-custom mt-auto"
          >
            Ver detalhes
          </a>

        </div>

      </div>

    </div>

  `).join("");
}