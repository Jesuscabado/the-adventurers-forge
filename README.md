# El Compendio del Rol - Plataforma Multi-Sistema de Personajes

![Estado del Proyecto](https://img.shields.io/badge/Estado-Completado-success)
![Tecnología](https://img.shields.io/badge/Tecnología-Vanilla_JS-yellow)

Aplicación web interactiva desarrollada en **Vanilla JavaScript** que funciona como un "Hub" o portal para crear, visualizar y gestionar fichas de personajes de distintos sistemas de rol. 

Este proyecto fue construido para aplicar conceptos avanzados de desarrollo frontend sin el uso de frameworks, destacando el uso de Web Components, Programación Orientada a Objetos (POO), consumo de APIs externas y persistencia de datos estructurada.

> **Nota:** Puedes insertar aquí una captura de pantalla del menú principal de tu aplicación usando `![Screenshot](ruta-de-tu-imagen.png)`

## Características Principales

Este proyecto cumple con los siguientes hitos técnicos:

* **Arquitectura Modular y Web Components:** Implementación del principio DRY (Don't Repeat Yourself) mediante la creación de un Custom Element (`<rpg-navbar>`) que gestiona la navegación global de forma dinámica, leyendo atributos para resolver rutas relativas.
* **Sistema Multi-Juego (POO Avanzada):** Uso de clases independientes para modelar distintos sistemas. 
  * *Módulo D&D 5e:* Maneja cálculos matemáticos, tiradas de dados (4d6) y modificadores automáticos.
  * *Módulo Histórico 1350:* Enfoque puramente narrativo, anidación de objetos (apariencia, estatus) y campos de texto extendidos.
* **Consumo de APIs Externas:** Uso de `fetch` asíncrono para conectar con la [D&D 5e API](https://www.dnd5eapi.co/) y poblar dinámicamente los selectores de la forja de fantasía.
* **Visualización de Datos:** Implementación de **Chart.js** para generar gráficos de radar dinámicos en tiempo real basados en las tiradas del usuario.
* **Persistencia de Datos Independiente:** Uso de `localStorage` asignando claves únicas por juego (ej. `dnd_tavern` vs `censo_medieval`). Las listas se renderizan dinámicamente mediante manipulación del DOM en sus respectivas vistas ("La Taberna" y "Archivos Parroquiales").
* **Separation of Concerns:** Código estrictamente dividido en lógica de vista, lógica de almacenamiento, componentes y estilos temáticos.

## Tecnologías Utilizadas

* **HTML5** (Estructura semántica, Custom Elements)
* **CSS3** (Variables CSS, Flexbox, Media Queries, diseño Mobile First)
* **JavaScript (ES6+)** (POO, Clases, Promesas/Async-Await, DOM Manipulation)
* **Librerías:** [Chart.js](https://www.chartjs.org/)
* **API Externa:** [D&D 5e API](https://www.dnd5eapi.co/)

## Estructura de Directorios

El proyecto cuenta con una estructura de carpetas profesional para separar las distintas capas de la aplicación:

```text
/
├── index.html          # Hub principal de selección de módulos
├── style.css           # Estilos globales y variables (Dark Fantasy)
├── menu.css            # Estilos aislados para la vista principal
├── HTML/               # Vistas secundarias
│   ├── dnd.html        # Forja de personajes D&D
│   ├── taberna.html    # Lista de personajes guardados D&D
│   ├── medieval.html   # Creador de habitantes (Año 1350)
│   └── archivos.html   # Registro de habitantes históricos
└── JS/                 # Lógica de la aplicación
    ├── navbar.js       # Componente Web (Navegación global)
    ├── app.js          # Lógica, POO y API del módulo D&D
    ├── storage.js      # Manejo exclusivo de localStorage
    ├── medieval.js     # Lógica y POO del módulo histórico
    └── archivos.js     # Renderizado de listas dinámicas