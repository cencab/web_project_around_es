# Around The U.S. (Front-End Application)

_Language / Idioma:_ [Español](#descripción-del-proyecto) | [English](#project-description)

**🔗 Ver el proyecto en vivo:** https://cencab.github.io/web_project_around_es/

## Descripción del Proyecto

Este proyecto es una aplicación web interactiva diseñada para que los usuarios compartan y exploren fotografías de lugares de interés. El objetivo principal de esta fase de desarrollo fue la evolución de una interfaz estática hacia una aplicación dinámica y segura (Client-Side Rendering). Se implementó un sistema sólido de validación de datos en tiempo real y se optimizó la experiencia de usuario (UX) mediante la manipulación avanzada del DOM y una gestión eficiente del ciclo de vida de los eventos.

## Funcionalidades

El sitio cuenta con las siguientes capacidades interactivas:

- **Edición de Perfil:** Formulario modal para actualizar el nombre y la descripción profesional, sincronizándose automáticamente con la información de la página.
- **Gestión de Tarjetas:** Creación dinámica de nuevas tarjetas con títulos personalizados y enlaces de imagen, así como la eliminación de tarjetas existentes y la interacción de "Me gusta" (corazón activo).
- **Vista Ampliada:** Visualización de imágenes en pantalla completa con sus respectivos títulos, respetando la relación de aspecto original.
- **Validación en Tiempo Real (UX Moderna):** Restricción nativa en los campos de texto (`required`, `minlength`, `maxlength`). Los botones de envío se deshabilitan automáticamente si el formulario es inválido, y se muestran mensajes de error específicos debajo de cada campo.
- **Cierre Accesible de Modales:** Las ventanas emergentes pueden cerrarse presionando la tecla `Esc` o haciendo clic en la superposición oscura (overlay), optimizando la memoria del navegador al destruir los escuchadores de eventos al cerrarse.

## Tecnologías Utilizadas

- **HTML5:** Estructura semántica, uso de formularios con atributos de validación nativos y elementos `<template>` para el renderizado dinámico de nodos.
- **CSS3:** Diseño responsivo, manejo de estados interactivos (`:hover`, `:disabled`) y organización de archivos bajo la metodología **BEM** (Block Element Modifier).
- **JavaScript (ES6+):** Programación modular dividida en scripts independientes (`index.js` para flujos generales y `validate.js` para la lógica universal de validación). Uso de manipulación del DOM, manejo avanzado de eventos (`keydown`, `click`, `input`), y métodos funcionales de arrays (`.every()`, `.forEach()`).

## Project Description

This project is an interactive web application designed for users to share and explore photographs of interesting locations. The primary focus of this development phase was evolving a static interface into a dynamic, secure, Client-Side Rendered (CSR) application. A robust real-time data validation system was implemented, and the overall user experience (UX) was optimized through advanced DOM manipulation and efficient event lifecycle management.

## Features

The application features the following interactive capabilities:

- **User Profile Management:** A modal form for dynamically updating the user's name and professional description, ensuring immediate synchronization with the main interface.
- **Dynamic Card Administration:** Ability to efficiently render new visual cards via external URLs, toggle "Like" button states via interactive CSS transitions, and delete elements from the gallery in real time.
- **Full-Screen Media Viewer (Lightbox):** A dedicated responsive modal to view high-resolution images with dynamic captions, preserving original aspect ratios.
- **Real-Time Form Validation:** Client-side constraint validation leveraging native attributes (`required`, `minlength`, `maxlength`). Submit buttons automatically toggle active/disabled states based on form validity, displaying custom, localized error messages.
- **Accessibility & Memory Optimization (Advanced UX):** Interactive modals can be closed seamlessly via the `Esc` key or by clicking on the background overlay. All event listeners are dynamically destroyed upon closing to prevent memory leaks.

## Architecture & Technologies Used

- **HTML5:** Semantic structuring, native form validation constraints, and `<template>` elements for efficient node cloning and rendering.
- **CSS3:** Responsive layout design, interactive state management (`:hover`, `:disabled`), and style architecture organized under the **BEM** (Block Element Modifier) methodology.
- **JavaScript (ES6+):** Modular code architecture split into independent scripts with single-responsibility scopes (`index.js` for general app workflows and `validate.js` for the universal validation engine). Extensive use of event delegation, complex data handling, and functional array methods (`.every()`, `.forEach()`).
