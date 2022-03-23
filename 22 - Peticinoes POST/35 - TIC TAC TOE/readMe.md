Peticiones POST -> Las peticiones no se envian por la url, sino por el método POST. 

Los datos no son visibles en la URL 

Los datos no pueden permanecer en el historial del navegador 

Una URL no puede ser guardada conteniendo los datos enviados

No existen restricciones en la longitud de los datos enviados 

Se considera preferible para el envío de datos sensibles(contraseñas, número de tarjeta... ) Sin que signifique que haya seguridad absoluta.

Codificación en formularios. Se usa multipart para envío de datos binarios. application/x-www-form-urlencoded ó multipart/form-data  

No tiene Restricciones de tipos de datos, tanto texto como datos binarios. 

Se considera preferible para disparar acciones.

No hay riesgo de cacheado de datos recuperados en los navegadores. Debemos

Menos intentos de ataques y haqueo que en el método get.

