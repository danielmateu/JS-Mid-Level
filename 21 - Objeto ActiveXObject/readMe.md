AJAX

Javascript Asíncrono + XML (AJAX), no es una tecnología por si mísma, es un termino que describe un nuevo modo de utilizar conjuntamente varias tecnologías existentes: HTML, CSS, JS, DOM, XML, XSLT y el objeto XMLHttpRequest. Cuando estas tecnologías se combinan en un modelo AJAX, es posible lograr apps web capaces de actualizarse continuamente sin tener que volver a cargar la pagina completa. Creando apps más rápidas y con mejor respuesta a las acciones del usuario. Est

AJAX es un termino para describir dos capacidades de los navegadores:

    -La posibilidad de hacer peticiones al servidor sin tener que volver a cargar la pagina 

    -La posibilidad de trabajar y analizar documentos XML.

¿Cómo realizar una peticion HTTP al servidor?

Será necesario crear una instancia de una clase que provea esta funcionalidad. Esta clase fue introducida en IE. Después Mozilla, Safari y otros navegadores lo siguieron, implementando una clase XMLHttpRequest, que soportaba los métodos y las propiedades del objeto ActiveX original.

Para crear una instancia de la clase requeridad que funcione en todos los navegadores, es necesario poner: 

if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    http_request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
    http_request = new ActiveXObject("Microsoft.XMLHTTP");
}

Algunas versiones de los navegadores MOZILLA no funcionan correctamente si la respuesta del servidor no tiene cabecera mime de tipo XML, en ese caso es posible usar un método extra, que sobreescriba la cabecera enviada por el servidor:

http_request = new XMLHttpRequest();
http_request.overrideMimeType('text/xml');

