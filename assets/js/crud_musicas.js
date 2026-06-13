const form =
    document.getElementById(
        "formMusica"
    );

// =========================
// CARREGAR MUSICAS
// =========================

async function carregarMusicasCrud() {

    const lista =
        document.getElementById(
            "listaMusicasCrud"
        );

    const response =
        await fetch(API);

    const musicas =
        await response.json();

    lista.innerHTML =
        musicas.map(musica => `

        <div class="col-lg-4 mb-4">

            <div class="card crud-card h-100">

                <img
                    src="${musica.imagem}"
                    class="card-img-top imagem-card"
                >

                <div class="card-body">

                    <h5>
                        ${musica.nome}
                    </h5>

                    <p>
                        ${musica.artista}
                    </p>

                    <div class="d-flex gap-2">

                        <button
                            class="btn btn-warning w-100"
                            onclick="editarMusica('${musica.id}')"
                        >
                            Editar
                        </button>

                        <button
                            class="btn btn-danger w-100"
                            onclick="deletarMusica('${musica.id}')"
                        >
                            Excluir
                        </button>

                    </div>

                </div>

            </div>

        </div>

    `).join("");
}

// =========================
// SALVAR
// =========================

form.addEventListener(
    "submit",
    async (e) => {

        e.preventDefault();

        const id =
            document.getElementById(
                "idMusica"
            ).value;

        const musica = {

            nome:
                document.getElementById(
                    "nome"
                ).value,

            artista:
                document.getElementById(
                    "artista"
                ).value,

            descricao:
                document.getElementById(
                    "descricao"
                ).value,

            conteudo:
                document.getElementById(
                    "conteudo"
                ).value,

            genero:
                document.getElementById(
                    "genero"
                ).value,

            ano: Number(

                document.getElementById(
                    "ano"
                ).value
            ),

            destaque:
                document.getElementById(
                    "destaque"
                ).checked,

            imagem:
                document.getElementById(
                    "imagem"
                ).value
        };

        // EDITAR

        if (id) {

            await fetch(`${API}/${id}`, {

                method: "PUT",

                headers: {

                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify(
                    musica
                )
            });

        }

        // CRIAR

        else {

            await fetch(API, {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify(
                    musica
                )
            });
        }

        form.reset();

        document.getElementById(
            "idMusica"
        ).value = "";

        carregarMusicasCrud();
    }
);

// =========================
// EDITAR
// =========================

async function editarMusica(id) {

    const response =
        await fetch(`${API}/${id}`);

    const musica =
        await response.json();

    document.getElementById(
        "idMusica"
    ).value = musica.id;

    document.getElementById(
        "nome"
    ).value = musica.nome;

    document.getElementById(
        "artista"
    ).value = musica.artista;

    document.getElementById(
        "imagem"
    ).value = musica.imagem;

    document.getElementById(
        "descricao"
    ).value = musica.descricao;
    
    document.getElementById(
        "conteudo"
    ).value = musica.conteudo;

    document.getElementById(
        "genero"
    ).value = musica.genero;

    document.getElementById(
        "ano"
    ).value = musica.ano;

    document.getElementById(
        "destaque"
    ).checked = musica.destaque;

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });
}

// =========================
// EXCLUIR
// =========================

async function deletarMusica(id) {

    const confirmar =
        confirm(
            "Deseja excluir essa música?"
        );

    if (!confirmar) {

        return;
    }

    await fetch(`${API}/${id}`, {

        method: "DELETE"
    });

    carregarMusicasCrud();
}