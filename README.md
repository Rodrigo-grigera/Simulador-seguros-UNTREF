Aplicación desarrollada en React utilizando Vite como entorno de desarrollo , que permite cotizar un seguro de manera dinámica.
El usuario completa un formulario con su edad, tipo de propiedad y valor declarado, y el sistema devuelve tres opciones de cotización: básica, intermedia y premium.
El proyecto utiliza componentes reutilizables, estilos separados por módulo y validaciones esenciales para asegurar datos correctos.

Características principales:
✔️ Formulario interactivo para ingresar:
  - Edad del usuario
  - Tipo de propiedad (Casa o Departamento)
  - Precio de la propiedad

✔️ Validaciones:
  - La edad no puede superar los 105 años
  - No se permiten valores negativos en ningún campo
  - No se muestra cotización si falta completar algún dato

✔️ Cálculo sincronizado de:
  - Plan Básico
  - Plan Intermedio
  - Plan Superior

✔️ Componentes organizados y estilos separados (CSS por componente)
✔️ Tipografías importadas desde Google Fonts
✔️ Diseño simple, limpio y fácil de entender

🗂️ Estructura del proyecto:
```
src/
 ├─ assets/
 │   └─ react.svg           
 │
 ├─ componentes/
 │   ├─ formulario/
 │   │   ├─ Form.jsx
 │   │   ├─ Form.css
 │   │
 │   ├─ opcioneCobertura/
 │       ├─ OpcionCobertura.jsx
 │       ├─ OpcionCobertura.css
 │
 ├─ App.jsx                 
 ├─ main.jsx                
 ├─ index.css              
 └─ styles.css  
```
🚀 Cómo ejecutar el proyecto localmente
Sigue estos pasos:

```
1️⃣ Clonar el repositorio
2️⃣ Entrar en la carpeta del proyecto
    eje: cd tu-repo
3️⃣ Instalar dependencias
    npm install
4️⃣ Ejecutar la app desde la terminal
    npm run dev
  Luego puedes abrirla en:
    http://localhost:3000
``` 
🧩 Tecnologías utilizadas
- React
- JavaScript
- CSS 
- Google Fonts
- Vite (con plantilla React)

El proyecto está organizado bajo una arquitectura simple y clara:
- Componentes reutilizables
- Funciones separadas para cálculos y validaciones
- Estilos agrupados por componente
- Nombres de archivos descriptivos
- Código legible y fácil de mantener
