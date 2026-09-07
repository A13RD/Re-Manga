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
const botonesGenero = document.querySelectorAll(".filtro-genero");
const campoBusqueda = document.querySelector("#busqueda-manga");
const botonVerMas = document.querySelector("#ver-mas");
const mensajeSinResultados = document.querySelector("#mensaje-sin-resultados");

const mangasPorCarga = 6;
let mangasVisibles = mangasPorCarga;
let generoSeleccionado = "Todos";

function normalizarGenero(genero) {
    return genero.replace("Shounen", "Shonen").replace("Shoujo", "Shojo");
}

// ==============================
// CARRITO
// ==============================

function obtenerCarrito() {
    try {
        return JSON.parse(localStorage.getItem("carrito") || "[]");
    } catch (error) {
        return [];
    }
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarContadorCarrito() {
    const cantidadTotal = obtenerCarrito().reduce(function (total, producto) {
        return total + producto.cantidad;
    }, 0);

    document.querySelectorAll(".contador-carrito").forEach(function (contador) {
        contador.textContent = cantidadTotal;
    });
}

function agregarAlCarrito(id) {
    const manga = mangas.find(function (producto) {
        return producto.id === id;
    });
    if (!manga) return;

    const carrito = obtenerCarrito();
    const productoExistente = carrito.find(function (producto) {
        return producto.id === id;
    });

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({
            id: manga.id,
            titulo: manga.titulo,
            volumen: manga.volumen,
            precio: manga.precio,
            imagen: manga.imagen,
            cantidad: 1
        });
    }

    guardarCarrito(carrito);
    actualizarContadorCarrito();
}

function eliminarDelCarrito(id) {
    const carrito = obtenerCarrito().filter(function (producto) {
        return producto.id !== id;
    });
    guardarCarrito(carrito);
    mostrarCarrito();
    actualizarContadorCarrito();
}

function cambiarCantidad(id, cantidad) {
    const carrito = obtenerCarrito();
    const producto = carrito.find(function (elemento) {
        return elemento.id === id;
    });

    if (!producto) return;

    producto.cantidad = cantidad;
    if (producto.cantidad <= 0) {
        eliminarDelCarrito(id);
        return;
    }

    guardarCarrito(carrito);
    mostrarCarrito();
    actualizarContadorCarrito();
}

function vaciarCarrito() {
    guardarCarrito([]);
    mostrarCarrito();
    actualizarContadorCarrito();
}

function filtrarMangas() {
    const textoBusqueda = campoBusqueda.value.trim().toLowerCase();

    return mangas.filter(function (manga) {
        const coincideGenero = generoSeleccionado === "Todos"
            || normalizarGenero(manga.genero) === generoSeleccionado;
        const coincideBusqueda = manga.titulo.toLowerCase().includes(textoBusqueda);

        return coincideGenero && coincideBusqueda;
    });
}

