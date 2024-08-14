# CVExport :Creacion de CV´S gratuita

CVExport es una pagina web la cual púedes crear apartir de las diferentes plantillas que ofrecemos, tu propio CV(Curriculum Vitae), nuestro servicio es completamente gratuito a diferencia de otros competidores.

## OBJETIVO DEL PROYECTO:
  - Desarrollar una página web que permita a los usuarios crear currículums vitae (CVs) de manera sencilla. 
  - La plataforma ofrecerá diversas plantillas personalizables y opciones para exportar el CV en formato pdf,
    así como enviar el CV por WhatsApp, correo electrónico y direccionar para compartirlo en LinkedIn.

# FUNCIONALIDADES PRINCIPALES:
  Creacion y personalizacion de CVs
  - Registro e Inicio de Sesión: Usuarios pueden registrarse e iniciar sesión para guardar y gestionar sus CVs.
  - Plantillas de CV: Ofrecer una variedad de plantillas profesionales y modernas.
  - Editor de CVs: Un editor intuitivo donde los usuarios pueden añadir y personalizar secciones como datos personales, experiencia laboral, educación, habilidades, etc.
  - Previsualización: Vista previa en tiempo real del CV mientras se edita.

Exportación y compartición 
  - Exportar en Word: Opción para descargar el CV en formato .docx.
  - Exportar en PDF: Descargar el CV en formato PDF para una fácil impresión y compartición.
  - Enviar por WhatsApp: Integración con WhatsApp para enviar el CV directamente desde la plataforma.
  - Enviar por Correo Electrónico: Opción para enviar el CV a una dirección de correo electrónico.
  - Compartir en LinkedIn: Enlace directo para compartir el CV en el perfil de LinkedIn del usuario.

GESTIÓN DE CVS
  - Guardar: Los usuarios pueden guardar múltiples CVs 
  - Historial de Versiones: Registro deversiones anteriores del CV para facilitar la recuperación.

