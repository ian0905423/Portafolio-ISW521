Fase 1
1.	 Identificación del problema
En evidencia, el archivo v1_base_feria_innovacion.html presenta una ausencia total de etiquetas semanticas HTML5. A través de un esquema general de lo obtenible, se ha identificado las siguientes etiquetas ausentes:
•	<header> -- para el encabezado principal del sitio
•	<main> -- para el contenido principal de la pagina
•	<nav> -- para el bloque de navegacion
•	<footer> -- para el pie de pagina
•	<section> -- para agrupar secciones tematicas de contenido
•	<article> -- para contenido independiente como los proyectos finalistas
•	<aside> -- para contenido complementario lateral
Desde una perspectiva critica, el uso excesivo de <div> representa un problema grave para los motores de busqueda (SEO) y para la comprension estructural del documento. Un motor de busqueda como Google utiliza la jerarquia semantica del HTML para entender que partes del contenido son más relevantes. Cuando todo esta encapsulado en <div>, el crawler no puede distinguir el encabezado del pie de pagina, ni el contenido principal del contenido decorativo.
Aunado a ello, el "Div-Soup" es el termino utilizado en la industria del desarrollo web para describir una estructura HTML en la que la mayoria o la totalidad de los elementos estan envueltos en etiquetas <div> sin proposito semantico alguno. Su impacto real en proyectos profesionales es significativo: hace el codigo más dificil de mantener, practicamente imposible de escalar, y genera una deuda tecnica considerable que obliga a refactorizaciones costosas a largo plazo.

1.	Formulario de Inscripcion
Por otro lado, el formulario de registro no utiliza etiquetas <label> vinculadas a sus campos mediante los atributos for e id. En cambio, usa simples <div> con texto para indicar el nombre del campo. Esta omision tiene un impacto directo en la usabilidad: el usuario no puede hacer clic en el texto del campo para activar el input correspondiente, y los lectores de pantalla no pueden asociar la descripcion con el campo, lo que rompe la accesibilidad (WCAG).
No obstante, el elemento semantico que deberia agrupar los datos del equipo es <fieldset>, con su respectiva etiqueta <legend> para describir el proposito de cada grupo. Se deberian crear al menos dos grupos: uno para los datos del equipo y otro para los detalles del proyecto.
A traves de un esquema general de lo obtenible, se puede ver que el campo "Carrera o programa academico" usa un <select> cuando deberia usar un <datalist>. La diferencia funcional es fundamental: el <select> restringe al usuario a elegir unicamente entre las opciones predefinidas, mientras que el <datalist> le permite tanto seleccionar una opcion de la lista como escribir libremente un valor personalizado. En un contexto academico donde existen decenas de carreras posibles, el <datalist> es tecnicamente superior porque no limita al usuario a las opciones previstas.

2.	Tabla de Agenda
En un primer momento se ha identificado que la tabla del horario del evento carece de las secciones estructurales <thead>, <tbody> y <tfoot>. Estas secciones no son meramente esteticas: <thead> permite que los navegadores repitan los encabezados de columna en cada pagina al imprimir, <tbody> agrupa el cuerpo de datos para facilitar el scroll independiente, y <tfoot> permite mostrar totales o resumenes al final. Su ausencia rompe el comportamiento estandar de tablas HTML5 en multiples contextos de renderizado.
Aunado a ello, los encabezados <th> no tienen el atributo scope. El valor correcto para los encabezados de columna es scope="col", y para los encabezados de fila seria scope="row". Su omision impacta directamente la interpretacion del documento por parte de tecnologias de asistencia: un lector de pantalla no puede determinar si un <th> describe una fila o una columna, lo que impide la navegacion correcta de la tabla.
Desde una perspectiva critica, no hay elemento <caption> presente. El <caption> sirve para proporcionar un titulo descriptivo a la tabla, esencial para describir su proposito dentro del documento y para el SEO. Su ausencia hace que la tabla sea semanticamente incompleta.


3.	Elemento Video
Se identificó que el elemento <video> carece del atributo poster. Este atributo define la imagen que se muestra antes de que el video sea reproducido. Su ausencia impacta directamente la metrica Cumulative Layout Shift (CLS) de Core Web Vitals: sin un poster, el navegador no conoce las dimensiones del video antes de que cargue, lo que produce saltos de layout visibles que penalizan el score de rendimiento.
Por otro lado, es problematico tener un solo <source> con formato video/mp4, porque no todos los navegadores soportan el mismo formato. Para garantizar compatibilidad cruzada, se deben incluir al menos dos fuentes: video/mp4 (Chrome, Safari, Edge) y video/webm (Firefox, Chrome). Asimismo, falta el atributo controls, cuya ausencia impide al usuario controlar la reproduccion, lo cual representa un problema de usabilidad inaceptable en cualquier proyecto profesional.

4.	Frame del Mapa
Se observa que el <iframe> del mapa de Google Maps carece del atributo loading="lazy", que permite diferir la carga del mapa hasta que el usuario se desplace hacia el, mejorando el rendimiento de carga inicial de la pagina. Su valor correcto es loading="lazy".
Desde una perspectiva critica, tambien falta el atributo sandbox, que controla los permisos del contenido embebido. Sin sandbox, el contenido del iframe puede ejecutar scripts con los mismos permisos que la pagina padre, lo que representa un riesgo de seguridad. El atributo deberia activar al menos las restricciones: allow-scripts, allow-same-origin y allow-popups.
No obstante lo anterior, tambien falta el atributo title en el iframe. Este atributo es necesario para identificar el proposito del contenido embebido ante tecnologias de asistencia, como lectores de pantalla, y es un requisito de accesibilidad WCAG 2.1.

5.	Anidamiento Incorrecto
Cabe mencionar que existen al menos dos instancias de anidamiento incorrecto en el codigo original:
•	Sección "Contacto y Consultas" (linea ~192): un <div> con contenido de bloque esta anidado dentro de un <span> (elemento de linea).
•	Sección "Contacto y Consultas" (linea ~202): un <div> con texto esta anidado dentro de un <a> (elemento de linea).
El navegador intenta "corregir" este error automaticamente mediante el algoritmo de parsing del HTML5, que cierra el elemento de linea antes de abrir el de bloque, alterando el DOM real respecto al codigo fuente. Esto puede romper el layout de maneras impredecibles, ya que las reglas CSS aplicadas al <a> o al <span> ya no aplican al contenido que se desplazo fuera de el.
Este tipo de error puede verificarse con las DevTools del navegador: primero se abre F12, se va a la pestaña "Elements", y se compara el arbol DOM renderizado con el codigo fuente. Si el DOM muestra que el <div> esta fuera del <span> o del <a>, es confirmacion de la autocorreccion del navegador.

