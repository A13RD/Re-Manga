// ==============================
// DATOS DEL CATÁLOGO
// ==============================

const mangas = [
    {
        id: 1,
        titulo: "One Piece",
        volumen: 1,
        autor: "Eiichiro Oda",
        genero: "Shonen",
        precio: 30000,
        estado: "Buen estado",
        imagen: "https://covers.openlibrary.org/isbn/9781569312200-L.jpg"
    },
    {
        id: 2,
        titulo: "Berserk",
        volumen: 1,
        autor: "Kentaro Miura",
        genero: "Seinen",
        precio: 45000,
        estado: "Muy buen estado",
        imagen: "https://covers.openlibrary.org/isbn/9781593070209-L.jpg"
    },
    {
        id: 3,
        titulo: "Naruto",
        volumen: 1,
        autor: "Masashi Kishimoto",
        genero: "Shonen",
        precio: 28000,
        estado: "Buen estado",
        imagen: "https://covers.openlibrary.org/isbn/9781569319000-L.jpg"
    },
    {
        id: 4,
        titulo: "Jujutsu Kaisen",
        volumen: 1,
        autor: "Gege Akutami",
        genero: "Shonen",
        precio: 35000,
        estado: "Como nuevo",
        imagen: "https://covers.openlibrary.org/isbn/9781974710027-L.jpg"
    },
    {
        id: 5,
        titulo: "Demon Slayer",
        volumen: 1,
        autor: "Koyoharu Gotouge",
        genero: "Shonen",
        precio: 32000,
        estado: "Buen estado",
        imagen: "https://covers.openlibrary.org/isbn/9781974700523-L.jpg"
    },
    {
        id: 6,
        titulo: "Chainsaw Man",
        volumen: 1,
        autor: "Tatsuki Fujimoto",
        genero: "Shonen",
        precio: 35000,
        estado: "Muy buen estado",
        imagen: "https://covers.openlibrary.org/isbn/9781974709939-L.jpg"
    }
];


// ==============================
// GENERAR CATÁLOGO
// ==============================

const catalogo = document.querySelector("#catalogo-grid");

function mostrarMangas() {

    catalogo.innerHTML = "";

    mangas.forEach(function (manga) {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("manga-card");

        tarjeta.innerHTML = `
            <img 
                src="${manga.imagen}" 
                alt="Portada de ${manga.titulo}, volumen ${manga.volumen}"
            >

            <div class="manga-card-content">

                <span class="manga-genero">
                    ${manga.genero}
                </span>

                <h3>${manga.titulo}</h3>

                <p class="manga-volumen">
                    Tomo ${manga.volumen} · ${manga.autor}
                </p>

                <p class="manga-estado">
                    ${manga.estado}
                </p>

                <strong class="manga-precio">
                    $${manga.precio.toLocaleString("es-CO")}
                </strong>

            </div>
        `;

        catalogo.appendChild(tarjeta);
    });
}


// ==============================
// INICIAR CATÁLOGO
// ==============================

mostrarMangas();