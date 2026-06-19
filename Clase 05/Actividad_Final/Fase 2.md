FASE 2 Ingenieria de Prompts para Refactorizacion


Para empezar, un prompt generico como "arregla este HTML" produce resultados mediocres porque no define el contexto, las restricciones ni los criterios de éxito. Por ende, se presentará el prompt tecnico construido para obtener una refactorizacion completa y correcta del codigo HTML5.

- Rol y Contexto
Actua como un Desarrollador Frontend Senior certificado en estandares W3C con
10 años de experiencia en HTML5 semantico y estructura de documentos web.
Tu especialidad es la auditoria y refactorizacion de codigo HTML deficiente
producido por herramientas de inteligencia artificial sin supervision tecnica.

- Descripcion del Problema
Recibiras un archivo HTML con los siguientes problemas tecnicos documentados:
1. Div-Soup: toda la estructura usa <div> en lugar de etiquetas semanticas.
2. Formulario sin estructura semantica: sin label, sin fieldset, sin legend.
3. Tabla de agenda incompleta: sin thead, tbody, tfoot, caption, scope.
4. Video sin atributos esenciales: sin poster, sin controls, una sola fuente.
5. iFrame inseguro: sin loading=lazy, sin sandbox, sin title.
6. Anidamiento incorrecto: div y p anidados dentro de span y a.

- Restricciones Tecnicas Explicitas (minimo 8)
Reemplaza todos los <div> estructurales por etiquetas semanticas HTML5
  correctas: header, main, nav, footer, section, article.
Agrupa los campos del formulario usando fieldset y legend, creando
  al menos dos grupos: datos del equipo y detalles del proyecto.
Procuera añadir label for="..." correctamente vinculado al id de cada campo.
Cambia el select de Carrera por un input vinculado a un datalist.
Debes anadir al video: poster con ruta de imagen, controls, y al menos dos
  source con tipos video/mp4 y video/webm.

Añadir al iframe: loading="lazy", sandbox="allow-scripts allow-same-origin"
  y un atributo title descriptivo del contenido del mapa.
Procura corregir todo anidamiento de elementos de bloque dentro de elementos de linea.
Incluye caption, thead, tbody y tfoot en la tabla de agenda.
Debes anadir el atributo scope="col" a todos los th de encabezado de columna.
Seccion D -- Criterios de Validacion
Antes de responder, verifica que:
(1) No existe ningun <div> donde corresponde una etiqueta semantica.
(2) Todos los label tienen atributos for coincidentes con el id de su campo.
(3) La tabla tiene thead, tbody, tfoot y todos los th tienen scope.
(4) El video incluye poster, controls y dos fuentes alternativas de video.
(5) El iframe tiene loading="lazy", sandbox y title.
(6) No existe ningun elemento de bloque anidado dentro de span o a.

