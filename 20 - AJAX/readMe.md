Peticiones HTTP

Deficinicion: Una peticion http es una petición que hacemos a un servidor y que nos devuelve informacion en forma de data.

 Como funcionanan las peticiones http¿? 

Cliente & Servidor: El 
Cliente es toda la información a la que puede acceder el usuario. 

El servidor procesa toda la información.

Las peticiones http No guardan información. 

Cómo manejamos estas peticiones¿?

    -Fetch 
    -Ajax 
    -Axios

Para saber cómo manejar las peticiones, primero debemos saber manejar los datos estructurados JSON

    Definicion: JavaScript Objet Notation, es un formato basado en texto estandard para presentar datos estructurados en la sintaxis de objetos de JS.

    Los Json son útilies cuando se quiere transmitir datos a través de una red. Deben ser convertidos a un objeto nativo de JS cuando se requiera acceder a sus datos. Esto lo podemos hacer con el objeto global JSON, que tiene los métodos disponibles para convertir entre ellos.

    Un objeto JSON puede ser almacenado en su propio archivo, que es básicamente un archivo con la extensión .json

    JSON es solo un formato de datos, contiene propiedades, no métodos.

    Los JSON requieren usar comillas dobles para los Strings y nombres de las propiedades, las comillas simples no son válidas. Est


En algunas ocasiones, se recibirá una cadena JSON sin procesar, y será necesario convertirla en un objeto. Cuando sea necesario enviar un objeto, será necesario econvertirlo a un JSON (cadena) antes de ser enviado.Para ello tenemos los dos siguientes métodos:

    parse(): Acepta una cadena JSON como parámetro y devuelve el objeto correspondiente.

    stringify(): Acepta un objeto como parámetro y devuelve la cadena JSON equivalente.

    polyfill -> Es un fragmento de código que se utiliza para proporcionar una funcionalidad moderna en navegadores antiguos que no lo admiten de forma nativa