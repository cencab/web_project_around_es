# Around The U.S. (Front-End Application)

_Language / Idioma:_ [Español](#descripción-del-proyecto) | [English](#project-description)

**🔗 Ver el proyecto en vivo:** https://cencab.github.io/web_project_around_es/

## Descripción del Proyecto

Este proyecto es una aplicación web interactiva diseñada para que los usuarios compartan y exploren fotografías de lugares de interés. El objetivo principal de esta fase de desarrollo fue la evolución de una interfaz estática hacia una aplicación dinámica, asíncrona y segura conectada a una API REST (Client-Side Rendering). Se implementó un sistema sólido de validación de datos en tiempo real, operaciones CRUD completas y se optimizó la experiencia de usuario (UX) mediante la manipulación avanzada del DOM, indicadores de carga y una gestión eficiente del ciclo de vida de los eventos.

## Funcionalidades

El sitio cuenta con las siguientes capacidades interactivas:

- **Sincronización con Servidor (API):** La información del usuario y la galería de tarjetas iniciales se obtienen de forma asíncrona y paralela desde un servidor externo.
- **Gestión Completa de Perfil:** Formularios modales para actualizar el nombre, descripción profesional y la **foto de perfil (avatar)**, enviando peticiones `PATCH` al servidor y sincronizándose automáticamente con el DOM.
- **Gestión de Tarjetas (CRUD):** Creación dinámica de nuevas tarjetas (`POST`), eliminación segura de tarjetas propias con **ventana de confirmación** (`DELETE`), y sincronización en tiempo real del estado de "Me gusta" (`PUT`/`DELETE`).
- **Experiencia de Usuario (UX) Asíncrona:** Implementación de estados de carga visuales (ej. "Guardando...", "Creando...") en los botones de envío mientras se resuelven las promesas de red.
- **Vista Ampliada:** Visualización de imágenes en pantalla completa con sus respectivos títulos, respetando la relación de aspecto original.
- **Validación en Tiempo Real:** Restricción nativa en los campos de texto (`required`, `minlength`, `maxlength`, `url`). Los botones se deshabilitan automáticamente si el formulario es inválido.
- **Cierre Accesible de Modales:** Las ventanas emergentes pueden cerrarse presionando la tecla `Esc` o haciendo clic en el overlay, destruyendo los escuchadores de eventos al cerrarse para optimizar memoria.

## Tecnologías Utilizadas

- **HTML5:** Estructura semántica, uso de formularios con atributos de validación nativos y elementos `<template>`.
- **CSS3:** Diseño responsivo, manejo de estados interactivos y organización bajo la metodología **BEM**.
- **JavaScript (ES6+):** Arquitectura modular de acoplamiento débil estructurada en componentes independientes con responsabilidades únicas:
  - `Api.js`: Controlador centralizado de red encargado de todas las peticiones asíncronas (`fetch`) y manejo de errores, aislando la lógica de la base de datos del resto de la aplicación.
  - `Card.js`: Encapsula la lógica visual y eventos de cada tarjeta, delegando las acciones destructivas y actualizaciones de estado al controlador principal.
  - `FormValidator.js`: Motor universal de validación en tiempo real.
  - `Section.js`: Componente abstracto para el renderizado e inyección de elementos en el DOM.
  - `UserInfo.js`: Administrador centralizado del estado del perfil de usuario (incluyendo el ID de sesión).
  - `Popup.js`, `PopupWithForm.js`, `PopupWithImage.js` y `PopupWithConfirmation.js`: Estructura jerárquica para el control avanzado de ventanas emergentes. Se integran métodos de UX dinámicos para inyectar acciones y mostrar estados de carga.
  - `index.js`: Controlador y orquestador central (Controller) que instancia las dependencias y maneja el flujo de promesas (`Promise.all`).

---

## Project Description

This project is an interactive web application designed for users to share and explore photographs of interesting locations. The primary focus of this development phase was evolving a static interface into a dynamic, asynchronous, and secure application connected to a REST API (Client-Side Rendering). A robust real-time data validation system was implemented alongside full CRUD operations, and the overall user experience (UX) was optimized through advanced DOM manipulation, network loading states, and efficient event lifecycle management.

## Features

The application features the following interactive capabilities:

- **Server Synchronization (API):** User credentials and the initial card gallery are fetched asynchronously and in parallel from a remote backend server.
- **Full Profile Management:** Modal forms to dynamically update the user's name, professional description, and **profile picture (avatar)**, executing `PATCH` requests and ensuring immediate DOM synchronization.
- **Dynamic Card Administration (CRUD):** Ability to generate new cards via external URLs (`POST`), securely delete user-owned cards via a **confirmation modal** (`DELETE`), and sync "Like" button states with the server (`PUT`/`DELETE`).
- **Asynchronous UX Loading States:** Visual feedback integration (e.g., "Saving...", "Creating...") on submit buttons during pending network promises to prevent duplicate submissions.
- **Full-Screen Media Viewer (Lightbox):** A dedicated responsive modal to view high-resolution images with dynamic captions, preserving original aspect ratios.
- **Real-Time Form Validation:** Client-side constraint validation leveraging native attributes (`required`, `minlength`, `maxlength`, `url`).
- **Accessibility & Memory Optimization:** Interactive modals can be closed seamlessly via the `Esc` key or by clicking on the background overlay. Event listeners are dynamically destroyed upon closing to prevent memory leaks.

## Architecture & Technologies Used

- **HTML5:** Semantic structuring, native form validation constraints, and `<template>` elements.
- **CSS3:** Responsive layout design, interactive state management, and strict **BEM** methodology.
- **JavaScript (ES6+):** Standardized, modular OOP architecture structured with weak coupling and strict single-responsibility principles:
  - `Api.
