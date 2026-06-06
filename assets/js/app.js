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
    },
    {
      id: 7,
      nome: "Anunciação",
      artista: "Alceu Valença",
      descricao: "Clássico da MPB brasileira",
      conteudo: "Uma das músicas mais conhecidas da música popular brasileira, marcada pelo ritmo nordestino e letra marcante.",
      genero: "MPB",
      ano: 1983,
      destaque: false,
      imagem: "assets/img/Anunciacao.jpg",
      fotos: [
        {
          titulo: "Show ao vivo",
          imagem: "https://upload.wikimedia.org/wikipedia/commons/6/63/Alceu_Valen%C3%A7a.jpg"
        }
      ]
    },
    {
      id: 8,
      nome: "505",
      artista: "Arctic Monkeys",
      descricao: "Indie rock melancólico",
      conteudo: "Faixa muito popular da banda Arctic Monkeys, conhecida pela atmosfera emocional e instrumental crescente.",
      genero: "Indie Rock",
      ano: 2007,
      destaque: false,
      imagem: "assets/img/505.jpg",
      fotos: [
        {
          titulo: "Banda ao vivo",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0z3x2r8n0Z2vX9R8z9qQYv3iA0f7j5l2Nlw&s"
        }
      ]
    },
    {
      id: 9,
      nome: "Billie Jean",
      artista: "Michael Jackson",
      descricao: "Hit lendário do pop",
      conteudo: "Uma das músicas mais famosas de Michael Jackson, com linha de baixo icônica e grande impacto cultural.",
      genero: "Pop",
      ano: 1982,
      destaque: false,
      imagem: "assets/img/Billie_Jean.jpg",
      fotos: [
        {
          titulo: "Performance clássica",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLF0P7z9I8Gf4L2A5L7h0y9M1o8P8YQ3dKcA&s"
        }
      ]
    },
    {
      id: 10,
      nome: "Chorar Faz Bem",
      artista: "Big Rush",
      descricao: "Plug brasileiro com leve toque de piseiro",
      conteudo: "Música que mistura elementos do plug com influências do piseiro, demonstrando extrema versatilidade do artista.",
      genero: "Plug",
      ano: 2026,
      destaque: true,
      imagem: "assets/img/Chorar_Faz_Bem.jpg",
      fotos: [
        {
          titulo: "Show do Big Rush",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRuW4W0f4PjzJ4x0zK9A4Q7Y6m5Y2cW7eD7g&s"
        }
      ]
    },
    {
      id: 11,
      nome: "Get Lucky",
      artista: "Daft Punk",
      descricao: "Sucesso eletrônico mundial",
      conteudo: "Uma mistura de disco e música eletrônica que marcou os anos 2010.",
      genero: "Eletrônica",
      ano: 2013,
      destaque: false,
      imagem: "assets/img/Get_Lucky.jpg",
      fotos: [
        {
          titulo: "Daft Punk",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7cL8v9w1N4xX0h2B6P8fQ2k7n6v5m4t3s9A&s"
        }
      ]
    },
    {
      id: 12,
      nome: "Tempo Perdido",
      artista: "Legião Urbana",
      descricao: "Rock brasileiro clássico",
      conteudo: "Uma das músicas mais importantes do rock nacional brasileiro.",
      genero: "Rock",
      ano: 1986,
      destaque: false,
      imagem: "assets/img/Tempo_Perdido.jpg",
      fotos: [
        {
          titulo: "Legião Urbana",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d2w3k6n9m8v7x5z1a0b2c3d4e5f6g7h8iQ&s"
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


