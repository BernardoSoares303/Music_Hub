async function carregarGrafico() {

    try {

        // BUSCA MUSICAS
        const response = await fetch(
            "http://localhost:3000/musicas"
        );

        const musicas = await response.json();

        // OBJETO DOS GENEROS
        const generos = {};

        // CONTA GENEROS
        musicas.forEach(musica => {

            if (generos[musica.genero]) {

                generos[musica.genero]++;

            } else {

                generos[musica.genero] = 1;
            }
        });

        // LABELS
        const labels = Object.keys(generos);

        // VALORES
        const valores = Object.values(generos);

        // CANVAS
        const ctx = document.getElementById("graficoGenero");

        // GRAFICO
        new Chart(ctx, {

            type: "pie",

            data: {

                labels: labels,

                datasets: [{

                    label: "Músicas por gênero",

                    data: valores,

                    borderWidth: 1
                }]
            },

            options: {

                responsive: true,

                plugins: {

                    legend: {

                        labels: {

                            color: "white"
                        }
                    }
                }
            }
        });

    } catch (error) {

        console.log(error);

        alert("Erro ao carregar gráfico");
    }
}

// EXECUTA
carregarGrafico();