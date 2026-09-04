// ==============================
// DATOS DEL CATÁLOGO
// ==============================

const mangas = [
    {
        id: 1,
        titulo: "Berserk",
        volumen: 28,
        autor: "Kentaro Miura",
        genero: "Seinen",
        precio: 45000,
        estado: "Muy buen estado",
        imagen: "images/berserk-vol28.jpg"
    },
    {
        id: 2,
        titulo: "Vagabond",
        volumen: 24,
        autor: "Takehiko Inoue",
        genero: "Seinen",
        precio: 40000,
        estado: "Buen estado",
        imagen: "images/vagabond-vol24.jpg"
    },
    {
        id: 3,
        titulo: "Jujutsu Kaisen",
        volumen: 1,
        autor: "Gege Akutami",
        genero: "Shonen",
        precio: 35000,
        estado: "Como nuevo",
        imagen: "images/jujutsukaisen-vol1.jpg"
    },
    {
        id: 4,
        titulo: "Bleach",
        volumen: 40,
        autor: "Tite Kubo",
        genero: "Shonen",
        precio: 25000,
        estado: "Aceptable",
        imagen: "images/bleach-vol40.jpg"
    },
    {
        id: 5,
        titulo: "Naruto",
        volumen: 47,
        autor: "Masashi Kishimoto",
        genero: "Shonen",
        precio: 28000,
        estado: "Buen estado",
        imagen: "images/naruto-vol47.jpg"
    },
    {
        id: 6,
        titulo: "One Punch Man",
        volumen: 32,
        autor: "ONE & Yusuke Murata",
        genero: "Seinen",
        precio: 32000,
        estado: "Buen estado",
        imagen: "images/onepunchman-vol32.jpg"
    },
    {
        id: 7,
        titulo: "One Piece",
        volumen: 104,
        autor: "Eiichiro Oda",
        genero: "Shonen",
        precio: 30000,
        estado: "Buen estado",
        imagen: "images/onepiece-vol104.jpg"
    },
    {
        id: 8,
        titulo: "Hunter x Hunter",
        volumen: 37,
        autor: "Yoshihiro Togashi",
        genero: "Shonen",
        precio: 38000,
        estado: "Como nuevo",
        imagen: "images/hunterxhunter-vol37.jpg"
    },
    {
        id: 9,
        titulo: "Tokyo Ghoul",
        volumen: 14,
        autor: "Sui Ishida",
        genero: "Seinen",
        precio: 34000,
        estado: "Muy buen estado",
        imagen: "images/tokyoghoul-vol14.jpg"
    },
    {
        id: 10,
        titulo: "Fullmetal Alchemist",
        volumen: 19,
        autor: "Hiromu Arakawa",
        genero: "Shonen",
        precio: 36000,
        estado: "Buen estado",
        imagen: "images/fullmetal-vol19.jpg"
    },
    {
        id: 11,
        titulo: "Blue Lock",
        volumen: 20,
        autor: "Muneyuki Kaneshiro",
        genero: "Shonen",
        precio: 42000,
        estado: "Como nuevo",
        imagen: "images/bluelock-vol20.jpg"
    },
    {
        id: 12,
        titulo: "Oyasumi Punpun",
        volumen: 12,
        autor: "Inio Asano",
        genero: "Seinen",
        precio: 45000,
        estado: "Muy buen estado",
        imagen: "images/oyasumipunpun-vol12.webp"
    },
    {
        id: 13,
        titulo: "Nana",
        volumen: 21,
        autor: "Ai Yazawa",
        genero: "Josei",
        precio: 35000,
        estado: "Buen estado",
        imagen: "images/nana-vol2.jpg"
    },
    {
        id: 14,
        titulo: "Akira",
        volumen: 1,
        autor: "Katsuhiro Otomo",
        genero: "Seinen",
        precio: 60000,
        estado: "Como nuevo",
        imagen: "images/akira-vol1.jpg"
    },
    {
        id: 15,
        titulo: "Neon Genesis Evangelion",
        volumen: 3,
        autor: "Yoshiyuki Sadamoto",
        genero: "Seinen",
        precio: 48000,
        estado: "Buen estado",
        imagen: "images/neongenesisevangelion-vol3.webp"
    },
    {
        id: 16,
        titulo: "Dragon Ball",
        volumen: 8,
        autor: "Akira Toriyama",
        genero: "Shonen",
        precio: 25000,
        estado: "Aceptable",
        imagen: "images/dragonball-vol8.webp"
    },
    {
        id: 17,
        titulo: "Paradise Kiss",
        volumen: 1,
        autor: "Ai Yazawa",
        genero: "Josei",
        precio: 40000,
        estado: "Buen estado",
        imagen: "images/paradisekiss-vol1.jpg"
    },
    {
        id: 18,
        titulo: "Nodame Cantabile",
        volumen: 6,
        autor: "Tomoko Ninomiya",
        genero: "Josei",
        precio: 32000,
        estado: "Como nuevo",
        imagen: "images/nodamecantabile-vol6.webp"
    },
    {
        id: 19,
        titulo: "Gokinjo Monogatari",
        volumen: 1,
        autor: "Ai Yazawa",
        genero: "Shoujo",
        precio: 38000,
        estado: "Aceptable",
        imagen: "images/gokinjomonogatari-vol1.jpg"
    },
    {
        id: 20,
        titulo: "Ao Haru Ride",
        volumen: 1,
        autor: "Io Sakisaka",
        genero: "Shoujo",
        precio: 30000,
        estado: "Aceptable",
        imagen: "images/aoharuride-vol1.jpg"
    },
    {
        id: 21,
        titulo: "Fruits Basket",
        volumen: 5,
        autor: "Natsuki Takaya",
        genero: "Shoujo",
        precio: 34000,
        estado: "Como nuevo",
        imagen: "images/fruitsbasket-vol5.jpg"
    },
    {
        id: 22,
        titulo: "Bleach",
        volumen: 40,
        autor: "Tite Kubo",
        genero: "Shounen",
        precio: 45000,
        estado: "Como nuevo",
        imagen: "images/bleach-vol40.jpg"
    }
];

// ==============================
// GENERAR CATÁLOGO
// ==============================

// Renombramos la variable para evitar colisiones con el id="catalogo" del HTML
const catalogoGridContainer = document.querySelector("#catalogo-grid");

function mostrarMangas() {
    if (!catalogoGridContainer) return; // Validación de seguridad

    catalogoGridContainer.innerHTML = "";

    mangas.forEach(function (manga) {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("manga-card");

        tarjeta.innerHTML = `
            <img 
                src="${manga.imagen}" 
                alt="Portada de ${manga.titulo}, volumen ${manga.volumen}"
                onerror="this.onerror=null; this.src='https://placehold.co/400x600/eeeeee/333333?text=Sin+Portada';"
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
                    ● ${manga.estado}
                </p>

                <strong class="manga-precio">
                    $${manga.precio.toLocaleString("es-CO")}
                </strong>
            </div>
        `;

        catalogoGridContainer.appendChild(tarjeta);
    });
}

// ==============================
// INICIAR CATÁLOGO
// ==============================

mostrarMangas();