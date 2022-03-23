La API Fetch proporciona una interfaz JS para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. Tambien provee un método global que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red. 

Este tipo de funcionalidad se conseguía previamente haciendo uso de XMLHttpRequest, Fetch proporciona una alternativa mejor que puede ser empleada fácilmente por otras tecnologías como SErvice Workers. 

Fetch tambien aporta un único ligar lógico en el que definir otros conceptos relacionados con HTTP como CORS y extensiones para HTTP.

La especificación fetch difiere de ajax en dos formas principales: `

    -El objeto Promise devuelto desde fetch no será rechazado con un estado de error HTTP incluso si la respuesta es un error HTTP 404 o 500. Este se resolverá normalmente y solo será rechazado ante un fallo de red o si algo impide completar la solicitud.

    -Por defecto, fetch no enviará ni recibirá cookies del servidor, resultando en peticiones no autenticadas si el sitio permite mantener una sesión de usuario.

    Una petición básica de fetch es realmente simple de realizar:

    fetch('url').then(response => response.json()).then(data => console.log(data));

