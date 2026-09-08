# Re-Manga

Re-Manga es un proyecto académico de tienda web para la compra y venta de mangas de segunda mano. Permite explorar un catálogo, filtrar y buscar títulos, registrarse como usuario, gestionar un carrito de compras y enviar solicitudes para vender mangas propios.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)
- LocalStorage

## Funcionalidades

- Catálogo dinámico de mangas generado desde JavaScript.
- Búsqueda de mangas por título.
- Filtros por género (Shonen, Seinen, Shojo, Josei).
- Botón "Ver más" para cargar más resultados progresivamente.
- Registro de usuarios con validación de formulario.
- Carrito de compras (agregar, aumentar/disminuir cantidad, eliminar, vaciar).
- Persistencia de carrito, usuarios y tema mediante localStorage.
- Modo oscuro / claro.
- Formulario para enviar solicitudes de venta de mangas.
- Diseño responsive.
- Animaciones simples sobre las cards del catalogo y al cargar cada pagina

## Estructura del proyecto

```
Re-Manga/
│
├── index.html
├── registro.html
├── carrito.html
├── styles.css
├── script.js
├── images/
└── README.md
```

## Explicación de archivos

### index.html
Página principal de Re-Manga. Contiene el catálogo, la sección "Cómo funciona" y el formulario para vender manga.

#### Explicar decisiones especificas de index

### registro.html
Página de registro de usuarios.

#### Explicar decisiones especificas registro

### carrito.html
Página del carrito de compras.

#### Explicar decisiones especificas de carrito

### script.js
Archivo que contiene toda la lógica del sitio: catálogo, filtros, búsqueda, carrito, registro de usuarios y formulario de venta.

#### Explicar decisiones especificas de script

### styles.css
Archivo encargado de los estilos visuales, diseño responsive, modo claro/oscuro, cards, botones y demás elementos visuales. Parte del diseño y organización visual fue realizada con apoyo de IA.

## Decisiones de construcción

- Uso de HTML, CSS y JavaScript vanilla, sin frameworks.
- Catálogo de mangas generado dinámicamente a partir de un arreglo de datos en JavaScript.
- Uso de localStorage para simular persistencia (carrito, usuarios, tema) mientras no hay backend.
- Separación entre estructura (HTML), estilos (CSS) y comportamiento (JavaScript).
- Diseño pensado para adaptarse a distintos tamaños de pantalla.
- Proyecto preparado para conectarse en el futuro a una API REST y una base de datos.

#### Falta Agregar algunas especificaciones

## Ejecución

Este proyecto es un sitio estático (HTML, CSS y JavaScript) y no requiere instalación de dependencias ni servidor. Puede ejecutarse abriendo directamente el archivo `index.html` en el navegador.

## Despliegue

El proyecto puede desplegarse como una aplicación frontend estática mediante Vercel.

## Futuras mejoras

Actualmente algunas funcionalidades (usuarios, carrito) usan localStorage como solución temporal en el frontend. La idea a futuro es conectar el proyecto a una API REST y una base de datos, especialmente para:

- usuarios con base de datos, registro de compras o ventas y calificaciones por promedio en ventas;
- registro con verificacion de correo y direccion de usuario;
- catálogo por medio de API (Jikan o MangaDex sujeto a cambios);
- formulario de ventas funcional con base de datos;
- carrito funcional con relaciones en la base de datos;
- gestion de inventario.

```
Frontend → API REST → Base de datos
```

---

El desarrollo contó con apoyo de herramientas de inteligencia artificial para tareas de implementación y organización del código.