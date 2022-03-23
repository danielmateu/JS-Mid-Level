AXIOS -> Es una bilblioteca de JS muy conveniente para realizar solicitudes HTTP en node.js

Es compatible con todos los navegadores modernos, está basado en promesas y esto nos permite escribir código asíncronico, en espera para realizar XHR.

El uso de axios tiene bastante ventajas en referencia a fetch:

    -Admite navegadores más antiguos(Fetch necesita el polyfill);
    -Tiene una forma de cancelar una solicitud
    -Tiene una forma de establecer un tiempo de espera de respuesta;
    -Tiene proteccion CSRF incorporada
    -Admite el progreso de carga 
    -Realiza automaticamente la transformación de datos JSON 
    -Funciona en nodeJs.

    Se puede instalar por npm : npm install axios

    O incluyendolo usando el CDN: 

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>



