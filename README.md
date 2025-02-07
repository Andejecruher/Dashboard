# CRM para Manejo de Nómina

Este proyecto es un sistema de gestión de relaciones con clientes (CRM) diseñado específicamente para el manejo de nóminas. Está construido con **React.js**, **TypeScript**, **Vite**, **TailwindCSS** y **Lucide-react** para la creación de la interfaz de usuario. El proyecto está configurado con herramientas modernas para garantizar un desarrollo rápido, eficiente y mantenible.

## Características Principales

- **Gestión de Empleados**: Registro y actualización de información de empleados.
- **Cálculo de Nóminas**: Automatización del cálculo de salarios, deducciones y bonificaciones.
- **Reportes**: Generación de reportes de nómina, horas trabajadas y otros indicadores.
- **Interfaz Moderna**: Diseño responsive y accesible gracias a TailwindCSS y Lucide-react.
- **Desarrollo Rápido**: Configuración optimizada con Vite para Hot Module Replacement (HMR) y Fast Refresh.

## Tecnologías Utilizadas

- **React.js**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de construcción rápida para aplicaciones modernas.
- **TailwindCSS**: Framework de CSS utilitario para diseñar interfaces rápidamente.
- **Lucide-react**: Biblioteca de iconos para React.
- **ESLint**: Herramienta de linting para mantener un código limpio y consistente.

## Configuración del Proyecto

### Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/crm-nomina.git
   cd crm-nomina
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   ```

   El proyecto estará disponible en `http://localhost:5173`.

### Configuración de ESLint

Para garantizar la calidad del código, el proyecto incluye una configuración de ESLint con reglas específicas para TypeScript y React. Si deseas expandir la configuración de ESLint, sigue estos pasos:

1. Asegúrate de tener instalado `eslint-plugin-react`:

   ```bash
   npm install eslint-plugin-react --save-dev
   # o
   yarn add eslint-plugin-react --dev
   ```

2. Actualiza el archivo `eslint.config.js`:

   ```js
   import react from "eslint-plugin-react";

   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ["./tsconfig.node.json", "./tsconfig.app.json"],
         tsconfigRootDir: import.meta.dirname,
       },
     },
     settings: { react: { version: "18.3" } },
     plugins: {
       react,
     },
     rules: {
       ...react.configs.recommended.rules,
       ...react.configs["jsx-runtime"].rules,
     },
   });
   ```

3. Ejecuta ESLint para verificar el código:

   ```bash
   npm run lint
   # o
   yarn lint
   ```

## Estructura del Proyecto

```
crm-nomina/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.js
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añade nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

---

¡Gracias por utilizar este CRM para manejo de nóminas! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en el repositorio.
