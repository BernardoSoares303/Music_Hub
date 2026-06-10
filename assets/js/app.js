const API = "http://localhost:3000/musicas";

// =========================
// INDEX
// =========================

async function carregarIndex() {

  await carregarCards();

  await carregarDestaques();
}

// =========================
// FAVORITOS
// =========================

async function toggleFavorito(idMusica) {

  let usuario = JSON.parse(
    sessionStorage.getItem("usuarioLogado")
  );

  if (!usuario) {

    alert("Faça login para favoritar");

    return;
  }

  // GARANTE ARRAY

  if (!usuario.favoritos) {

    usuario.favoritos = [];
  }

  idMusica = Number(idMusica);

  const jaExiste =
    usuario.favoritos.includes(idMusica);

  // REMOVE

  if (jaExiste) {

    usuario.favoritos =
      usuario.favoritos.filter(
        id => id !== idMusica
      );

  } else {

    // ADICIONA

    usuario.favoritos.push(idMusica);
  }

  // ATUALIZA JSON SERVER

  await fetch(
    `http://localhost:3000/usuarios/${usuario.id}`,
    {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        favoritos: usuario.favoritos
      })
    }
  );

  // ATUALIZA SESSION

  sessionStorage.setItem(
    "usuarioLogado",
    JSON.stringify(usuario)
  );

  // RECARREGA

  carregarCards();
}

// =========================
// CARDS
// =========================

async function carregarCards() {

  const lista =
    document.getElementById("lista");

  const pesquisa =
    document.getElementById("pesquisa")
      ?.value.toLowerCase() || "";

  // BUSCA MUSICAS

  const response =
    await fetch(API);

  let musicas =
    await response.json();

  // FILTRO PESQUISA

  musicas = musicas.filter(m =>
    m.nome.toLowerCase()
      .includes(pesquisa)
  );

  // USUARIO

  const usuario = JSON.parse(
    sessionStorage.getItem("usuarioLogado")
  );

  // CASO NÃO ENCONTRE

  if (musicas.length === 0) {

    lista.innerHTML = `

      <p class="text-center text-light">
        Nenhuma música encontrada.
      </p>

    `;

    return;
  }

  // RENDERIZA

  lista.innerHTML = musicas.map(m => {

    const favorito =
      usuario?.favoritos?.includes(
        Number(m.id)
      );

    return `

      <div class="col-lg-4 col-md-6 mb-4">

        <div class="card bg-card text-light h-100">

          <img 
            src="${m.imagem}" 
            class="card-img-top"
          >

          <div class="card-body d-flex flex-column">

            <div class="d-flex justify-content-between align-items-center mb-2">

              <h5 class="m-0">
                ${m.nome}
              </h5>

              ${usuario ? `

                <i 
                  class="bi ${favorito
          ? 'bi-heart-fill text-danger'
          : 'bi-heart'
        } favorito"

                  onclick="toggleFavorito(${m.id})"
                ></i>

              ` : ""}

            </div>

            <p>
              ${m.descricao}
            </p>

            <a 
              href="detalhes.html?id=${m.id}" 
              class="btn btn-custom w-100 mt-auto"
            >
              Ver mais
            </a>

          </div>

        </div>

      </div>

    `;

  }).join("");
}

// =========================
// DESTAQUES
// =========================

async function carregarDestaques() {

  const slider =
    document.getElementById("slider");

  const response =
    await fetch(API);

  const musicas =
    await response.json();

  const destaques =
    musicas.filter(m => m.destaque);

  slider.innerHTML = `

    <div 
      id="carousel"
      class="carousel slide"
    >

      <div class="carousel-inner">

        ${destaques.map((m, i) => `

          <div class="carousel-item ${i === 0 ? 'active' : ''
    }">

            <img 
              src="${m.imagem}"
              class="d-block w-100"
            >

            <div class="carousel-caption">

              <h5>${m.nome}</h5>

              <p>${m.descricao}</p>

            </div>

          </div>

        `).join("")}

      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >

        <span class="carousel-control-prev-icon"></span>

      </button>

      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >

        <span class="carousel-control-next-icon"></span>

      </button>

    </div>
  `;
}

// =========================
// DETALHES
// =========================

async function carregarDetalhe() {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const id = params.get("id");

  const response =
    await fetch(`${API}/${id}`);

  const musica =
    await response.json();

  const usuario = JSON.parse(
    sessionStorage.getItem("usuarioLogado")
  );

  const favorito =
    usuario?.favoritos?.includes(
      Number(musica.id)
    );

  // IMAGEM

  document.getElementById("img").innerHTML = `

    <img 
      src="${musica.imagem}" 
      class="img-fluid rounded"
    >

  `;

  // INFO

  document.getElementById("info").innerHTML = `

    <div class="d-flex justify-content-between align-items-center">

      <h2 class="text-purple">
        ${musica.nome}
      </h2>

      ${usuario ? `

        <i 
          class="bi ${favorito
        ? 'bi-heart-fill text-danger'
        : 'bi-heart'
      } favorito"

          onclick="toggleFavorito(${musica.id})"
        ></i>

      ` : ""}

    </div>

    <p>
      <strong>Artista:</strong>
      ${musica.artista}
    </p>

    <p>
      <strong>Gênero:</strong>
      ${musica.genero}
    </p>

    <p>
      <strong>Ano:</strong>
      ${musica.ano}
    </p>

    <p class="mt-3">
      ${musica.conteudo}
    </p>

    <a 
      href="index.html" 
      class="btn btn-custom mt-3"
    >
      Voltar
    </a>

  `;

  // GALERIA

  document.getElementById("fotos").innerHTML =
    musica.fotos.map(f => `

      <div class="col-6 col-md-3 mb-3">

        <img
          src="${f.imagem}"
          class="img-fluid rounded"
        >

        <p class="text-center mt-2">
          ${f.titulo}
        </p>

      </div>

    `).join("");
}

// =========================
// PESQUISA
// =========================

function pesquisarMusica() {

  carregarCards();
}