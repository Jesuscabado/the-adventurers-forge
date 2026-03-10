// ==========================================
// --- storage.js (Lógica de Persistencia) ---
// ==========================================

// Función global para guardar un personaje
function saveCharacterToStorage(character) {
    // 1. Traemos el array de personajes guardados (o creamos uno vacío si no hay)
    let savedCharacters = JSON.parse(localStorage.getItem('dnd_tavern')) || [];

    // 2. Añadimos nuestro personaje actual al array
    savedCharacters.push(character);

    // 3. Guardamos el array actualizado en LocalStorage (convertido a JSON)
    localStorage.setItem('dnd_tavern', JSON.stringify(savedCharacters));

    // 4. Mostramos el mensaje de éxito
    alert(`¡El héroe ${character.name} ha descansado en la taberna (Guardado)!`);
}