# 📚 Clase : **Routing en React con React Router DOM (JSX)**

---

## 📑 Índice

1. [Introducción al enrutado en React](#1-introducción-al-enrutado-en-react)
2. [Configuración inicial con Vite](#2-configuración-inicial-con-vite)
3. [Instalación de React Router DOM](#3-instalación-de-react-router-dom)
4. [Rutas básicas con `<BrowserRouter>`](#4-rutas-básicas-con-browserrouter)
5. [Navegación con `<Link>` y `<NavLink>`](#5-navegación-con-link-y-navlink)
6. [Rutas dinámicas y `useParams`](#6-rutas-dinámicas-y-useparams)
7. [Rutas anidadas y layouts compartidos](#7-rutas-anidadas-y-layouts-compartidos)
8. [Rutas protegidas (auth simple)](#8-rutas-protegidas-auth-simple)
9. [React Router Data APIs: loaders & actions](#9-react-router-data-apis-loaders--actions)
10. [Lazy loading y code splitting (Mejorado)](#10-lazy-loading-y-code-splitting-mejorado)
11. [Manejo de errores y rutas 404](#11-manejo-de-errores-y-rutas-404)
12. [Buenas prácticas vs anti-patrones](#12-buenas-prácticas-vs-anti-patrones)
13. [Ejercicio final: MiniBlog Router](#13-ejercicio-final-miniblog-router)
14. [Recursos recomendados](#14-recursos-recomendados)

---

## ⏱ **Plan de tiempo**

- 0–10 min → Introducción + Setup
- 10–25 min → Rutas básicas + Navegación
- 25–40 min → Dinámicas + Anidadas
- 40–50 min → Rutas protegidas
- 50–65 min → Loaders / Actions + Lazy Loading
- 65–80 min → Errores + Buenas prácticas
- 80–90 min → Ejercicio final

---

## 1. Introducción al enrutado en React

React es **SPA** (Single Page Application):

- Sin router → todo está en un solo HTML.
- Router → simula navegación sin recargar la página.

**¿Por qué usar React Router DOM?**

- Manejo del historial (History API).
- Parámetros dinámicos (`/users/:id`).
- Rutas anidadas, 404, loaders, etc.

📌 _Analogia:_ Piensa en el router como **las señalizaciones en una ciudad** que te indican a dónde ir, sin salir de la ciudad.

---

## 2. Configuración inicial con Vite

```bash
# Crear proyecto React con Vite
npm create vite@latest mi-app-router
# Selecciona React y JavaScript
cd mi-app-router
npm install
npm install react-router-dom
npm run dev
```

Estructura recomendada:

```
src/
 ├─ routes/
 ├─ pages/
 ├─ layouts/
 └─ App.jsx
```

---

## 3. Instalación de React Router DOM

```bash
npm install react-router-dom
```

Usaremos **v6+** (API moderna con `<Routes>` y `createBrowserRouter`).

---

## 4. Rutas básicas con `<BrowserRouter>`

### App.jsx

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### pages/Home.jsx

```jsx
export default function Home() {
  return <h1>Página de Inicio</h1>;
}
```

### pages/About.jsx

```jsx
export default function About() {
  return <h1>Acerca de Nosotros</h1>;
}
```

✅ **Pro tip:** Nunca uses `<a href>` en SPAs → recarga la app. Usa `<Link>`.

---

## 5. Navegación con `<Link>` y `<NavLink>`

```jsx
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>
    </nav>
  );
}
```

**`NavLink`** → agrega estilos activos automáticamente.

---

## 6. Rutas dinámicas y `useParams`

```jsx
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();
  return <h2>Perfil del usuario: {id}</h2>;
}

// En App.jsx
<Route path="/users/:id" element={<UserDetail />} />;
```

📌 **Extra:** Para query params → `useLocation()`.

---

## 7. Rutas anidadas y layouts compartidos

```jsx
function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Aquí se renderizan las rutas hijas */}
    </div>
  );
}

// App.jsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="stats" element={<Stats />} />
  <Route path="settings" element={<Settings />} />
</Route>;
```

---

## 8. Rutas protegidas (auth simple)

```jsx
function PrivateRoute({ children }) {
  const isAuth = false; // Simulación
  return isAuth ? children : <Navigate to="/" />;
}

// Uso:
<Route
  path="/admin"
  element={
    <PrivateRoute>
      <Admin />
    </PrivateRoute>
  }
/>;
```

---

## 9. React Router Data APIs: loaders & actions

```jsx
// Ejemplo con createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: async () => fetch("/api/data"),
    errorElement: <ErrorPage />,
  },
]);
```

---

## 10. Lazy Loading y Code Splitting (Mejorado)

### **¿Qué es Lazy Loading?**

Lazy Loading significa **cargar los componentes solo cuando se necesitan**, en lugar de incluirlos todos en el bundle principal. Esto:

- **Reduce el tiempo de carga inicial** (bundle más pequeño).
- Mejora la experiencia en apps con muchas rutas/páginas.

👉 _Enrutamiento con Lazy Loading_ = cargar las páginas dinámicamente al navegar hacia ellas.

---

### **Cómo se hace en React**

React provee `lazy()` y `Suspense` para esto:

```jsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importación diferida (lazy)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

✅ **`fallback`**: contenido mostrado mientras se carga el componente.

---

### **Preguntas frecuentes (FAQ)**

#### ❓ ¿Lazy Loading afecta SEO?

- **Respuesta:** En SPAs, el SEO depende más del prerenderizado/SSR que del lazy loading. Para SEO óptimo → usar frameworks como **Next.js**.

#### ❓ ¿Puedo usar Lazy Loading en rutas protegidas?

- **Respuesta:** Sí. Puedes envolver el componente lazy dentro de la lógica de auth:

```jsx
<Route
  path="/admin"
  element={
    <PrivateRoute>
      <Admin /> {/* Admin puede venir con lazy */}
    </PrivateRoute>
  }
/>
```

#### ❓ ¿Qué pasa si falla la carga (ej. red lenta)?

- **Respuesta:** Puedes manejarlo con `Suspense fallback` y **error boundaries**:

```jsx
<Suspense fallback={<p>Cargando sección...</p>}>
  <ErrorBoundary>
    <LazyComponent />
  </ErrorBoundary>
</Suspense>
```

#### ❓ ¿Es obligatorio usar Lazy Loading?

- **Respuesta:** No, pero es recomendable en apps medianas/grandes para optimizar el performance.

---

### ✅ **Buenas prácticas con Lazy Loading**

- Usa `lazy()` solo para **rutas principales** o **componentes pesados**.
- No abuses en componentes muy pequeños → overhead innecesario.
- Siempre combina con un buen `fallback`.

📌 **Mini Ejercicio**:
Convierte la ruta `/about` a carga diferida con `lazy()` y muestra un spinner mientras se carga.

---

## 11. Manejo de errores y rutas 404

```jsx
<Route path="*" element={<h1>404 - Página no encontrada</h1>} />
```

---

## 12. Buenas prácticas vs anti-patrones

✅ Haz:

- Usa `<Link>` y `useNavigate` para navegación.
- Organiza rutas en `/routes` y páginas en `/pages`.
  ❌ No hagas:
- No uses `window.location` en SPA.
- No anides demasiadas rutas sin layouts.

---

## 13. Ejercicio final: **MiniBlog Router**

- Rutas:

  - `/` → lista de posts.
  - `/post/:id` → detalle.
  - `/admin` → protegido.

- Incluye navbar con `NavLink`.
- Simula datos con un array.

---

## 14. Recursos recomendados

- [React Router Docs](https://reactrouter.com/en/main)
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
