# 🚀 Portfolio – Alicia Hernández Contreras

<img width="610" height="454" alt="portfolio visual front" src="https://github.com/user-attachments/assets/f2fe3903-f965-4454-8001-bbe342c27cc8" />

<br>
Proyecto full stack de portfolio personal desarrollado con:
<br>

- 🎨 Frontend: Angular  
- ⚙️ Backend: Spring Boot (Java)  
- 🐬 Base de datos: Postgresql (externa)  
- 🐳 Contenedores: Docker (frontend + backend)

---

## 👩‍💻 Sobre el proyecto

Este portfolio es una aplicación full stack donde muestro mi experiencia como desarrolladora, formación, habilidades técnicas y vías de contacto.
<br>
<img width="365" height="173" alt="arquitectura portfolio" src="https://github.com/user-attachments/assets/3699d7e7-d60e-4861-9748-fa1cd9e41a95" />
<br>
La arquitectura está separada en:
<br>
- Frontend (Angular) → interfaz de usuario  
- Backend (Spring Boot) → API REST
- Base de datos Postgresql → externa (no dockerizada)
- Documentación API → Swagger
<br>
  <img width="449" height="470" alt="swagger portfolio" src="https://github.com/user-attachments/assets/66702546-c6b3-4458-9a7b-2f0dbdb492ce" />


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
## 🚀 Cómo levantar el proyecto

### 🐳 1. Levantar frontend + backend con Docker

Desde la raíz del proyecto:

```bash
docker compose up --build
```
