// ==========================================
// --- 1. CLASE PARA TEN CANDLES (POO) ---
// ==========================================

class TenCandlesCharacter {
    constructor(name, concept, virtue, vice, moment, brink) {
        this.game = "Ten Candles"; // Identificador
        this.name = name || "Desconocido";
        this.concept = concept || "Alguien en la oscuridad";
        this.traits = {
            virtue: virtue || "Ninguna",
            vice: vice || "Ninguno"
        };
        this.narrative = {
            moment: moment || "Sobrevivir un día más",
            brink: brink || "Rendirme ante la oscuridad"
        };
        this.isDead = false; // Spoiler: Esto cambiará al jugar
    }
}

// ==========================================
// --- 2. EVENTOS Y LOCALSTORAGE ---
// ==========================================

const btnSaveTC = document.getElementById('btn-save-tc');

if (btnSaveTC) {
    btnSaveTC.addEventListener('click', () => {
        // 1. Recopilamos los datos del DOM
        const name = document.getElementById('tc-name').value;
        const concept = document.getElementById('tc-concept').value;
        const virtue = document.getElementById('tc-virtue').value;
        const vice = document.getElementById('tc-vice').value;
        const moment = document.getElementById('tc-moment').value;
        const brink = document.getElementById('tc-brink').value;

        // 2. Instanciamos el nuevo objeto
        const survivor = new TenCandlesCharacter(name, concept, virtue, vice, moment, brink);

        // 3. Guardamos en LocalStorage (Usamos una clave distinta a la de D&D)
        let savedSurvivors = JSON.parse(localStorage.getItem('tencandles_roster')) || [];
        savedSurvivors.push(survivor);
        localStorage.setItem('tencandles_roster', JSON.stringify(savedSurvivors));

        // 4. Feedback visual
        alert(`Has encendido una vela por ${survivor.name}. Guardado con éxito.`);
        
        // Opcional: Limpiar el formulario
        document.querySelectorAll('input').forEach(input => input.value = '');
    });
}