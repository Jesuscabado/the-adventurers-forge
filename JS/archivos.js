// ==========================================
// --- LÓGICA DE LOS ARCHIVOS PARROQUIALES ---
// ==========================================

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', renderizarCenso);

function renderizarCenso() {
    const contenedor = document.getElementById('censo-container');
    contenedor.innerHTML = ''; // Limpiamos la vista
    
    // Obtenemos el censo del LocalStorage
    let censo1350 = JSON.parse(localStorage.getItem('censo_medieval')) || [];
    
    // Si no hay registros
    if (censo1350.length === 0) {
        contenedor.innerHTML = '<h3 style="text-align:center; color: var(--text-light);">Los archivos están vacíos. No hay almas registradas en la villa.</h3>';
        return;
    }

    // Recorremos el array y creamos el HTML para cada habitante
    censo1350.forEach((habitante, index) => {
        const tarjeta = document.createElement('div');
        // Reutilizamos la clase char-card que creaste para la taberna de D&D
        tarjeta.className = 'char-card'; 
        
        // Estructuramos la información con el trasfondo destacado
        tarjeta.innerHTML = `
            <div style="width: 100%;">
                <h3 style="margin-top: 0; color: var(--gold-accent);">${habitante.nombre} <span style="font-size: 0.8em; color: gray;">(${habitante.edad} años)</span></h3>
                <p><strong>Oficio/Estatus:</strong> ${habitante.oficio}</p>
                <p><strong>Apariencia:</strong> Cabello ${habitante.apariencia.pelo}, altura ${habitante.apariencia.altura}, complexión ${habitante.apariencia.complexion}.</p>
                
                <div style="margin-top: 15px; padding-left: 15px; border-left: 3px solid var(--gold-accent); font-style: italic; color: #ccc;">
                    "${habitante.trasfondo}"
                </div>
            </div>
            
            <div style="margin-left: 15px; display: flex; align-items: center;">
                <button onclick="darSepultura(${index})" style="background: linear-gradient(to bottom, #3a3a3a, #1a1a1a); min-width: 140px;">✝️ Dar Sepultura</button>
            </div>
        `;
        
        contenedor.appendChild(tarjeta);
    });
}

// Función para eliminar (matar) a un personaje
function darSepultura(indice) {
    // Confirmación inmersiva
    const confirmar = confirm("¿Estás seguro de que deseas registrar el fallecimiento de este habitante? Esta acción no se puede deshacer.");
    
    if (confirmar) {
        let censo1350 = JSON.parse(localStorage.getItem('censo_medieval'));
        
        // Eliminamos 1 elemento en la posición 'indice'
        censo1350.splice(indice, 1);
        
        // Guardamos el nuevo array en LocalStorage
        localStorage.setItem('censo_medieval', JSON.stringify(censo1350));
        
        // Volvemos a pintar la lista actualizada
        renderizarCenso();
    }
}