# 📌 Proyecto Fullstack – Pokédex

Este proyecto está diseñado para que practiques **frontend y backend** en un entorno completo.
El objetivo es construir una **Pokédex** que permita listar, buscar, crear, editar y eliminar Pokémon.

No hay que entregar nada formal, simplemente seguir los pasos, practicar y marcar tu progreso.

---

## 🗂️ 1. Modelo de Datos

### Entidad: `Pokemon`

- `id`: número entero (autoincremental, clave primaria)
- `name`: string, obligatorio, único
- `type`: string, obligatorio (ej: `Fire, Water, Grass, Electric, Psychic, Rock, Ground, Bug, Dragon, Normal`)
- `level`: número entero, obligatorio (1–100)
- `image`: string (URL de la imagen del Pokémon)

---

## 🌐 2. Backend

### Tecnologías sugeridas

- **Node.js + Express** para el servidor
- **Sequelize + PostgreSQL** (o MySQL si prefieres)
- **Cors y dotenv** para configuración

### Endpoints requeridos

- [ ] **GET /pokemons** → lista de todos los Pokémon
- [ ] **GET /pokemons/\:id** → detalle de un Pokémon por `id`
- [ ] **POST /pokemons** → crear un Pokémon nuevo (validar campos)
- [ ] **PUT /pokemons/\:id** → actualizar un Pokémon existente
- [ ] **DELETE /pokemons/\:id** → eliminar un Pokémon

### Validaciones obligatorias

- [ ] Nombre único (no repetir Pokémon)
- [ ] Nivel debe estar entre 1 y 100
- [ ] Tipo debe pertenecer a la lista predefinida
- [ ] La URL de imagen debe ser válida (empiece por `http`)

### Seeds iniciales (mínimo 5 Pokémon)

Ejemplo:

- Pikachu (Electric, nivel 25)
- Charmander (Fire, nivel 12)
- Bulbasaur (Grass, nivel 8)
- Squirtle (Water, nivel 10)
- Onix (Rock, nivel 30)

---

## 🎨 3. Frontend

### Tecnologías sugeridas

- **React + Vite** para el proyecto base
- **React Router DOM** para navegación entre páginas
- **Axios** para consumir la API
- **CSS Modules o Tailwind** (a elección)

### Páginas requeridas

- [ ] **Home** → bienvenida con enlace a la Pokédex
- [ ] **Pokédex** → lista de Pokémon en tarjetas (nombre, tipo, imagen)
- [ ] **Detalle** → información completa de un Pokémon seleccionado
- [ ] **Formulario** → para agregar un nuevo Pokémon

### Funcionalidades clave

- [ ] Mostrar lista dinámica desde el backend
- [ ] Búsqueda por nombre (input que filtre resultados en vivo)
- [ ] Filtro por tipo (select desplegable)
- [ ] Botón para eliminar Pokémon desde la lista
- [ ] Formulario con validaciones (campos obligatorios, nivel válido, tipo válido)

---

## 📅 4. Roadmap de 21 Días

### 🔹 Semana 1 – Backend Base

- [ ] **Día 1**: Instalar dependencias (express, sequelize, pg/mysql2, cors, dotenv)
- [ ] **Día 2**: Configurar conexión a la base de datos
- [ ] **Día 3**: Crear modelo `Pokemon` con Sequelize
- [ ] **Día 4**: Endpoint `GET /pokemons`
- [ ] **Día 5**: Endpoint `GET /pokemons/:id`
- [ ] **Día 6**: Endpoint `POST /pokemons` con validaciones básicas
- [ ] **Día 7**: Sembrar la BD con 5 Pokémon iniciales

### 🔹 Semana 2 – Backend Completo + Frontend Setup

- [ ] **Día 8**: Endpoint `PUT /pokemons/:id`
- [ ] **Día 9**: Endpoint `DELETE /pokemons/:id`
- [ ] **Día 10**: Mejorar validaciones (tipos válidos, nivel entre 1–100, nombre único)
- [ ] **Día 11**: Crear proyecto React con Vite y configurar rutas básicas
- [ ] **Día 12**: Navbar + Home page básica
- [ ] **Día 13**: Crear página Pokédex con layout inicial
- [ ] **Día 14**: Conectar Pokédex al backend (`GET /pokemons`)

### 🔹 Semana 3 – Frontend Completo

- [ ] **Día 15**: Componente de tarjeta de Pokémon con nombre, tipo e imagen
- [ ] **Día 16**: Implementar búsqueda por nombre en frontend
- [ ] **Día 17**: Implementar filtro por tipo en frontend
- [ ] **Día 18**: Página de detalle de Pokémon (`GET /pokemons/:id`)
- [ ] **Día 19**: Formulario para crear Pokémon (`POST /pokemons`) con validaciones
- [ ] **Día 20**: Botón para eliminar Pokémon desde frontend (`DELETE /pokemons/:id`)
- [ ] **Día 21**: Revisión final + mejorar diseño visual (CSS o librería UI)

---

## ✅ 5. Checklist Global Final

Al finalizar el proyecto deberías tener:

- [ ] **Backend funcionando** con todos los endpoints CRUD
- [ ] **Validaciones implementadas** (nombre único, nivel válido, tipo válido)
- [ ] **Seeds iniciales cargados** en la base de datos
- [ ] **Frontend conectado al backend** (lista de Pokémon desde la API)
- [ ] **Página de Pokédex** con tarjetas dinámicas
- [ ] **Búsqueda por nombre** funcional
- [ ] **Filtro por tipo** funcional
- [ ] **Página de detalle** de un Pokémon
- [ ] **Formulario para agregar** un Pokémon con validaciones
- [ ] **Eliminar Pokémon** desde frontend
- [ ] **Diseño visual agradable** y navegación fluida

---

## ⭐ 6. Extras Opcionales

- [ ] Subida de imágenes en lugar de solo URLs
- [ ] Login de usuarios con favoritos
- [ ] Deploy del backend en Railway/Render y frontend en Vercel/Netlify
