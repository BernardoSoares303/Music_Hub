const generos = {};

dados.musicas.forEach(musica => {

    if (generos[musica.genero]) {
        generos[musica.genero]++;
    } else {
        generos[musica.genero] = 1;
    }

});

const labels = Object.keys(generos);
const valores = Object.values(generos);

const ctx = document.getElementById("graficoGenero");

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
