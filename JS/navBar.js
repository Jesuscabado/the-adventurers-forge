// ==========================================
// --- COMPONENTE WEB: NAVBAR INTELIGENTE ---
// ==========================================

class RpgNavbar extends HTMLElement {
    
    connectedCallback() {
        // 1. Leemos el atributo 'ruta-base' desde el HTML. 
        // Si no se lo pasamos, asumimos que estamos en la raíz ('.')
        const base = this.getAttribute('ruta-base') || '.';

        // 2. Construimos las rutas dinámicas usando esa base
        // Si base es '.', irá a './index.html'. Si es '..', irá a '../index.html'
        const linkIndex = `${base}/index.html`;
        const linkDnd = `${base}/HTML/dnd.html`;
        const linkMedieval = `${base}/HTML/medieval.html`;

        // 3. Inyectamos el HTML
        this.innerHTML = `
            <nav class="rpg-navbar">
                <a href="${linkIndex}">🏰 Menú Principal</a>
                <a href="${linkDnd}">🐉 D&D 5e</a>
                <a href="${linkMedieval}">📜 Año 1350</a>
            </nav>
        `;
    }
}

customElements.define('rpg-navbar', RpgNavbar);