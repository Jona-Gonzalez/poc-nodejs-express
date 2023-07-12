# Proyecto Objetivo NodeJS - Express - MongoDB

El proyecto es una aplicación web desarrollada con Node.js, Express y MongoDB, con el propósito de aprender y reforzar conocimientos en el desarrollo backend. El objetivo principal es practicar la creación de rutas, controladores, autenticación y autorización, como la interacción con una base de datos.

El proyecto se enfoca en construir un API RESTful con funcionalidades de CRUD. Al completarlo, se espera obtener un buen entendimiento de cómo trabajar con estas tecnologías en un contexto real,y se busca desarrollar habilidades en el diseño de la arquitectura de una aplicación de backend.

## Instalación

- Clona este repositorio: `git clone <URL del repositorio>`
- Navega hasta el directorio del proyecto: `cd nombre-del-directorio`
- Instala las dependencias: `npm install`

## Configuración

- Crea un archivo .env en la raíz del proyecto.
- Agrega las siguientes variables de entorno en el archivo .env:`

```
MONGO_SERVER=<URL de tu base de datos MongoDB Atlas>
```

## Dependencias

- dotenv - Para cargar variables de entorno desde el archivo .env.
- ejs - Motor de plantillas para renderizar vistas EJS.
- express - Framework web para Node.js.
- express-validator - Middleware para validar y sanitizar datos en las rutas de Express.
- mongoose - Librería para interactuar con MongoDB.
- ts-node - Para ejecutar código TypeScript directamente en Node.js.

## Estructura de Directorios

```
├── src/
│   ├── config
│   ├── controllers/
│   ├── middleware
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── types/
│   ├── validations/
│   └── views/
└── ...
```

- src/config/ - Conección a la base de datos.
- src/controllers/ - Controladores que manejan las peticiones y respuestas.
- src/models/ - Modelos de datos y esquemas de MongoDB.
- src/middlewares/ - Middlewares personalizados.
- src/routes/ - Rutas de la aplicación.
- src/services/ - Servicios que interactúan con la base de datos.
- src/types/ - Tipos de datos personalizados.
- src/validations/ - Validaciones personalizadas.
- src/views/ - Plantillas EJS para renderizar las vistas.

## Uso

1. Ejecuta la aplicación: npm run dev
2. Abre tu navegador y visita http://localhost:8080

## Características

- Implementación del modelo MVC (Modelo-Vista-Controlador).
- Uso de EJS como motor de plantillas para renderizar vistas.
- Middleware de autenticación de administrador para rutas del dashboard.
- Middleware de validación en las rutas del dashboard de administrador.
- CRUD (Crear, Leer, Actualizar, Eliminar) utilizando MongoDB Atlas.

### Documentación REST API

https://documenter.getpostman.com/view/21175048/2s946cgub9
