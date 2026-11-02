# Portafolio · Marcelo Blanco

Sitio estático (HTML/CSS/JS), responsive, en español (raíz) e inglés (`/en/`).

## 1. Imágenes
1. En Figma abre la página **05 · Exportar web**.
2. Selecciona todo (Ctrl/Cmd + A) → panel derecho **Export** → **Export 61 layers**.
3. Figma descarga un zip con carpetas `img/home`, `img/cd`, … Copia la carpeta `img` encima de la de este proyecto.

Mientras falte una imagen, la web muestra un recuadro gris en su lugar.

## 2. Publicar gratis en GitHub Pages
1. Crea un repositorio público, por ejemplo `marceloblanco.github.io` (así la URL queda corta).
2. Sube todo el contenido de esta carpeta (no la carpeta en sí) a la rama `main`.
3. Settings → Pages → Source: *Deploy from a branch* → `main` / `root` → Save.
4. En 1–2 minutos estará en `https://marceloblanco.github.io/`.

## Estructura
- `index.html` · `en/index.html` — home
- `casos/<slug>.html` · `en/casos/<slug>.html` — casos de estudio
- `css/estilos.css` — tokens y reglas responsive (móvil < 768, tablet 768–1199, escritorio ≥ 1200)
- `js/main.js` — menú móvil y filtros de proyectos
