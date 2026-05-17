const dados = {
  musicas: [
    {
      id: 1,
      nome: "Blinding Lights",
      artista: "The Weeknd",
      descricao: "Hit mundial com vibe retrô",
      conteudo: "Uma das músicas mais ouvidas da história do streaming.",
      genero: "Pop",
      ano: 2020,
      destaque: true,
      imagem: "assets/img/Blinding+Lights.jpg",
      fotos: [
        { titulo: "Show ao vivo", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyAuae5SLcw-q2PlFX54mL20rFRfbwiTenNA&s" },
        { titulo: "Capa do álbum", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCBeijloijy7UC30U0A9Z4-hso9f3Z7nD0A&s" }
      ]
    },
    {
      id: 2,
      nome: "Shape of You",
      artista: "Ed Sheeran",
      descricao: "Sucesso global romântico",
      conteudo: "Uma das músicas mais populares do mundo.",
      genero: "Pop",
      ano: 2017,
      destaque: true,
      imagem: "assets/img/Shape_of_You.jpg",
      fotos: [
        { titulo: "Show", imagem: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/05/Ed-Sheeran-se-apresenta-na-Loop-Tour.png?w=596" }
      ]
    },
    {
      id: 3,
      nome: "Believer",
      artista: "Imagine Dragons",
      descricao: "Rock energético",
      conteudo: "Grande sucesso com batidas fortes e mensagem intensa.",
      genero: "Rock",
      ano: 2018,
      destaque: true,
      imagem: "assets/img/Believer.jpg",
      fotos: [
        { titulo: "Clipe", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHgBs3pK0zFmNrjeiHns1-GKoFkzPrtQRbQ&s" }
      ]
    },
    {
      id: 4,
      nome: "Levitating",
      artista: "Dua Lipa",
      descricao: "Pop dançante moderno",
      conteudo: "Uma música viral com estilo retrô futurista.",
      genero: "Pop",
      ano: 2020,
      destaque: true,
      imagem: "assets/img/Levitating.jpg",
      fotos: [
        { titulo: "Performance", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQSZO6uj0_cV1C0X2Bx8H1VnMR3lIM7xFISw&s" }
      ]
    },
    {
      id: 5,
      nome: "HUMBLE.",
      artista: "Kendrick Lamar",
      descricao: "Rap icônico",
      conteudo: "Uma das músicas mais influentes do hip-hop moderno.",
      genero: "Rap",
      ano: 2017,
      destaque: false,
      imagem: "assets/img/Humble.jpg",
      fotos: [
        { titulo: "Show", imagem: "https://i0.wp.com/www.madsound.com.br/wp-content/uploads/2019/04/kendrick-lamar.jpg?fit=896%2C406&ssl=1" }
      ]
    },
    {
      id: 6,
      nome: "Faça Dinheiro, Se Mantenha Vivo",
      artista: "Leall",
      descricao: "Trap brasileiro com mensagem de sobrevivência",
      conteudo: "Uma das faixas mais marcantes de Leal, trazendo reflexões sobre a realidade urbana, foco em progresso e a importância de se manter firme diante das dificuldades.",
      genero: "Trap/Rap",
      ano: 2020,
      destaque: false,
      imagem: "assets/img/faca_dinheiro.jpg",
      fotos: [
        {
          titulo: "Show ao vivo",
          imagem: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
        },
        {
          titulo: "Performance no palco",
          imagem: "https://i.ytimg.com/vi/_sKulk_RrqU/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLAD-gbRfuOn4M0pxwzNIqImpQzwrw"
        }
      ]
    }
  ]
};

// INDEX
function carregarIndex() {
  carregarCards();
  carregarDestaques();
}

// CARDS
function carregarCards() {
  const lista = document.getElementById("lista");

  lista.innerHTML = dados.musicas.map(m => `
    <div class="col-md-4 mb-3">
      <div class="card bg-card text-light">
        <img src="${m.imagem}" class="card-img-top">
        <div class="card-body">
          <h5>${m.nome}</h5>
          <p>${m.descricao}</p>
          <a href="detalhes.html?id=${m.id}" class="btn btn-custom w-100">Ver mais</a>
        </div>
      </div>
    </div>
  `).join("");
}

// SLIDER
function carregarDestaques() {
  const slider = document.getElementById("slider");

  const destaques = dados.musicas.filter(m => m.destaque);

  slider.innerHTML = `
    <div id="carousel" class="carousel slide">
      <div class="carousel-inner">

        ${destaques.map((m, i) => `
          <div class="carousel-item ${i === 0 ? 'active' : ''}">
            <img src="${m.imagem}" class="d-block w-100">
            <div class="carousel-caption">
              <h5>${m.nome}</h5>
              <p>${m.descricao}</p>
            </div>
          </div>
        `).join("")}

      </div>

      <button class="carousel-control-prev" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>

      <button class="carousel-control-next" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  `;
}

// DETALHE



function carregarDetalhe() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const musica = dados.musicas.find(m => m.id === id);

  document.getElementById("img").innerHTML = `
    <img src="${musica.imagem}" class="img-fluid rounded">
  `;

  document.getElementById("info").innerHTML = `
    <h2 class="text-purple">${musica.nome}</h2>

    <p><strong>Artista:</strong> ${musica.artista}</p>
    <p><strong>Gênero:</strong> ${musica.genero}</p>
    <p><strong>Ano:</strong> ${musica.ano}</p>

    <p class="mt-3">${musica.conteudo}</p>

    <a href="index.html" class="btn btn-custom mt-3">Voltar</a>
  `;

  document.getElementById("fotos").innerHTML = musica.fotos.map(f => `
    <div class="col-6 col-md-3 mb-3">
      <img src="${f.imagem}" class="img-fluid rounded">
      <p class="text-center mt-2">${f.titulo}</p>
    </div>
  `).join("");
}