# TECNOLOGIAS EMPLEADAS
## Herramientas Utilizadas en nuestra Web:
## Lenguajes, frameworks
- JavaScript 
- [Python 3.12](https://www.python.org/downloads/)
- [NodeJS 20.14.0](https://nodejs.org/en)
- [React](https://react.dev/) 
- [Fast API](https://fastapi.tiangolo.com/)
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/)


## Base de datos 
- MySQL

## Herramientas y IDE'S
- [Visual Studio Code](https://code.visualstudio.com/download)
- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
- [XAMPP](https://www.apachefriends.org/download.html)
- [GIT](https://git-scm.com/downloads)

## Extenciones Utlizadas en Visual Studio Code
- Python- Microsoft 
- Git Grapa - mhutchie
- Git History - Don jayamanme
- Git Hub Pull Request- GitHub
- GitLends- GitKraken
- ES7 +React/Redux/React-Native  Snippets-- dsznajder

#Instalaciones de librerias 

npm install @fortawesome/fontawesome-free@6.6.0
npm install @fortawesome/free-solid-svg-icons@6.6.0
npm install @fortawesome/react-fontawesome@0.2.2
npm install @react-pdf/renderer@3.4.4
npm install file-saver@2.0.5
npm install iframe@1.0.0
npm install jspdf@2.5.1
npm install jspdf-autotable@3.8.2
npm install pdf-lib@1.17.1
npm install pdfjs@2.5.3
npm install react-iframe@1.8.5
npm install react-pdf@9.1.0
npm install react-pdf-editor@1.1.2
npm install sweetalert2@11.12.2
npm install --save-dev @testing-library/react@16.0.0
npm install --save-dev eslint-plugin-react@7.34.1
npm install --save-dev eslint-plugin-react-hooks@4.6.0
npm install --save-dev jest-fetch-mock@3.0.3

#Base de datos 

create database usuarios2;
use usuarios2;

create table users(
id int primary key auto_increment,
nombre varchar(100),
username varchar(100) ,
email varchar(255) ,
contra varchar(255)
);


# Mockups
https://drive.google.com/file/d/1Sdx01ouoN69invtF5fqe1pBLSBLBxr7v/view?usp=sharing

## Diagrama de flujo
![image](https://github.com/DavidG1133/CVExport/assets/171756156/031bbb0f-077d-4e5f-acf8-8ba43c1d0ae4)

# METODOLOGÍA UTILIZADA: SCRUM
Razones para Elegir Scrum
Flexibilidad y Adaptabilidad:
  - Cambio de Requisitos: Scrum permite adaptar el trabajo a medida que cambian los requisitos y prioridades del proyecto.
  - Retroalimentación Continua: Al final de cada sprint, se realiza una revisión y retrospectiva, lo que permite al equipo ajustar su enfoque.
Entrega Continua de Valor:
  - Incrementos Funcionales: Scrum se enfoca en entregar incrementos funcionales del producto al final de cada sprint, asegurando que siempre haya un producto
     utilizable y proporcionando valor al cliente de manera regular.
  - Prioridad en Funcionalidades: El backlog del producto se prioriza continuamente, enfocando los esfuerzos del equipo en las funcionalidades que aportan
     más valor al negocio.
Mejora de la Comunicación y Transparencia:
  - Reuniones Diarias: Las reuniones diarias mejoran la comunicación entre los miembros del equipo y ayudan a identificar y resolver problemas rápidamente.
Enfoque en la Calidad:
  - Revisión Continua: Al final de cada sprint, se realiza una revisión del trabajo completado, lo que permite al equipo identificar áreas de mejora y
    asegurar que se mantengan altos estándares de calidad.
  - Mejora Continua: Las retrospectivas del sprint permiten al equipo reflexionar sobre su desempeño y buscar formas de mejorar continuamente.

## IMPLEMENTACIÓN DE SCRUM EN EL PROYECTO
![image](https://github.com/DavidG1133/CVExport/assets/171756156/6d227145-61c0-47f4-9903-55b7f461f448)

## Plan de Desarrollo Basado en Metodología Ágil del Proyecto
1. Planificación y Análisis (Sprint 0)
Definición de objetivos y alcance del proyecto.
Identificación de stakeholders.
Creación del backlog del producto.
Definición de las historias de usuario.
Planificación de los sprints iniciales.

2. Diseño y Arquitectura (Sprint 1)
Diseño de la arquitectura del sistema.
Diseño de la base de datos.
Diseño de la interfaz de usuario (mockups y wireframes).

Definición de las integraciones con WhatsApp y servicios de correo electrónico.
3. Desarrollo de Funcionalidades Básicas (Sprint 2-4)
- Sprint 2
Implementación del sistema de registro e inicio de sesión.
Creación de la base de datos para almacenar usuarios y CVs.
- Sprint 3
Desarrollo del editor de CVs.
Implementación de la funcionalidad de previsualización en tiempo real.
- Sprint 4
Integración de las plantillas de CV.
Pruebas y ajustes en el editor y previsualización.

4. Exportación y Compartición (Sprint 5-6)
- Sprint 5
Implementación de la exportación en formato Word y PDF.
Pruebas de exportación y ajustes.
Pruebas de direccionamiento
- Sprint 6
Integración con WhatsApp para el envío de CVs.
Integración con servicios de correo electrónico para el envío de CVs.
Implementación de la funcionalidad de direccionar en LinkedIn.
5. Gestión de CVs y Versionado (Sprint 7)
Implementación de la funcionalidad para guardar múltiples CVs.
Desarrollo del historial de versiones.
Pruebas y ajustes en la gestión de CVs.

6. Integraciones y Pruebas Finales (Sprint 8-9)
Finalización de las integraciones con APIs externas.
Pruebas de integración y pruebas de usuario.
Ajustes finales y corrección de errores.

7. Despliegue y Monitoreo (Sprint 10)
Despliegue de la plataforma en un entorno de producción.
Configuración de monitoreo y análisis de rendimiento.
Feedback de los usuarios y planificación de mejoras futuras.

# Cronograma Estimado

  - Sprint 0: 1 semana
  - Sprint 1: 1 semana
  - Sprint 2-4: 3 semanas 
  - Sprint 5-6: 2 semanas 
  - Sprint 7: 1 semana
  - Sprint 8-9: 2 semanas 
  - Sprint 10: 1 semana

Total: 8 semanas

# ARQUITECTURA APLICADA Y PATRÓN DE DISEÑO
## MVVM
La arquitectura MVVM es una excelente opción para el desarrollo del proyecto de creación de CVs debido a su capacidad para manejar la complejidad de la lógica de presentación, su modularidad, y la separación de responsabilidades. Esto resulta en un código más limpio, mantenible y escalable, lo que es crucial para el éxito a largo plazo del proyecto. Además, MVVM facilita la implementación de funcionalidades complejas y actualizaciones en tiempo real.

#Pruebas unitarias 
![image](https://github.com/user-attachments/assets/f6e1f58a-0987-4260-9bb6-e0ee96c9c09f)



# Integrantes del Equipo
- Daniela Alvarado Luna 
- Manuel Castillo Pisil
- David Gonzalez Amaro
# Materia: Desarrollo WEB Integral 9°A
