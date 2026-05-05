# Template N1 - Guía de Uso

Bienvenido a **Template N1**. Esta es una plantilla base para proyectos web estáticos con Vite y Tailwind CSS. Este documento te guiará en todo lo que necesitas saber para trabajar con este template.

---

## 📋 Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Instalación de Dependencias](#instalación-de-dependencias)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Comandos Disponibles](#comandos-disponibles)
5. [Agregar Nuevas Páginas](#agregar-nuevas-páginas)
6. [Configurar Vite.config.js](#configurar-viteconfig)
7. [Organizar Assets y Public](#organizar-assets-y-public)
8. [Tips y Mejores Prácticas](#tips-y-mejores-prácticas)

---

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado:

- **Node.js** (versión 14 o superior) - [Descarga aquí](https://nodejs.org/)
- **npm** (incluido con Node.js)

Para verificar que están instalados correctamente, ejecuta en tu terminal:

```bash
node --version
npm --version
```

---

## Instalación de Dependencias

Sigue estos pasos para configurar el proyecto por primera vez:

### Paso 1: Clona o descarga el template

```bash
git clone <url-del-repositorio>
cd Template-n1
```

### Paso 2: Instala las dependencias

En la raíz del proyecto, ejecuta:

```bash
npm install
```

Este comando descargará e instalará:

- **Vite**: Herramienta de build y desarrollo rápido
- **Tailwind CSS**: Framework de CSS utility-first
- Otros paquetes necesarios

Espera a que el proceso se complete. Verás un mensaje confirmando que todo está listo.

---

## Estructura del Proyecto

```
Template-n1/
├── index.html              # Página principal (Home)
├── package.json            # Configuración del proyecto
├── vite.config.js          # Configuración de Vite
├── style.css               # Estilos CSS globales
│
├── pages/                  # 📄 Folder para páginas HTML
│   └── pc1.html           # Página de ejemplo
│
├── assets/                 # 🖼️ Folder para imágenes, videos, fuentes
│   ├── home/              # Assets para la página Home
│   │   └── images.jpg
│   └── pc1/               # Assets para la página PC1
│
└── public/                 # 📁 Folder para archivos estáticos
    # Archivos que se copian tal cual al build
```

---

## Comandos Disponibles

Ejecuta estos comandos en la terminal (desde la raíz del proyecto):

### Desarrollo Local

```bash
npm run dev
```

- Inicia el servidor de desarrollo
- Abre automáticamente el navegador en `http://localhost:5173` (página principal)
- Accede a otras páginas así:
  - Página principal: `http://localhost:5173`
  - Página PC1: `http://localhost:5173/pages/pc1`
  - Otras páginas: `http://localhost:5173/pages/nombre-pagina` (sin .html)
- Los cambios se actualizan automáticamente (hot reload)
- Presiona `Ctrl + C` para detener el servidor

### Build para Producción

```bash
npm run build
```

- Compila el proyecto para producción
- Crea una carpeta `dist/` con los archivos optimizados
- Los archivos estarán minificados y listos para subir a un servidor

### Preview del Build

```bash
npm run preview
```

- Visualiza cómo se verá el proyecto en producción
- Abre un servidor local con los archivos compilados

---

## Agregar Nuevas Páginas

### Paso 1: Crear el archivo HTML

1. Ve a la carpeta `pages/`
2. Crea un nuevo archivo con extensión `.html`
   - Ejemplo: `about.html`, `contact.html`, `servicios.html`

3. Copia este contenido base:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi Nueva Página</title>
    <link rel="stylesheet" href="../style.css" />
  </head>
  <body>
    <h1>Bienvenido a mi Nueva Página</h1>
    <!-- Añade tu contenido aquí -->
  </body>
</html>
```

### Paso 2: Registra la página en `vite.config.js`

Abre el archivo `vite.config.js` y añade tu nueva página en la sección `input`:

**Antes:**

```javascript
input: {
    main: resolve(__dirname, 'index.html'),
    pc1: resolve(__dirname, 'pages/pc1.html'),
}
```

**Después:**

```javascript
input: {
    main: resolve(__dirname, 'index.html'),
    pc1: resolve(__dirname, 'pages/pc1.html'),
    about: resolve(__dirname, 'pages/about.html'),      // ← Nueva página
    contact: resolve(__dirname, 'pages/contact.html'),  // ← Nueva página
}
```

**Importante:** La clave (ej: `about`, `contact`) debe ser única y sin espacios.

### Paso 3: Verifica que funciona

1. Guarda los cambios en `vite.config.js`
2. Ejecuta `npm run dev`
3. Abre tu navegador en `http://localhost:5173/pages/about` (o el nombre que le diste, sin la extensión .html)

---

## Configurar Vite.config.js

El archivo `vite.config.js` controla cómo Vite procesa tu proyecto. Aquí explico las partes principales:

### Estructura Completa

```javascript
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  // Plugins (extensiones que usa Vite)
  plugins: [
    tailwindcss(), // Integra Tailwind CSS
  ],

  // Configuración del build (producción)
  build: {
    rollupOptions: {
      // Define todas las páginas del proyecto
      input: {
        main: resolve(__dirname, "index.html"),
        pc1: resolve(__dirname, "pages/pc1.html"),
        // Aquí añades nuevas páginas
      },
    },
  },
});
```

### Agregar Nuevas Páginas en Vite.config.js

Cada vez que crees una nueva página, debes registrarla aquí:

```javascript
input: {
    main: resolve(__dirname, 'index.html'),
    pc1: resolve(__dirname, 'pages/pc1.html'),
    pagina1: resolve(__dirname, 'pages/pagina1.html'),
    pagina2: resolve(__dirname, 'pages/pagina2.html'),
    servicios: resolve(__dirname, 'pages/servicios.html'),
}
```

**Nota:** Sin esta configuración, Vite no sabrá que existe tu página.

---

## Organizar Assets y Public

### 📂 Carpeta `assets/`

Aquí almacenas **imágenes, videos, fuentes y otros archivos multimedia** que usarás en tus páginas.

**Estructura recomendada:**

```
assets/
├── home/              # Assets para index.html
│   ├── logo.png
│   ├── hero.jpg
│   └── background.webp
│
├── pc1/               # Assets para pages/pc1.html
│   ├── diagram.png
│   └── icon.svg
│
├── contact/           # Assets para pages/contact.html
│   └── map.jpg
│
└── shared/            # Assets compartidos entre páginas
    ├── fonts/
    ├── icons/
    └── images/
```

**Cómo referenciarlo en tus HTML:**

```html
<!-- Desde index.html -->
<img src="./assets/home/logo.png" alt="Logo" />

<!-- Desde pages/pc1.html -->
<img src="../assets/pc1/diagram.png" alt="Diagrama" />
```

### 📁 Carpeta `public/`

Aquí almacenas **archivos estáticos que se copian directamente** sin procesamiento (favicon, robots.txt, etc).

**Estructura recomendada:**

```
public/
├── favicon.ico        # Ícono del navegador
├── favicon.svg        # Ícono en formato SVG
├── robots.txt         # Para motores de búsqueda
└── sitemap.xml        # Mapa del sitio
```

**Cómo referenciarlo en tus HTML:**

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

**Diferencia importante:**

| Carpeta   | Uso                                         | Procesamiento         |
| --------- | ------------------------------------------- | --------------------- |
| `assets/` | Imágenes, videos, fuentes usados en páginas | Se procesan/optimizan |
| `public/` | Archivos estáticos (favicon, robots.txt)    | Se copian tal cual    |

---

## Tips y Mejores Prácticas

### ✅ Cosas que Debes Hacer

1. **Organiza por página:**
   - Crea una carpeta en `assets/` para cada página
   - Almacena los archivos que usa cada página en su carpeta

2. **Usa rutas relativas correctas:**
   - Desde `index.html`: `./assets/home/imagen.jpg`
   - Desde `pages/pc1.html`: `../assets/pc1/imagen.jpg`

3. **Registra todas las nuevas páginas en `vite.config.js`**

4. **Usa nombres descriptivos:**
   - ✅ `pc1.html`, `about.html`, `servicios.html`
   - ❌ `page2.html`, `test.html`, `nuevo.html`

5. **Compila antes de entregar:**
   ```bash
   npm run build
   ```
   La carpeta `dist/` contiene tu proyecto listo para producción.

### ❌ Cosas que Debes Evitar

1. **No muevas o renombres carpetas base** sin actualizar las rutas
2. **No modifiques `vite.config.js`** sin entender qué hace cada línea
3. **No dejes páginas sin registrar** en la configuración de Vite
4. **No uses rutas absolutas** (ej: `/C:/Users/...`), usa rutas relativas

### 🎨 Usando Tailwind CSS

Este template ya incluye Tailwind CSS configurado. Úsalo en tu HTML:

```html
<div class="flex justify-center items-center min-h-screen bg-blue-500">
  <h1 class="text-4xl text-white font-bold">Hola Mundo</h1>
</div>
```

Aprende más en [Documentación de Tailwind CSS](https://tailwindcss.com/docs)

---

## Solucionar Problemas

### El servidor no inicia

```bash
# Elimina las dependencias corruptas
rm -r node_modules package-lock.json

# Reinstala
npm install
npm run dev
```

### Los cambios no se reflejan

- Asegúrate de haber guardado el archivo (Ctrl + S)
- Recarga el navegador (F5)
- Si persiste, reinicia el servidor (`Ctrl + C` y `npm run dev`)

### Las imágenes no se cargan

- Verifica que la ruta sea correcta
- Usa `../assets/` si estás en una página dentro de `pages/`
- Asegúrate de que el archivo existe en la carpeta `assets/`

### El build genera errores

- Revisa que todas las páginas estén registradas en `vite.config.js`
- Verifica que no haya errores de sintaxis en los archivos HTML

---

## Próximos Pasos

1. ✅ Instala las dependencias: `npm install`
2. ✅ Ejecuta el servidor: `npm run dev`
3. ✅ Crea tu primera página en `pages/`
4. ✅ Registra la página en `vite.config.js`
5. ✅ Organiza tus assets en carpetas
6. ✅ Utiliza Tailwind CSS para los estilos
7. ✅ Compila para producción: `npm run build`

---

## Recursos Útiles

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [MDN - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN - CSS](https://developer.mozilla.org/es/docs/Web/CSS)

---

**¡Felicidades! Ahora estás listo para usar Template N1. ¡Diviértete codificando! 🚀**
