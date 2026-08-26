# ISW-521 - Portafolio de Evidencias

**Estudiante:** Ian Efrén Angulo Matamoros<br>
**Carné:** 208660264
**Institución:** Universidad Técnica Nacional (UTN) - Sede San Carlos<br>
**Curso:** ISW-521 - Programación en Ambiente Web I<br>
**Período:** 2026 - II Cuatrimestre

## Propósito del repositorio

Este repositorio documenta, clase por clase, las actividades, prácticas y proyectos desarrollados durante el curso ISW-521. Su propósito es reunir evidencias del aprendizaje progresivo sobre fundamentos de la Web, redes, servidores, control de versiones, HTML, CSS, JavaScript, herramientas de desarrollo, frameworks y TypeScript.

## Índice de contenidos

| Clase | Tema principal | Evidencias y contenidos | Estado |
| :---: | --- | --- | :---: |
| [01](Clase%2001/) | Fundamentos de Internet y la Web | Diferencias entre Internet y WWW; Internet, intranet y extranet; componentes y diseño de URLs; jerarquía DNS, TLD, SLD, subdominios y registros A/CNAME. |Completado|
| [02](Clase%2002/) | Protocolos y ciclo de una petición web | Comparación TCP/UDP; HTTP/1.1, HTTP/2 y HTTP/3; certificados, TLS y cifrado; análisis de DNS, TCP, TLS y recursos mediante DevTools. |Completado |
| [03](Clase%2003/) | Servidores, despliegue y arquitectura web | Diagnóstico de Linux y Nginx; virtual hosts, procesos y puertos; Nginx frente a Apache; bare metal, VPS y contenedores; sitios y aplicaciones web; CSR/SSR/SSG; autenticación, despliegue, variables de entorno, CORS y *serverless*. |Completado |
| [04](Clase%2004/) | Git, npm y herramientas de construcción | *Conventional Commits* y seguridad; `fetch`, `rebase`, resolución de divergencias y estrategias de *merge*; dependencias y scripts de npm; comparación entre Vite y Webpack. |Completado|
| [05](Clase%2005/) | HTML5 semántico y multimedia | DOM, *Quirks Mode* y corrección del *parser*; etiquetas semánticas; formularios, tablas y recursos multimedia; proyecto final de auditoría, refactorización y validación W3C de una página HTML. |Completado |
| [06](Clase%2006/) | Accesibilidad y fundamentos de CSS | Contraste WCAG, manejo del foco y ARIA; especificidad y selectores CSS; modelo de caja y `box-sizing`; propiedades personalizadas y modo oscuro. |Completado |
| [07](Clase%2007/) | Flexbox y maquetación | Ejes, dirección, alineación, `flex-basis`, salto de línea y `align-content`; laboratorio práctico de un panel administrativo adaptable. |Completado |
| [08](Clase%2008/) | CSS aplicado: showroom adaptable | Proyecto visual de un showroom automotriz con cascada, colores, paleta, variables, layout, interacciones, recursos gráficos y diseño responsivo. |Completado |
| [09](Clase%2009/) | Diseño web responsivo | Metaetiqueta `viewport`, unidades fluidas y `clamp()`; consultas de medios; estrategia *mobile first*, cuadrículas adaptables y optimización de recursos. |Completado|
| [10](Clase%2010/) | Fundamentos de JavaScript | ECMAScript frente a APIs del entorno; ámbito e inicialización de variables; tipos y coerción; operadores; condicionales, ternarios, ciclos, `break` y `continue`. |Completado |
| [13](Clase%2013/) | Funciones y contexto en JavaScript | Declaraciones, expresiones y funciones flecha; *hoisting* y zona muerta temporal; uso de `this`, contexto léxico y `bind()`. |Completado |
| [14](Clase%2014/) | DOM, seguridad y Vite | Selección y recorrido del DOM; prevención de XSS con `textContent`; inserción eficiente con `DocumentFragment`; práctica de un proyecto base con Vite. |Completado |
| [14.2](Clase%2014%20parte%202/) | Sintaxis moderna de JavaScript | Desestructuración, parámetros `rest`, operador `spread`, encadenamiento opcional y operador de fusión nula. |Completado |
| [16](Clase%2016/) | Introducción a frameworks frontend | Programación declarativa, estado y Virtual DOM; criterios de selección entre Angular, React y Vue; herramientas complementarias y comparación Vite/Webpack. |Completado |
| [17](Clase%2017/) | Frameworks y configuración frontend | Estado, renderizado declarativo y Virtual DOM; selección y ecosistema de frameworks; Vite, manejo de recursos, punto de montaje, ambientes, secretos y respuesta ante credenciales expuestas. |Completado |
| [20](Clase%2020/) | Fundamentos de TypeScript | Tipado de variables, parámetros y retornos; funciones, clases, constructores, módulos y configuración estricta del compilador. | Completado |
| [21](Clase%2021/) | Programación orientada a objetos con TypeScript | Sistema de notificaciones con interfaz, clase abstracta, herencia, polimorfismo, propiedades de solo lectura y capa de servicio. |Completado|

