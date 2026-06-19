Ian Angulo Matamoros
Actividad #1

Pregunta 1: ¿Es correcto lo que dijo el Rector? ¿Por qué la distinción del director de TI es técnicamente importante?

A través de un análisis exhaustivo he llegado a la conclusión que el rector ha usado como sinónimos tanto internet como web, lo cual es incorrecto desde un esquema general de lo obtenible, ya que basado en mi aprendizaje, puedo definir la internet como una infraestructura de red global y www como un servicio que corre sobre internet ya sea usando http para acceder a los diferentes recursos en línea.


Pregunta 2: Si usan HTTP sobre Internet pero solo para usuarios internos de la UTN, ¿están usando Internet o la WWW, o ambos?

Ambos usan pero en capas distintas, es decir, internet como infraestructura y HTTP protocolo de la web, a lo que se llama intranet, con tecnología web sobre la infraestructura de internet pero con control de acceso, esa sería la diferencia entre ambos.


Pregunta 3: ¿Qué organismo (W3C o IETF) define los estándares más relevantes para este sistema de notas? Justifica.

Puedo concluir que IETF es el más relevante puesto que son los protocolos que posibilitan la comunicación segura del sistema, por otro lado, W3C aplica secundariamente, solo en la capa visual.

Actividad #2

Pregunta 1: Para cada necesidad (A, B, C), decide qué topología implementar: Internet, Intranet o Extranet. Justifica en 2 líneas cada una.


Info pública: Se usaría una topología de internet, puesto que el contenido es público y debe ser accesible para cualquier sitio.

Plantillas RRHH: EN este caso se empleará una topología Intranet ya que es información confidencial restringida exclusivamente al personal interno de la municipalidad

Portal de permisos: Se utiliza una topología Extranet porque solo acceden empresas constructoras externas autorizadas, no el público en general ni los empleados.

Pregunta 2: ¿Cuál de los tres sistemas requiere más inversión en seguridad? ¿Por qué?


El sistema B puesto que contiene datos sensibles como salarios, cédulas y contratos de empleados públicos, por ende, a través de un esquema general de lo obtenible lo defino como una violación de la ley de protección de datos.

Pregunta 3: ¿Podría un mismo servidor físico alojar los tres sistemas de forma segura? ¿Cómo lo lograrías conceptualmente?


Analizando la consigna propuesta,  es posible que para tres sistemas haya un mismo servidor físico, esto a través de la virtualización y segmentación de red.

Para ser más precios, se crearían 3 máquinas virtuales que se encontrarían separadas sobre un mismo servidor físico; posteriormente, cada VM operaría en su propia VLAN aislada, que estaría sin tráfico cruzado entre ellas. Cabe destacar que en este contexto, optaría por emplear un firewall con el propósito de controlar estrictamente que VM puede recibir conexiones externas.


Actividad #3

Parte A: Analiza esta URL real y describe cada componente.

Protocolo: https
subdominio: api
Dominio: github.com
Puerto: 443
Path: /repos/bryancs/isw521/issues
Query param 1: state=open
Query param 2: labels=semana
Query param 3: comentarios

Parte B: Diseña Clean URLs para estos recursos del sistema de la UTN.

1. /cursos/isw-521/2026-II/san-carlos

2. /estudiantes/2022-0001

3. /cursos/isw-521/semanas/3/materiales

Son clean Urls porque no tienen parámetros, son legibles por las personas y porque representan recursos y no acciones

Actividad #4

Dado este conjunto de URLs reales, identificá los componentes del árbol DNS y respondé las preguntas.

URL                           TLD      SLD        subdominio
https://campus.utn.ac.cr      .cr      utn        campus
https://www.netflix.com       .com     netflix    www
https://api.github.io         .io      github     api
https://app.maravilla.co.cr   .cr      maravilla  app


Pregunta 1: Para cada URL: identifica el TLD, el SLD y el subdominio (si lo hay). ¿Cuáles son ccTLDs y cuáles gTLDs?

Los ccTLDs son asignados a países o territorios; mientras que los gTLDs son genéricos y sin restricción geográfica


Pregunta 2: ¿Quién administra el TLD .cr? ¿Y el .com? ¿Necesitás ICANN para registrar un subdominio?

En base a una investigación exhaustica, .cr lo administra NIC Costa Rica, bajo delegación de la ICANN. Mientras que el .com lo administra Verisign bajo contrato con la ICANN.


Pregunta 3: Si la UTN quisiera crear un portal de egresados en egresados.utn.ac.cr, ¿necesita pagar a un registrar? ¿Por qué?

Con certeza no, puesto que la UTN ya es propietaria de utn.ac.cr, en adición a la idea egresados.utn.ac.cr simplemente agrega un registro DNS en su propio servidor o zona DNS apuntando al servidor del nevo portal. Merece destacar, que no hay que pagar a ningún registro, porque no se está registrando un dominio nuevo, solo se está configurando un subdominio dentro del dominio que ya poseen.

Pregunta 4: ¿Qué diferencia hay entre un registro A y un registro CNAME en DNS? (Investigación rápida si no lo sabés)

La diferencia es que el registro A mapea un nombre de dominio directamente a una dirección IP, mientras que el registro CNAME mapea un nombre de dominio a otro nombre de dominio.