function mostrarMangas(mangasFiltrados) {
    if (!catalogoGridContainer) return; // Validación de seguridad

    catalogoGridContainer.innerHTML = "";

    mangasFiltrados.slice(0, mangasVisibles).forEach(function (manga) {
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

                <button class="btn-agregar-carrito" type="button" data-id="${manga.id}">
                    Agregar al carrito
                </button>
            </div>
        `;

        catalogoGridContainer.appendChild(tarjeta);
    });

    const noHayResultados = mangasFiltrados.length === 0;
    mensajeSinResultados.hidden = !noHayResultados;
    botonVerMas.hidden = mangasVisibles >= mangasFiltrados.length || noHayResultados;

    catalogoGridContainer.querySelectorAll(".btn-agregar-carrito").forEach(function (boton) {
        boton.addEventListener("click", function () {
            agregarAlCarrito(Number(boton.dataset.id));
        });
    });
}

function actualizarCatalogo() {
    mostrarMangas(filtrarMangas());
}

if (catalogoGridContainer) {
    botonesGenero.forEach(function (boton) {
        boton.addEventListener("click", function () {
            generoSeleccionado = boton.dataset.genero;
            mangasVisibles = mangasPorCarga;

            botonesGenero.forEach(function (otroBoton) {
                otroBoton.classList.toggle("activo", otroBoton === boton);
            });

            actualizarCatalogo();
        });
    });

    campoBusqueda.addEventListener("input", function () {
        mangasVisibles = mangasPorCarga;
        actualizarCatalogo();
    });

    botonVerMas.addEventListener("click", function () {
        mangasVisibles += mangasPorCarga;
        actualizarCatalogo();
    });

    // El catálogo inicia limitado a seis resultados.
    actualizarCatalogo();
}

// ==============================
// REGISTRO DE USUARIOS
// ==============================

const formularioRegistro = document.querySelector("#formulario-registro");

if (formularioRegistro) {
    const campoNombre = document.querySelector("#nombre");
    const campoEmail = document.querySelector("#email");
    const campoPassword = document.querySelector("#password");
    const campoConfirmacion = document.querySelector("#confirmar-password");
    const mensajeRegistro = document.querySelector("#mensaje-registro");

    function mostrarError(campo, mensaje) {
        const contenedor = campo.closest(".campo-formulario");
        const mensajeError = contenedor.querySelector(".mensaje-error");

        campo.setAttribute("aria-invalid", "true");
        mensajeError.textContent = mensaje;
    }

    function limpiarErrores() {
        formularioRegistro.querySelectorAll(".mensaje-error").forEach(function (mensaje) {
            mensaje.textContent = "";
        });

        formularioRegistro.querySelectorAll("input").forEach(function (campo) {
            campo.removeAttribute("aria-invalid");
        });

        mensajeRegistro.textContent = "";
        mensajeRegistro.className = "mensaje-registro";
    }

    formularioRegistro.addEventListener("submit", function (evento) {
        evento.preventDefault();
        limpiarErrores();

        const nombre = campoNombre.value.trim();
        const email = campoEmail.value.trim().toLowerCase();
        const password = campoPassword.value;
        const confirmacion = campoConfirmacion.value;
        let formularioValido = true;

        if (!nombre) {
            mostrarError(campoNombre, "El nombre es obligatorio.");
            formularioValido = false;
        }

        if (!campoEmail.validity.valid || !email) {
            mostrarError(campoEmail, "Introduce un correo válido.");
            formularioValido = false;
        }

        if (!password) {
            mostrarError(campoPassword, "La contraseña es obligatoria.");
            formularioValido = false;
        } else if (password.length < 8) {
            mostrarError(campoPassword, "La contraseña debe tener al menos 8 caracteres.");
            formularioValido = false;
        }

        if (!confirmacion) {
            mostrarError(campoConfirmacion, "Confirma tu contraseña.");
            formularioValido = false;
        } else if (password !== confirmacion) {
            mostrarError(campoConfirmacion, "Las contraseñas no coinciden.");
            formularioValido = false;
        }

        if (!formularioValido) return;

        const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios") || "[]");
        const correoRegistrado = usuariosGuardados.some(function (usuario) {
            return usuario.email.toLowerCase() === email;
        });

        if (correoRegistrado) {
            mostrarError(campoEmail, "No se puede registrar este correo porque ya existe una cuenta.");
            return;
        }

        const nuevoUsuario = { nombre, email, password };
        // Solo para esta simulación frontend. En producción la contraseña debe gestionarse
        // de forma segura en el backend y nunca almacenarse así.
        usuariosGuardados.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));

        formularioRegistro.reset();
        mensajeRegistro.textContent = "¡Registro exitoso! Bienvenido a Re-Manga.";
        mensajeRegistro.classList.add("mensaje-exito");
    });
}

// ==============================
// SOLICITUDES PARA VENDER MANGA
// ==============================

const formularioVenta = document.querySelector("#formulario-venta");

if (formularioVenta) {
    const camposVenta = {
        titulo: formularioVenta.querySelector("#titulo-manga"),
        volumen: formularioVenta.querySelector("#volumen-manga"),
        autor: formularioVenta.querySelector("#autor-manga"),
        genero: formularioVenta.querySelector("#genero-manga"),
        precio: formularioVenta.querySelector("#precio-manga"),
        estado: formularioVenta.querySelector("#estado-manga"),
        nombre: formularioVenta.querySelector("#nombre-vendedor"),
        email: formularioVenta.querySelector("#email-vendedor")
    };
    const mensajeVenta = formularioVenta.querySelector("#mensaje-venta");

    function mostrarErrorVenta(campo, mensaje) {
        const contenedor = campo.closest(".campo-venta");
        const mensajeError = contenedor.querySelector(".mensaje-error");

        campo.setAttribute("aria-invalid", "true");
        mensajeError.textContent = mensaje;
    }

    function limpiarErroresVenta() {
        formularioVenta.querySelectorAll(".mensaje-error").forEach(function (mensaje) {
            mensaje.textContent = "";
        });

        formularioVenta.querySelectorAll("input, select").forEach(function (campo) {
            campo.removeAttribute("aria-invalid");
        });

        mensajeVenta.textContent = "";
        mensajeVenta.className = "mensaje-registro";
    }

    formularioVenta.addEventListener("submit", function (evento) {
        evento.preventDefault();
        limpiarErroresVenta();

        const datosFormulario = new FormData(formularioVenta);
        const volumen = Number(datosFormulario.get("volumen"));
        const precio = Number(datosFormulario.get("precio"));
        let formularioValido = true;

        Object.values(camposVenta).forEach(function (campo) {
            if (!campo.value.trim()) {
                mostrarErrorVenta(campo, "Este campo es obligatorio.");
                formularioValido = false;
            }
        });

        if (!Number.isInteger(volumen) || volumen <= 0) {
            mostrarErrorVenta(camposVenta.volumen, "El volumen debe ser un entero mayor que 0.");
            formularioValido = false;
        }

        if (!Number.isFinite(precio) || precio <= 0) {
            mostrarErrorVenta(camposVenta.precio, "El precio debe ser mayor que 0.");
            formularioValido = false;
        }

        if (!camposVenta.email.validity.valid) {
            mostrarErrorVenta(camposVenta.email, "Introduce un correo válido.");
            formularioValido = false;
        }

        if (!formularioValido) return;

        const solicitudVenta = {
            titulo: datosFormulario.get("titulo").trim(),
            volumen,
            autor: datosFormulario.get("autor").trim(),
            genero: datosFormulario.get("genero"),
            precio,
            estado: datosFormulario.get("estado"),
            vendedor: {
                nombre: datosFormulario.get("nombre").trim(),
                email: datosFormulario.get("email").trim().toLowerCase()
            }
        };

        // Aquí se conectaría posteriormente la petición a la API REST.
        void solicitudVenta;
        mensajeVenta.textContent = "¡Solicitud recibida! Hemos recibido la información de tu manga. Esta función estará conectada a nuestra base de datos próximamente.";
        mensajeVenta.classList.add("mensaje-venta-exito");
        formularioVenta.reset();
    });
}

function mostrarCarrito() {
    const listaCarrito = document.querySelector("#lista-carrito");
    const resumenCarrito = document.querySelector("#resumen-carrito");
    const estadoCarritoVacio = document.querySelector("#carrito-vacio");
    if (!listaCarrito || !resumenCarrito || !estadoCarritoVacio) return;

    const carrito = obtenerCarrito();
    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        estadoCarritoVacio.hidden = false;
        resumenCarrito.hidden = true;
        return;
    }

    estadoCarritoVacio.hidden = true;
    resumenCarrito.hidden = false;

    carrito.forEach(function (producto) {
        const subtotal = producto.precio * producto.cantidad;
        const elemento = document.createElement("article");
        elemento.className = "manga-card carrito-card";
        elemento.innerHTML = `
            <div class="carrito-card-imagen">
                <img src="${producto.imagen}" alt="Portada de ${producto.titulo}, volumen ${producto.volumen}"
                    onerror="this.onerror=null; this.src='https://placehold.co/180x260/eeeeee/333333?text=Sin+Portada';">
            </div>

            <div class="manga-card-content carrito-card-content">
                <span class="manga-genero">Manga</span>
                <h3>${producto.titulo}</h3>
                <p class="manga-volumen">Tomo ${producto.volumen}</p>
                <strong class="manga-precio">$${producto.precio.toLocaleString("es-CO")}</strong>

                <div class="carrito-acciones">
                    <div class="controles-cantidad" aria-label="Cantidad de ${producto.titulo}">
                        <button type="button" class="btn-cantidad" data-accion="disminuir" data-id="${producto.id}" aria-label="Disminuir cantidad">−</button>
                        <span aria-live="polite">${producto.cantidad}</span>
                        <button type="button" class="btn-cantidad" data-accion="aumentar" data-id="${producto.id}" aria-label="Aumentar cantidad">+</button>
                    </div>

                    <button type="button" class="btn-eliminar" data-accion="eliminar" data-id="${producto.id}">Eliminar</button>
                </div>

                <p class="carrito-subtotal">Subtotal: <strong>$${subtotal.toLocaleString("es-CO")}</strong></p>
            </div>
        `;
        listaCarrito.appendChild(elemento);
    });

    const total = carrito.reduce(function (suma, producto) {
        return suma + producto.precio * producto.cantidad;
    }, 0);
    document.querySelector("#total-carrito").textContent = `$${total.toLocaleString("es-CO")}`;
}

document.addEventListener("click", function (evento) {
    const boton = evento.target.closest("[data-accion]");
    if (!boton) return;

    const id = Number(boton.dataset.id);
    const producto = obtenerCarrito().find(function (elemento) {
        return elemento.id === id;
    });

    if (boton.dataset.accion === "eliminar") {
        eliminarDelCarrito(id);
    } else if (producto) {
        const cambio = boton.dataset.accion === "aumentar" ? 1 : -1;
        cambiarCantidad(id, producto.cantidad + cambio);
    }
});

const botonVaciarCarrito = document.querySelector("#vaciar-carrito");
if (botonVaciarCarrito) {
    botonVaciarCarrito.addEventListener("click", function () {
        if (confirm("¿Quieres vaciar tu carrito?")) vaciarCarrito();
    });
}

actualizarContadorCarrito();
mostrarCarrito();