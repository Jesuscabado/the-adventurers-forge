// ==========================================
// --- COMPONENTE WEB: NAVBAR INTELIGENTE ---
// ==========================================

class RpgNavbar extends HTMLElement {
    
    connectedCallback() {
        const base = this.getAttribute('ruta-base') || '.';
        const linkIndex = `${base}/index.html`;
        const linkDnd = `${base}/HTML/dnd.html`;
        const linkMedieval = `${base}/HTML/medieval.html`;

        // 1. Añadimos el botón hamburguesa y un contenedor "nav-links"
        this.innerHTML = `
            <nav class="rpg-navbar">
                <div class="hamburger-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="nav-links">
                    <a href="${linkIndex}">🏰 Menú Principal</a>
                    <a href="${linkDnd}">🐉 D&D 5e</a>
                    <a href="${linkMedieval}">📜 Año 1350</a>
                </div>
            </nav>
        `;

        // 2. Lógica para abrir/cerrar el menú en móviles
        const btn = this.querySelector('.hamburger-btn');
        const links = this.querySelector('.nav-links');

        btn.addEventListener('click', () => {
            // Alterna la clase "active" para mostrar/ocultar los enlaces
            links.classList.toggle('active');
            // Alterna la clase "open" para animar las rayitas (opcional pero queda genial)
            btn.classList.toggle('open'); 
        });
    }
}

customElements.define('rpg-navbar', RpgNavbar);