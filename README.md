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
- Base de datos Postgresql → externa (no dockerizada)

---

## 🐳 Arquitectura con Docker

El proyecto está dockerizado parcialmente:

### ✔ Contenedores Docker
- Frontend (Angular → Nginx)
- Backend (Spring Boot)

### ❌ No incluido en Docker
- Postgresql (se ejecuta servidor externo)

---

## 🧭 Uso de la aplicación

Este portfolio está diseñado para ser simple e intuitivo. Puedes navegar por las diferentes secciones desde la propia página:

- **Inicio:**  
  Presentación general, tecnologías principales y acceso rápido a contacto.

- **Experiencia:**  
  Muestra los proyectos y experiencia profesional desarrollada.

- **Skills:**  
  Tecnologías y herramientas con las que trabajo.

- **Formación:**  
  Estudios y aprendizaje técnico.

- **Contacto (Footer):**  
  - Acceso directo para enviar un email  
  - Teléfono (clicable en móvil y escritorio)  
  - Ubicación en Sevilla  
  - Enlaces a GitHub y LinkedIn  

---

## ⚡ Interacciones

- El botón **“Ver experiencia”** hace scroll a la sección correspondiente  
- El botón **“Contactar”** abre directamente el correo (Gmail)  
- Los enlaces del footer permiten contacto rápido, ir a la sección correspondiente y acceso a redes.
- En los enlaces de contacto puedes ver el mapa de la ubicación, y abre directamente el correo (Gmail) y la llamada.

---

## 📱 Responsive

La web está adaptada para:

- Escritorio  
- Tablet  
- Móvil  

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
```
