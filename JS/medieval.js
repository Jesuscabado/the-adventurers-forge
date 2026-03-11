// ==========================================
// --- 1. CLASE PARA ROL HISTÓRICO 1350 ---
// ==========================================

class HabitanteMedieval {
    constructor(nombre, edad, pelo, altura, complexion, oficio, trasfondo) {
        this.epoca = "Baja Edad Media (1350)";
        this.nombre = nombre || "Anónimo";
        this.edad = edad || "Desconocida";
        
        // Agrupamos la apariencia en un sub-objeto para mantener el orden (POO)
        this.apariencia = {
            pelo: pelo || "Desconocido",
            altura: altura || "Media",
            complexion: complexion || "Normal"
        };
        
        this.oficio = oficio || "Mendigo";
        this.trasfondo = trasfondo || "No hay registros de su vida pasada.";
    }
}

// ==========================================
// --- 2. LÓGICA DE GUARDADO (DOM & LocalStorage) ---
// ==========================================

const btnSaveMed = document.getElementById('btn-save-med');

if (btnSaveMed) {
    btnSaveMed.addEventListener('click', () => {
        // 1. Recopilamos todos los valores de los inputs
        const nombre = document.getElementById('med-name').value;
        const edad = document.getElementById('med-age').value;
        const pelo = document.getElementById('med-hair').value;
        const altura = document.getElementById('med-height').value;
        const complexion = document.getElementById('med-build').value;
        const oficio = document.getElementById('med-job').value;
        const trasfondo = document.getElementById('med-background').value;

        // 2. Instanciamos nuestro objeto de la clase HabitanteMedieval
        const nuevoHabitante = new HabitanteMedieval(
            nombre, edad, pelo, altura, complexion, oficio, trasfondo
        );

        // 3. Guardamos en LocalStorage bajo una llave específica para este juego
        let censo1350 = JSON.parse(localStorage.getItem('censo_medieval')) || [];
        censo1350.push(nuevoHabitante);
        localStorage.setItem('censo_medieval', JSON.stringify(censo1350));

        // 4. Damos feedback al jugador
        alert(`Por orden del Rey, el habitante ${nuevoHabitante.nombre} ha sido inscrito en el censo de 1350.`);
        
        // 5. Limpiamos el formulario para crear el siguiente rápido
        document.querySelectorAll('input, textarea').forEach(campo => campo.value = '');
    });
}