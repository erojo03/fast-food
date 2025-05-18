# FastFood App

Aplicación web de comida rápida desarrollada con React, TypeScript, Vite y Tailwind CSS. Permite a los usuarios registrarse, explorar el menú, realizar pedidos generando boletas, y cuenta con una vista de administrador para gestionar la tienda.

---

## Características principales

- **Registro y autenticación de usuarios**: Los usuarios pueden crear una cuenta y acceder a su perfil.
- **Interfaz de compra**: Selección de productos, carrito de compras y generación automática de boletas.
- **Vista de administrador**: Panel para gestionar productos, pedidos y usuarios.
- **Diseño responsivo**: Adaptado para dispositivos móviles y escritorio usando Tailwind CSS.
- **Desarrollo moderno**: Basado en React con TypeScript para tipado estático y Vite para un entorno de desarrollo rápido y eficiente.

---

## Tecnologías utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**

---

## Estructura del proyecto

El proyecto sigue una organización modular con las siguientes carpetas principales:

/core
├─ services/
├─ guards/
├─ interfaces/
├─ interceptors/
└─ utils/

/features
├─ [feature1]/
├─ [feature2]/
└─ ...

/shared
├─ components/
├─ hooks/
└─ styles/

text

- **core**: Servicios, guards, interfaces, interceptors y utilidades compartidas.
- **features**: Vistas y funcionalidades específicas de la aplicación.
- **shared**: Componentes reutilizables, hooks y estilos comunes.

---

## Instalación y ejecución

1. Clonar el repositorio:

git clone [text](https://github.com/erojo03/fast-food.git)
cd fast-food

2. Instalar dependencias con pnpm:

pnpm install

3. Ejecutar el servidor de desarrollo:

pnpm run dev

4. Abrir en el navegador:

http://localhost:5173

---

## Scripts disponibles

- `pnpm run dev` - Inicia el servidor de desarrollo.
- `pnpm run build` - Genera la versión optimizada para producción.
- `pnpm run preview` - Previsualiza la versión de producción localmente.

---

## Contribuciones

Las contribuciones son bienvenidas. Puedes abrir issues o enviar pull requests para mejorar la aplicación.

---

## Licencia

Este proyecto está bajo licencia MIT.

---

*¡Gracias por usar FastFood App!*