¿Qué sucedio al usar async y await?

Cuando se encuentra la palabra clave await antes de una expresión de promesa, la ejecución del código se detiene en ese punto y se espera a que la promesa se resuelva o se rechace.

¿Qué sucedio al usar async y await?

Cuando se encuentra la palabra clave await antes de una expresión de promesa, el programa se pausa en ese punto y espera de forma sincrónica a que la promesa se resuelva o se rechace.

¿Qué diferencias encontraste entre async, await y el método then()?

async/await permite escribir código asíncrono de manera más sincrónica y legible, utilizando la palabra clave await para esperar a que se resuelvan las promesas.
El método then() se utiliza para manejar el resultado de una promesa, encadenando múltiples llamadas then() para realizar acciones adicionales.
La principal diferencia es que async/await simplifica la estructura del código y permite un manejo de errores más intuitivo utilizando try...catch, mientras que el método then() requiere más encadenamiento y el uso del método catch() para manejar errores.
