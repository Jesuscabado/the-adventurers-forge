// --- 1. PROGRAMACIÓN ORIENTADA A OBJETOS (POO) ---
class CharacterDnD {
    constructor() {
        this.name = "";
        this.race = "";
        this.charClass = "";
        // Estadísticas base (Standard array inicializado a 10)
        this.stats = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };
    }

    // Métodos para actualizar las propiedades de nuestro objeto
    setRace(newRace) {
        this.race = newRace;
        console.log(`Raza del objeto actualizada a: ${this.race}`);
    }

    setClass(newClass) {
        this.charClass = newClass;
        console.log(`Clase del objeto actualizada a: ${this.charClass}`);
    }
    // Método para simular tirar 4d6 y quitar el menor
    rollStat() {
        let rolls = [];
        for (let i = 0; i < 4; i++) {
            rolls.push(Math.floor(Math.random() * 6) + 1); // Genera número del 1 al 6
        }
        rolls.sort((a, b) => b - a); // Ordena de mayor a menor
        rolls.pop(); // Elimina el último (el más bajo)
        return rolls.reduce((total, num) => total + num, 0); // Suma los 3 restantes
    }

    // Método para generar los 6 atributos
    generateAllStats() {
        this.stats.str = this.rollStat();
        this.stats.dex = this.rollStat();
        this.stats.con = this.rollStat();
        this.stats.int = this.rollStat();
        this.stats.wis = this.rollStat();
        this.stats.cha = this.rollStat();
        console.log("Nuevos atributos generados:", this.stats);
    }

    // Método para calcular el modificador (ej. 15 = +2)
    getModifier(score) {
        const mod = Math.floor((score - 10) / 2);
        return mod >= 0 ? `+${mod}` : `${mod}`; // Añade el signo + si es positivo
    }
}

// Instanciamos nuestro objeto personaje (¡Aquí nace tu héroe!)
const myCharacter = new CharacterDnD();


// --- 2. CONFIGURACIÓN Y ELEMENTOS DEL DOM ---
const API_BASE = "https://www.dnd5eapi.co/api";

const raceSelect = document.getElementById('race-select');
const classSelect = document.getElementById('class-select');


// --- 3. CONSUMO DE APIs (Fetch) Y DOM ---

// Función asíncrona para obtener y mostrar las razas
async function loadRaces() {
    try {
        const response = await fetch(`${API_BASE}/races`);
        const data = await response.json();
        
        // Limpiamos el texto de "Cargando..."
        raceSelect.innerHTML = '<option value="">-- Selecciona una Raza --</option>';
        
        // Manipulación del DOM: Creamos una etiqueta <option> por cada raza
        data.results.forEach(race => {
            const option = document.createElement('option');
            option.value = race.index; // ej: "elf", "dwarf"
            option.textContent = race.name; // ej: "Elf", "Dwarf"
            raceSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error cargando razas:", error);
        raceSelect.innerHTML = '<option value="">Error al cargar</option>';
    }
}

// Función asíncrona para obtener y mostrar las clases
async function loadClasses() {
    try {
        const response = await fetch(`${API_BASE}/classes`);
        const data = await response.json();
        
        classSelect.innerHTML = '<option value="">-- Selecciona una Clase --</option>';
        
        data.results.forEach(charClass => {
            const option = document.createElement('option');
            option.value = charClass.index;
            option.textContent = charClass.name;
            classSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error cargando clases:", error);
        classSelect.innerHTML = '<option value="">Error al cargar</option>';
    }
}


// --- 4. EVENTOS (Interactividad) ---

// Evento 1: Al cargar la página, hacemos el fetch a la API automáticamente
document.addEventListener('DOMContentLoaded', () => {
    loadRaces();
    loadClasses();
});

// Evento 2: Cuando el usuario selecciona una raza distinta
raceSelect.addEventListener('change', (event) => {
    // Actualizamos nuestro objeto con la opción elegida
    myCharacter.setRace(event.target.value);
    
    // (Pista: ¡Aquí más adelante haremos OTRO fetch para pedir los detalles de la raza elegida!)
});

// Evento 3: Cuando el usuario selecciona una clase distinta
classSelect.addEventListener('change', (event) => {
    myCharacter.setClass(event.target.value);
});
// --- 5. VISUALIZACIÓN DE DATOS (Chart.js) ---

let radarChart; // Variable global para guardar nuestro gráfico

// Función para inicializar el gráfico vacío (con puros 10s)
function initChart() {
    const ctx = document.getElementById('statsChart').getContext('2d');
    
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Fuerza', 'Destreza', 'Constitución', 'Inteligencia', 'Sabiduría', 'Carisma'],
            datasets: [{
                label: 'Puntos de Atributo',
                data: [10, 10, 10, 10, 10, 10], // Valores iniciales
                backgroundColor: 'rgba(220, 53, 69, 0.2)', // Color rojo semitransparente (estilo D&D)
                borderColor: 'rgba(220, 53, 69, 1)',
                pointBackgroundColor: 'rgba(220, 53, 69, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
                    suggestedMin: 3, // El mínimo posible con 3d6
                    suggestedMax: 20 // El máximo habitual en D&D
                }
            }
        }
    });
}

// ==========================================
// --- 5. FUNCIONES AUXILIARES DEL DOM ---
// ==========================================

// Esta es la función que te faltaba: se encarga de pintar los números en el HTML
function updateDOMStats() {
    const statsList = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    
    statsList.forEach(stat => {
        const score = myCharacter.stats[stat];
        const mod = myCharacter.getModifier(score);
        
        // Actualizamos el número grande en el HTML
        document.getElementById(`stat-${stat}`).textContent = score;
        // Actualizamos el modificador pequeño en el HTML
        document.getElementById(`mod-${stat}`).textContent = `(${mod})`;
    });
}

// Función para actualizar el gráfico cuando lancemos los dados
function updateChart(stats) {
    // Le pasamos los nuevos valores al gráfico
    radarChart.data.datasets[0].data = [
        stats.str, stats.dex, stats.con, stats.int, stats.wis, stats.cha
    ];
    // ¡Le decimos a Chart.js que lo redibuje!
    radarChart.update();
}

// ==========================================
// --- 6. EVENTOS (Interactividad) ---
// ==========================================

// Capturamos el botón de lanzar dados
const btnRollStats = document.getElementById('btn-roll-stats');

// Evento 1: Al cargar la página (Iniciamos la app)
document.addEventListener('DOMContentLoaded', () => {
    loadRaces();
    loadClasses();
    initChart(); // Dibuja el gráfico vacío al abrir la página
});

// Evento 2: Cuando el usuario cambia la raza en el select
raceSelect.addEventListener('change', (event) => {
    myCharacter.setRace(event.target.value);
});

// Evento 3: Cuando el usuario cambia la clase en el select
classSelect.addEventListener('change', (event) => {
    myCharacter.setClass(event.target.value);
});

// Evento 4: Al hacer clic en el botón "Lanzar Dados"
btnRollStats.addEventListener('click', () => {
    myCharacter.generateAllStats(); // Calcula números
    updateDOMStats();               // Pinta números en el HTML
    updateChart(myCharacter.stats); // Anima el gráfico
});