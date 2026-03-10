# Forja de Héroes D&D 5e - Creador de Personajes

![Estado del Proyecto](https://img.shields.io/badge/Estado-Completado-success)
![Tecnología](https://img.shields.io/badge/Tecnología-Vanilla_JS-yellow)

Aplicación web interactiva desarrollada en **Vanilla JavaScript** para crear, visualizar y gestionar fichas de personajes de Dungeons & Dragons (5ª Edición). 

Este proyecto fue construido con el objetivo de aplicar conceptos avanzados de desarrollo frontend sin el uso de frameworks, destacando la manipulación dinámica del DOM, Programación Orientada a Objetos y consumo de APIs externas.

> **Nota:** Puedes insertar aquí una captura de pantalla de tu aplicación funcionando usando `![Screenshot](ruta-de-tu-imagen.png)`

## Características Principales

Este proyecto cumple con los siguientes requisitos técnicos:

* **Lógica y POO:** Uso de clases (`CharacterDnD`) para encapsular los datos del personaje, métodos de generación de atributos (sistema 4d6 descartando el menor) y cálculo automático de modificadores.
* **Consumo de APIs Externas:** Uso de `fetch` para conectar con la [D&D 5e API](https://www.dnd5eapi.co/) y poblar dinámicamente los selectores de Razas y Clases.
* **Visualización de Datos:** Implementación de **Chart.js** para generar un gráfico de radar dinámico que reacciona en tiempo real a las tiradas de dados del usuario.
* **Persistencia de Datos:** Sistema de guardado integrado con `localStorage`. Los personajes creados se envían a "La Taberna" (una página secundaria) donde pueden ser visualizados o eliminados.
* **Diseño Responsivo (Mobile First):** Interfaz temática estilo *Dark Fantasy/RPG* optimizada para verse perfecta tanto en monitores de escritorio como en dispositivos móviles.

## Tecnologías Utilizadas

* **HTML5** (Estructura semántica)
* **CSS3** (Estilos personalizados, Flexbox, CSS Grid, Media Queries)
* **JavaScript (ES6+)** (Lógica, Eventos, Promesas/Async-Await)
* **Librerías:** [Chart.js](https://www.chartjs.org/) (Gráficos)
* **API:** [D&D 5e API](https://www.dnd5eapi.co/)

## Estructura del Proyecto

El código está modularizado para separar las responsabilidades (Separation of Concerns):

* `index.html` / `taberna.html`: Vistas principales.
* `style.css`: Estilos globales e interfaz responsiva.
* `app.js`: Lógica principal de la forja, POO y eventos del DOM.
* `storage.js`: Módulo exclusivo para manejar la lectura y escritura en `localStorage`.
* `taberna.js`: Lógica de renderizado y eliminación para la vista de personajes guardados.

## Cómo ejecutar el proyecto

Al estar construido en Vanilla JS, no requiere instalaciones complejas ni node modules:

1. Clona este repositorio: `git clone https://github.com/tu-usuario/nombre-del-repo.git`
2. Abre la carpeta del proyecto.
3. Ejecuta el archivo `index.html` en tu navegador web (se recomienda usar la extensión *Live Server* de VS Code para una mejor experiencia de desarrollo).