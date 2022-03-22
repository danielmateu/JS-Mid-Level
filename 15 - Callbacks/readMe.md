Promesas -> Una promesa es un objeto que representa la terminación o el fracaso de una operacion asíncrona. Dado que la mayorñia de las personas consumen promesas ya creadas, primero veremos cómo consumirlas y luego revisaremos cómo crearlas.

Una promesa es un objeto devuelto al cual se adjuntan funciones callback, en ligar de pasar callbacks a una función.

A diferencia de las funciones callback, las promesa vienen con algunos beneficios:

    Las funciones callback nunca serán llamadas antes de la terminación de la ejecución actual del bucle de eventos de JS

    Las funciones callback añadidas con then() incluso después del exito o fracaso de la operación asíncrona, serán llamadas.

    Múltiples funciones callback pueden ser añadidas llamando a then() varias veces. Cada una de ellas es ejecutada una seguida de la otra, en el orden que fueron insertadas.

Una de las grandes ventajas de usar promises es el encadenamiento.

ENCADENAMIENTO -> UNa necesidad común es el ejecutar dos o más operaciones asíncronas seguidas, donde cada operacion posterior se inicia cuando la operación previa tiene éxito con el resultado del paso previo. Logramos esto creando una cadena de objetos promises.

La función then() devuelve una promesa nueva diferente de la original.

Básicamente, cada promesa representa la terminación de otro paso (asíncrono o no) en la cadena.




