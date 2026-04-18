# 🚀 Portfolio – Alicia Hernández Contreras

Proyecto full stack de portfolio personal desarrollado con:

- 🎨 Frontend: Angular  
- ⚙️ Backend: Spring Boot (Java)  
- 🐬 Base de datos: MySQL (local o externa)  
- 🐳 Contenedores: Docker (frontend + backend)

---

## 👩‍💻 Sobre el proyecto

Este portfolio es una aplicación full stack donde muestro mi experiencia como desarrolladora, formación, habilidades técnicas y vías de contacto.

La arquitectura está separada en:

- Frontend (Angular) → interfaz de usuario  
- Backend (Spring Boot) → API REST  
- Base de datos MySQL → externa (no dockerizada)

---

## 🐳 Arquitectura con Docker

El proyecto está dockerizado parcialmente:

### ✔ Contenedores Docker
- Frontend (Angular → Nginx)
- Backend (Spring Boot)

### ❌ No incluido en Docker
- MySQL (se ejecuta servidor externo)

---

## 🔌 Conexión entre servicios

El backend se conecta a MySQL externo usando:

```properties
spring.datasource.url=jdbc:mysql://host.docker.internal:3306/portfolio_db
```

## 🚀 Cómo levantar el proyecto

### 🐳 1. Levantar frontend + backend con Docker

Desde la raíz del proyecto:

```bash
docker compose up --build
````