Seccion E -- Formato del Resultado
Devuelve unicamente el bloque de codigo HTML completo, sin explicaciones
adicionales, sin comentarios en prosa, listo para guardar como archivo .html.
No incluyas bloques de markdown (```html), solo el codigo puro directamente.

En evidencia, el prompt fue probado con la IA y el resultado fue satisfactorio en el primer intento. No se requirieron iteraciones adicionales, lo cual valida que la especificidad de las restricciones tecnicas es determinante para la calidad del output generado por cualquier modelo de lenguaje.
Respuesta:

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feria de Innovación Estudiantil</title>
    <style>
        body { font-family: Georgia; margin: 0; padding: 0; background: #f5f5f0; }
        header { background: #1a472a; color: white; padding: 24px; text-align: center; }
        nav { background: #2d6a4f; padding: 10px; }
        nav a { color: white; margin: 0 12px; text-decoration: none; }
        main { padding: 24px; max-width: 1100px; margin: auto; }
        footer { background: #1a472a; color: white; padding: 16px; text-align: center; }
        section, article { background: white; border: 1px solid #ccc; padding: 18px; margin: 14px 0; border-radius: 4px; }
        table { width: 100%; border-collapse: collapse; }
        td, th { border: 1px solid #bbb; padding: 9px; }
        th { background: #2d6a4f; color: white; }
        input, select, textarea { width: 100%; padding: 9px; margin: 6px 0; box-sizing: border-box; }
        .boton { background: #2d6a4f; color: white; padding: 10px 22px; border: none; cursor: pointer; border-radius: 3px; }
        fieldset { border: 1px solid #ccc; padding: 14px; margin: 12px 0; border-radius: 4px; }
        legend { font-weight: bold; padding: 0 6px; color: #1a472a; }
        label { display: block; margin-top: 10px; font-weight: bold; }
        caption { font-weight: bold; font-size: 1.05em; margin-bottom: 8px; caption-side: top; text-align: left; color: #1a472a; }
        tfoot td { background: #eaf4ed; font-weight: bold; }
    </style>
</head>
<body>

    <header>
        <h1>Feria Nacional de Innovación Estudiantil 2025</h1>
        <p>ITCR Campus Cartago · 22, 23 y 24 de Octubre 2025</p>
        <p>Creando soluciones para los retos del mañana</p>
    </header>

    <nav aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#agenda">Agenda</a>
        <a href="#inscripcion">Inscripción</a>
        <a href="#sede">Sede</a>
    </nav>

    <main>

        <section id="inicio" aria-labelledby="titulo-acerca">
            <h2 id="titulo-acerca">Acerca de la Feria</h2>
            <p>
                La Feria Nacional de Innovación Estudiantil es el espacio anual donde estudiantes
                de todo el país presentan sus proyectos de investigación aplicada, prototipos tecnológicos
                y propuestas de emprendimiento ante un jurado de expertos nacionales e internacionales.
            </p>
            <p>
                Esta edición centra su atención en cuatro categorías: Robótica y Automatización,
                Biotecnología, Ciudades Inteligentes y Economía Circular.
            </p>
        </section>

        <section aria-labelledby="titulo-video">
            <h2 id="titulo-video">Video de Presentación</h2>
            <video width="100%" poster="video/feria_poster.jpg" controls>
                <source src="video/feria_presentacion.mp4" type="video/mp4">
                <source src="video/feria_presentacion.webm" type="video/webm">
                Su navegador no soporta la reproducción de video HTML5.
            </video>
            <p>Si el video no carga, verifique su conexión a internet.</p>
        </section>

        <section id="proyectos" aria-labelledby="titulo-proyectos">
            <h2 id="titulo-proyectos">Proyectos Finalistas</h2>

            <article aria-labelledby="proyecto-ecosensor">
                <h3 id="proyecto-ecosensor">EcoSensor Pro</h3>
                <p><strong>Equipo:</strong> Universidad de Costa Rica — Ingeniería Eléctrica</p>
                <p>
                    Sistema de monitoreo ambiental de bajo costo para comunidades rurales,
                    basado en microcontroladores ESP32 y red de sensores IoT.
                </p>
            </article>

            <article aria-labelledby="proyecto-biofiltro">
                <h3 id="proyecto-biofiltro">BioFiltro Urbano</h3>
                <p><strong>Equipo:</strong> TEC Campus San José — Ingeniería Ambiental</p>
                <p>
                    Prototipo de filtro biológico modular para la recuperación de agua gris
                    en edificios residenciales de alta densidad urbana.
                </p>
            </article>

            <article aria-labelledby="proyecto-agrobot">
                <h3 id="proyecto-agrobot">AgroBot CR</h3>
                <p><strong>Equipo:</strong> UNA Heredia — Agronomía e Informática</p>
                <p>
                    Robot autónomo de bajo costo para detección temprana de enfermedades
                    en cultivos de piña y banano usando visión computacional.
                </p>
            </article>

        </section>

        <section id="agenda" aria-labelledby="titulo-agenda">
            <h2 id="titulo-agenda">Agenda del Evento</h2>
            <table>
                <caption>Programa de actividades — Feria Nacional de Innovación Estudiantil 2025</caption>
                <thead>
                    <tr>
                        <th scope="col">Hora</th>
                        <th scope="col">Miércoles 22 Oct</th>
                        <th scope="col">Jueves 23 Oct</th>
                        <th scope="col">Viernes 24 Oct</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>7:30 - 8:30</td>
                        <td>Registro y acreditación</td>
                        <td>Apertura de sala</td>
                        <td>Apertura de sala</td>
                    </tr>
                    <tr>
                        <td>8:30 - 10:00</td>
                        <td>Ceremonia inaugural</td>
                        <td>Ronda de evaluación — Categoría A y B</td>
                        <td>Ronda final — Proyectos seleccionados</td>
                    </tr>
                    <tr>
                        <td>10:00 - 10:30</td>
                        <td>Receso</td>
                        <td>Receso</td>
                        <td>Receso</td>
                    </tr>
                    <tr>
                        <td>10:30 - 12:00</td>
                        <td>Montaje de stands y exposición libre</td>
                        <td>Ronda de evaluación — Categoría C y D</td>
                        <td>Deliberación del jurado</td>
                    </tr>
                    <tr>
                        <td>12:00 - 13:30</td>
                        <td>Almuerzo</td>
                        <td>Almuerzo</td>
                        <td>Almuerzo de gala</td>
                    </tr>
                    <tr>
                        <td>13:30 - 15:30</td>
                        <td>Talleres de pitch y presentación</td>
                        <td>Charlas de mentores e inversores</td>
                        <td>Ceremonia de premiación</td>
                    </tr>
                    <tr>
                        <td>15:30 - 17:00</td>
                        <td>Sesión de networking</td>
                        <td>Actividades culturales</td>
                        <td>Cierre oficial</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total horas</td>
                        <td>9 horas</td>
                        <td>9 horas</td>
                        <td>7 horas</td>
                    </tr>
                </tfoot>
            </table>
        </section>

        <section id="inscripcion" aria-labelledby="titulo-inscripcion">
            <h2 id="titulo-inscripcion">Formulario de Inscripción</h2>
            <form action="#" method="post">

                <fieldset>
                    <legend>Datos del Equipo</legend>

                    <label for="nombre-proyecto">Nombre del equipo o proyecto:</label>
                    <input type="text" id="nombre-proyecto" name="nombre_proyecto" placeholder="Nombre oficial del proyecto">

                    <label for="responsable">Nombre del responsable principal:</label>
                    <input type="text" id="responsable" name="responsable" placeholder="Nombre y apellidos completos">

                    <label for="correo">Correo de contacto:</label>
                    <input type="email" id="correo" name="correo" placeholder="correo@institucion.ac.cr">

                    <label for="telefono">Número de teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" placeholder="XXXX-XXXX">

                    <label for="institucion">Institución de procedencia:</label>
                    <select id="institucion" name="institucion">
                        <option value="">Seleccione su institución</option>
                        <option value="ucr">Universidad de Costa Rica (UCR)</option>
                        <option value="tec">Instituto Tecnológico de CR (TEC)</option>
                        <option value="una">Universidad Nacional (UNA)</option>
                        <option value="utn">Universidad Técnica Nacional (UTN)</option>
                        <option value="earth">Universidad EARTH</option>
                        <option value="otra-publica">Otra institución pública</option>
                        <option value="privada">Institución privada</option>
                    </select>

                    <label for="carrera">Carrera o programa académico:</label>
                    <input type="text" id="carrera" name="carrera" list="lista-carreras" placeholder="Escriba o seleccione su carrera">
                    <datalist id="lista-carreras">
                        <option value="Ingeniería en Computación">
                        <option value="Ingeniería Eléctrica">
                        <option value="Ingeniería Ambiental">
                        <option value="Biotecnología">
                        <option value="Diseño Industrial">
                        <option value="Administración de Empresas">
                        <option value="Agronomía">
                        <option value="Arquitectura">
                        <option value="Otra">
                    </datalist>

                </fieldset>

                <fieldset>
                    <legend>Detalles del Proyecto</legend>

                    <label for="categoria">Categoría de participación:</label>
                    <select id="categoria" name="categoria">
                        <option value="robotica">Robótica y Automatización</option>
                        <option value="biotecnologia">Biotecnología</option>
                        <option value="ciudades">Ciudades Inteligentes</option>
                        <option value="economia">Economía Circular</option>
                    </select>

                    <label for="descripcion">Descripción breve del proyecto:</label>
                    <textarea id="descripcion" name="descripcion" rows="4" placeholder="Describa en pocas líneas el problema que resuelve su proyecto..."></textarea>

                    <label for="requerimientos">Requerimientos especiales para el stand (electricidad, agua, internet, etc.):</label>
                    <textarea id="requerimientos" name="requerimientos" rows="2" placeholder="Indique cualquier requerimiento logístico especial..."></textarea>

                    <div>
                        <label>
                            <input type="checkbox" id="originalidad" name="originalidad">
                            Confirmo que el proyecto es original y de nuestra autoría
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" id="reglamento" name="reglamento">
                            Acepto el reglamento de la Feria Nacional de Innovación
                        </label>
                    </div>

                </fieldset>

                <br>
                <button class="boton" type="submit">Enviar Inscripción</button>

            </form>
        </section>

        <section id="sede" aria-labelledby="titulo-sede">
            <h2 id="titulo-sede">Sede del Evento</h2>
            <address>
                ITCR Campus Central Cartago, Cartago, Costa Rica<br>
                Avenida 14, entre calles 5 y 7, frente al Estadio Fello Meza
            </address>
            <br>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4567891234!2d-83.9134567!3d9.8634567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTEnNDguNCJOIDgzwrA1NCc0OC40Ilc!5e0!3m2!1ses!2scr!4v9876543210"
                width="100%"
                height="420"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                title="Mapa de ubicación del ITCR Campus Central Cartago, sede de la Feria Nacional de Innovación Estudiantil 2025">
            </iframe>
        </section>

        <section aria-labelledby="titulo-contacto">
            <h2 id="titulo-contacto">Contacto y Consultas</h2>
            <p>Para consultas sobre inscripción, logística o alianzas estratégicas, comuníquese con la comisión organizadora:</p>

            <address>
                <h3>Secretaría de la Feria</h3>
                <p>
                    <a href="mailto:feria.innovacion@itcr.ac.cr">feria.innovacion@itcr.ac.cr</a><br>
                    Teléfono: <a href="tel:+5062550900">2550-9000</a> ext. 3100
                </p>
            </address>

            <p>Síganos en redes sociales para actualizaciones en tiempo real:</p>

            <p>
                <a href="https://www.tec.ac.cr">Portal oficial del ITCR</a> — www.tec.ac.cr · Campus Cartago
            </p>

        </section>

    </main>

    <footer>
        <p>© 2025 Instituto Tecnológico de Costa Rica. Todos los derechos reservados.</p>
        <p>Feria Nacional de Innovación Estudiantil</p>
        <p>Organizado por la Vicerrectoría de Investigación y Extensión</p>
    </footer>

</body>
</html>