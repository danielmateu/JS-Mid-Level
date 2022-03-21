Control de flujo - POdemos controlar el flujo con sentencias de control o sentencias de bloque. 

Las aplicaciones JS se componen de sentencias con una sintaxis propia. Una sentencia puede estar formada por múltiples líneas. Puede haber varias sentencias en una sola línea si separamos cada una  por un punto y coma.

Sentecias de Bloque:

Sentencias de control de FLujo:

    Block:
Un bloque de sentencias se utiliza para agrupar cero o mas sentencias. El bloque se delimita por un par de llaves.

    Break:
Finaliza la sentencia actual loop, switch, o label y transfiere el control del programa a la siguiente sentencia de la sentencia finalizada.

    Continue:
Finaliza la ejecucion de las sentencias dentro de la iteracion actual del actual bucle,  y continua la ejecucion del bucle con la siguiente iteracion.

    Empty:
Una sentencia vacía se utiliza para proveer una "no sentencia", aunque la sintaxis de JavaScript esperaba una.

    if...else:
Ejecuta una sentencia si una condición especificada es true. Si la condición es false, otra sentencia puede ser ejecutada.

    switch:
Evalua una expresión, igualando el valor de la expresión a una clausula case y ejecuta las sentencias asociadas con dicho case.


Sentencias de manejo de excepciones:

La usamos para manejar los errores y lazarselo al usuario para que no ucurra el error.

Para controlar ese error, usamos estas sentencias

    try...catch:
Marca un bloque de sentencias para ser probadas (try) y especifica una respuesta, en caso de que se lance una excepción. Controlamos los errores que estan basados en comportamientos que el programador espera. No errores de sintaxis.

Hay dos tipos de catch:

    Condicional: Son los que tienen algún tipo de condición dentro.

    Incondicional: No tiene nada dentro. No tiene ninguna condicion
    

        throw: Lanza una excepción definida por el usuario.

        finnally : Pase lo que pase, el finnally se ejecuta. 