## Descripción del contenido por clase

### Clase 01 - Fundamentos de Internet y la Web

Introduce la diferencia entre Internet y la World Wide Web, así como el papel de la IETF y el W3C. Las actividades también estudian Internet, intranet y extranet, la estructura de las URLs, el sistema DNS y sus tipos de registros.

### Clase 02 - Protocolos de comunicación

Analiza las diferencias entre TCP y UDP, el funcionamiento del *three-way handshake* y la evolución de HTTP/1.1 a HTTP/2 y HTTP/3. Incluye el estudio de certificados TLS y una inspección práctica del ciclo de una petición con las herramientas del navegador.

### Clase 03 - Servidores y despliegue web

Reúne ejercicios de diagnóstico de servicios Linux, configuración de Nginx, manejo de procesos y puertos, virtualización, contenedores y alternativas de alojamiento. También cubre renderizado CSR, SSR y SSG, almacenamiento de sesiones, CORS, variables de entorno, transferencia de archivos y funciones *serverless*.

### Clase 04 - Git y herramientas de desarrollo

Desarrolla buenas prácticas para escribir *Conventional Commits*, proteger archivos sensibles y trabajar con ramas remotas mediante `fetch`, `rebase` y `merge`. Además, revisa la clasificación de dependencias npm y compara Vite con Webpack según las necesidades de distintos proyectos.

### Clase 05 - HTML5 semántico

Estudia la construcción del DOM, el *Quirks Mode* y el uso correcto de elementos semánticos, formularios, tablas y contenido multimedia. El proyecto final audita una página deficiente, diseña un prompt técnico para refactorizarla y valida el resultado con W3C y DevTools.

### Clase 06 - Accesibilidad y CSS

Combina accesibilidad web con fundamentos de CSS: contraste WCAG, navegación por teclado, manejo del foco, ARIA, especificidad, selectores y modelo de caja. Finaliza con un sistema de propiedades personalizadas que admite temas claro y oscuro.

### Clase 07 - Flexbox

Explica cómo funcionan los ejes, la dirección, la alineación, `flex-basis`, `flex-wrap` y `align-content`. El laboratorio aplica estos conceptos en un panel administrativo adaptable construido con HTML, CSS y JavaScript.

### Clase 08 - Proyecto visual con CSS

Presenta un showroom automotriz para practicar cascada, modelos de color, paletas, variables CSS, composición visual e interacciones. El proyecto separa los estilos por responsabilidad y utiliza imágenes adaptadas a la interfaz.

### Clase 09 - Diseño responsivo

Trabaja la etiqueta `viewport`, unidades relativas, `clamp()`, *media queries* y diseño *mobile first*. Las actividades construyen cuadrículas adaptables y analizan problemas de rendimiento, anchos rígidos y recursos cargados innecesariamente.

### Clase 10 - Fundamentos de JavaScript

