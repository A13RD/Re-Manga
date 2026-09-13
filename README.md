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
├── index.html        # Página principal
├── registro.html     # Registro de usuarios
├── carrito.html      # Carrito de compras
├── styles.css        # Estilos y diseño visual
├── script.js         # Lógica y funcionalidades
├── images/           # Imágenes de los mangas
└── README.md         # Información del proyecto
```

## Explicación de archivos

### `index.html`

Página principal de Re-Manga.

Contiene las diferentes secciones de la página:

- `header` y `nav`: navegación entre las páginas y secciones.
- `section#hero`: presentación inicial de la página.
- `section#catalogo`: filtros, búsqueda y catálogo de mangas.
- `section#como-funciona`: explicación del funcionamiento de la página.
- `section#vender`: formulario para vender mangas.
- `footer`: información final de la página.

Las tarjetas del catálogo no están escritas directamente en HTML, sino que son generadas mediante JavaScript.

### `registro.html`

Página utilizada para registrar nuevos usuarios.

Contiene un formulario con los campos necesarios para el registro y mensajes para mostrar errores o confirmar que el registro fue exitoso.

### `carrito.html`

Página donde se muestran los mangas agregados al carrito.

Permite modificar cantidades, eliminar productos, vaciar el carrito y consultar el valor total de la compra.

### `script.js`

Contiene la lógica y las funciones que hacen interactiva la página.

Entre sus principales funciones están:

```text
Catálogo → filtros, búsqueda y "Ver más"
Carrito → agregar, eliminar y modificar cantidades
Registro → validación y almacenamiento de usuarios
Tema → modo claro / oscuro
Formulario → envío de solicitudes para vender manga
```


También utiliza `localStorage` para conservar información como el carrito, los usuarios registrados y el tema seleccionado.

### `styles.css`

Archivo encargado de darle diseño visual a todas las páginas.

Los estilos se aplican utilizando principalmente selectores de elementos, clases e IDs definidos en los archivos HTML.

Por ejemplo:

```css
header { ... }
```

Aplica estilos al encabezado de las páginas.

```css
nav { ... }
```

Organiza y da formato a la barra de navegación.

```css
#hero { ... }
```

Controla la apariencia de la sección principal.

```css
#catalogo-grid { ... }
```

Organiza las tarjetas del catálogo utilizando CSS Grid.

```css
.manga-card { ... }
```

Define el diseño común de cada tarjeta de manga.

```css
.boton-principal { ... }
```

Permite reutilizar el mismo estilo en diferentes botones.

También contiene los estilos para el formulario de registro, carrito, modo oscuro, responsive y las animaciones.


### ¿Cómo se conectan HTML y CSS?

Los archivos HTML conectan el CSS mediante:

```html
<link rel="stylesheet" href="styles.css">

A partir de ahí, las etiquetas, IDs y clases del HTML son utilizadas por styles.css para determinar cómo se ve cada elemento.
```

Por ejemplo:

```html
<section id="catalogo">
```

se estiliza desde CSS mediante:

```css
#catalogo {
    /* estilos de la sección */
}
```
Mientras que una clase reutilizable:

```html
<div class="manga-card">
```

se conecta con:

```css
.manga-card {
    /* estilos de las tarjetas */
}
```

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

- Usuarios con base de datos, registro de compras o ventas y calificaciones por promedio en ventas;
- Registro con verificacion de correo y direccion de usuario;
- Catálogo por medio de API (Jikan o MangaDex sujeto a cambios);
- Formulario de ventas funcional con base de datos;
- Carrito funcional con relaciones en la base de datos;
- Gestion de inventario.

```
Frontend → API REST → Base de datos
```

---

El desarrollo contó con apoyo de herramientas de inteligencia artificial para tareas de implementación y organización del código.