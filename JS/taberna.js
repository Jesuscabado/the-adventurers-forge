// --- LÓGICA DE LA TABERNA ---

// Se ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', renderTavern);

function renderTavern() {
    const container = document.getElementById('roster-container');
    container.innerHTML = ''; // Limpiamos el contenedor antes de pintar
    
    // Obtenemos los personajes de LocalStorage
    let savedCharacters = JSON.parse(localStorage.getItem('dnd_tavern')) || [];
    
    // Si la taberna está vacía
    if (savedCharacters.length === 0) {
        container.innerHTML = '<h3 style="text-align:center; color: var(--text-light);">La taberna está vacía. ¡Ve a forjar un héroe!</h3>';
        return;
    }

    // Recorremos el array y creamos el HTML para cada personaje
    savedCharacters.forEach((char, index) => {
        // Creamos un div para la tarjeta
        const card = document.createElement('div');
        // Le añadimos clases (añadiremos este estilo a tu CSS ahora)
        card.className = 'char-card';
        
        // Inyectamos el contenido HTML dinámico
        card.innerHTML = `
            <div>
                <h3 style="margin-top: 0;">${char.name}</h3>
                <p><strong>Raza:</strong> ${char.race || 'Desconocida'} | <strong>Clase:</strong> ${char.charClass || 'Desconocida'}</p>
                <p style="color: var(--gold-accent); font-size: 0.9em;">
                    STR: ${char.stats.str} | DEX: ${char.stats.dex} | CON: ${char.stats.con} | 
                    INT: ${char.stats.int} | WIS: ${char.stats.wis} | CHA: ${char.stats.cha}
                </p>
            </div>
            <button onclick="deleteCharacter(${index})" style="background: linear-gradient(to bottom, #8a0303, #4a0000); width: auto;">Desterrar</button>
        `;
        
        container.appendChild(card);
    });
}

// Función para eliminar un personaje
function deleteCharacter(indexToRemove) {
    // 1. Preguntamos para confirmar (buena práctica de UX)
    const confirmDelete = confirm("¿Estás seguro de que deseas desterrar a este héroe para siempre?");
    
    if (confirmDelete) {
        // 2. Traemos el array
        let savedCharacters = JSON.parse(localStorage.getItem('dnd_tavern'));
        
        // 3. Eliminamos el elemento en ese índice exacto (splice elimina 1 elemento en la posición dada)
        savedCharacters.splice(indexToRemove, 1);
        
        // 4. Guardamos el array actualizado en LocalStorage
        localStorage.setItem('dnd_tavern', JSON.stringify(savedCharacters));
        
        // 5. Volvemos a pintar la taberna para que desaparezca visualmente
        renderTavern();
    }
}