Distingue ECMAScript de las APIs proporcionadas por el navegador y estudia variables, ámbito, tipos, coerción y operadores. Los ejercicios prácticos aplican condicionales, operadores ternarios, ciclos, `break` y `continue`.

### Clase 13 - Funciones en JavaScript

Compara declaraciones, expresiones y funciones flecha mediante los conceptos de *hoisting* y zona muerta temporal. También explica el comportamiento de `this` en funciones tradicionales, funciones flecha y funciones enlazadas con `bind()`.

### Clase 14 - Manipulación del DOM y Vite

Practica selección y navegación entre elementos, creación eficiente de nodos con `DocumentFragment` y prevención de XSS al sustituir `innerHTML` por APIs seguras. Incluye un proyecto base generado con Vite.

### Clase 14.2 - Sintaxis moderna de JavaScript

Contiene ejemplos de desestructuración, parámetros `rest`, operador `spread`, encadenamiento opcional y fusión nula. Los ejercicios muestran cómo copiar y actualizar estructuras sin mutarlas y cómo manejar valores ausentes.

### Clase 16 - Introducción a frameworks frontend

Expone las diferencias entre manipulación imperativa y renderizado declarativo, el manejo de estado y el Virtual DOM. También compara Angular, React y Vue, junto con las herramientas que suelen complementar sus ecosistemas.

### Clase 17 - Arquitectura y configuración frontend

Profundiza en estado, renderizado, selección de frameworks y funcionamiento de Vite. Las actividades revisan rutas de recursos, puntos de montaje, configuraciones por ambiente, exposición de secretos en el frontend y respuesta ante credenciales publicadas por error.

### Clase 20 - Fundamentos de TypeScript

Introduce tipos explícitos e inferidos, parámetros y retornos tipados, funciones, módulos y clases. El proyecto define una clase `Persona`, la importa desde el archivo principal y compila el código fuente de `src` hacia JavaScript en `dist`.

### Clase 21 - Programación orientada a objetos con TypeScript

Implementa un sistema de notificaciones por correo y SMS. El proyecto utiliza una interfaz, una clase abstracta, herencia, polimorfismo y un servicio que procesa una colección de objetos mediante un contrato común.

## Cómo ejecutar los proyectos TypeScript

### Requisitos

- [Node.js](https://nodejs.org/) y npm instalados.
- Una terminal ubicada en la raíz de este repositorio.

Cada proyecto mantiene su código TypeScript en `src` y genera el JavaScript compilado en `dist`. Los siguientes comandos instalan exactamente las dependencias del archivo `package-lock.json`, compilan el proyecto y ejecutan su punto de entrada.

### Clase 20

```bash
cd "Clase 20/typescript"
npm ci
npx tsc
node dist/index.js
```

La ejecución muestra el saludo inicial y el resultado del método `saludar()` de la clase `Persona`.

### Clase 21

Desde la raíz del repositorio:

```bash
cd "Clase 21/Typrscript"
npm ci
npx tsc
node dist/index.js
```

La carpeta se llama `Typrscript` en el repositorio. La ejecución procesa la cola de notificaciones y muestra en la terminal los envíos simulados de correo electrónico y SMS.

## Tecnologías y herramientas utilizadas

- HTML5 semántico y APIs del navegador.
- CSS3, Flexbox, Grid, diseño responsivo y accesibilidad WCAG.
- JavaScript moderno (ES6+) y manipulación del DOM.
- TypeScript con tipado estricto y programación orientada a objetos.
- Vite, npm y Node.js como entorno de desarrollo.
- Git y GitHub para control de versiones.
- Nginx, protocolos HTTP, DNS, TCP/UDP y TLS como fundamentos de infraestructura web.

## Organización

Las evidencias se agrupan en carpetas con el formato `Clase XX`. Dentro de ellas se conservan documentos de análisis (`.md`, `.docx` y `.pdf`), ejercicios de código y proyectos prácticos. El estado completado indica que la carpeta contiene al menos una evidencia versionada




