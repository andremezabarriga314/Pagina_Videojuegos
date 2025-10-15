🎮 Prototipos del Proyecto
📄 Información del Documento

Última actualización: 14/10/2025

Versión del prototipo: v1.0

Herramienta: Figma

🎯 Propósito del Prototipo

Este documento centraliza toda la información sobre los diseños y prototipos creados en Figma para el proyecto. Sirve como puente entre el diseño UX/UI y el desarrollo técnico, facilitando la implementación durante los sprints.

Objetivos del prototipo:

Validar la experiencia de usuario antes de desarrollar

Alinear la visión del producto entre todos los miembros del equipo

Servir como referencia visual durante el desarrollo backend y frontend

Documentar las decisiones de diseño tomadas en cada sprint

🔗 Enlaces Principales
Proyecto Principal

URL Figma:
https://www.figma.com/design/1fce47bdCDvksxEblswxpp/Pagina-web-videojuegos?node-id=0-1&t=ZrpCdin1kcN74aWM-1

🧱 Estructura del Prototipo
🧩 Sistema de Diseño
🎨 Paleta de colores:

Color primario: #00FF00 – Acciones principales (botones destacados, CTA)

Color secundario: #121212 – Fondos y contenedores

Color de acento: #1DB954 – Resaltado de precios, ofertas y acciones

Colores de estado:

Éxito: #28A745

Error: #DC3545

Advertencia: #FFC107

Info: #17A2B8

🔤 Tipografía:

Principal: Roboto – Para textos, formularios, descripciones

Títulos: Orbitron – Para encabezados, secciones destacadas

📐 Espaciado:

Sistema de 8px grid

Usos recomendados:

Margen pequeño: 8px

Espaciado medio: 16px / 24px

Espaciado grande: 32px

📱 Pantallas Incluidas
Flujo Principal de Usuario

Página de bienvenida

Formulario de registro

Verificación de email

Inicio de sesión (login)

Interacciones Prototipadas:

Navegación completa entre pantallas

Validaciones de formularios (email, password)

Estados de error y éxito

Indicadores de carga (loading spinners)

🧩 Componentes Reutilizables
📌 Botones

Primario: Confirmar, Guardar, Continuar

Secundario: Volver, Cancelar

Terciario: Links y acciones secundarias

Estados:

Default

Hover

Active

Disabled

Loading

📝 Formularios

Input text: Campos estándar

Input password: Con botón de visibilidad

Select dropdown: Con búsqueda activa

Checkbox / Radio: Para múltiples opciones

Date picker: Selector de fechas

File upload: Carga de archivos/imágenes

📚 Navegación

Navbar superior: Logo, navegación, perfil

Sidebar lateral: Menú colapsable (categorías, filtros)

Tabs: Subcategorías (ej. dentro de un género)

Paginación: Listas extensas de juegos

🔔 Feedback UI

Toast notifications: Confirmaciones rápidas

Modales: Confirmaciones o formularios emergentes

Alerts: Información contextual (errores, advertencias)

Spinners / Loaders: Estados de carga

Progress bars: Avances en checkout

📊 Visualización de Datos

Cards: Juegos, accesorios, componentes

Tables: Comparación técnica o specs

Charts: (No aplican en esta versión, pero podrían incluirse más adelante)

Stats cards: Resumen de productos, total en carrito

📐 Responsive Design

Breakpoints definidos:

Dispositivo	Rango de resolución
Mobile	320px – 767px
Desktop	1024px en adelante
♿ Accesibilidad

Implementado según estándares WCAG 2.1 AA:

Alto contraste de colores

Textos alternativos para imágenes

Navegación completa por teclado

Indicadores visuales de foco

Encabezados semánticos (<h1>, <h2>, etc.)

✅ Checklist de Implementación
🔄 Antes del Sprint

 Revisar prototipo de Figma

 Identificar componentes clave

 Validar endpoints necesarios

 Confirmar historias de usuario asociadas

👨‍💻 Durante el Desarrollo

 Usar estilos según diseño (colores, fuentes)

 Incluir todos los estados (hover, active, disabled)

 Adaptar a responsive design

 Consultar al diseñador ante dudas

✅ Al Finalizar

 Comparar 1:1 con el prototipo

 Documentar detalles técnicos

 Marcar pantallas como completadas en el sistema de gestión

🖼️ Assets y Recursos

Ubicación de los recursos:
src/frontend/assets/images/

Nomenclatura recomendada:

[tipo]-[descripcion]-[tamaño].[extensión]

Ejemplos:
icon-user-24px.svg
logo-primary-full.svg
img-hero-1920x1080.webp
illus-empty-state.svg

❓ Preguntas Frecuentes

¿Dónde encuentro los espaciados exactos?
→ En Figma, selecciona el elemento y revisa el panel derecho. Sigue la grilla de 8px.

¿Puedo modificar un componente?
→ Consulta con el equipo. Si es una excepción, crea una variante; si es recurrente, actualiza el componente base.

¿Cómo exporto imágenes de Figma?
→ Selecciona el asset > Panel derecho > Export > Selecciona formato y resolución > Exportar.

📞 Contacto y Soporte

Responsable de diseño: [Nombre del diseñador principal]

Canal de comunicación: [Slack / Discord / Teams]

Disponibilidad: [Horario establecido]

Sugerencia para dudas:

Revisar este documento primero

Usar comentarios en Figma

Consultar en el canal de equipo

Agendar sesión de revisión si es necesario

🔗 Referencias Útiles

[README.md] – Descripción general del proyecto

[docs/sprint-planning/] – Documentación de planificación

[CONTRIBUTING.md] – Guía para contribuir al repositorio

[docs/retrospectivas/] – Retros de cada sprint

Recursos externos:

Guía de Figma

Material Design Guidelines

Apple Human Interface Guidelines

Última actualización: 14/10/2025
Mantenido por: [Equipo de diseño / Product Owner]
Versión del documento: 1.0