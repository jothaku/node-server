const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function addTask(indicador, descripcion, completado = false) {
  const task = {
    indicador,
    descripcion,
    completado,
  };

  tasks.push(task);
}

function deleteTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
  }
}

function toggleTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completado = !tasks[index].completado;
  }
}

console.log("Bienvenido a la gestión de tareas.");
console.log("Opciones disponibles:");
console.log("1. Añadir tarea");
console.log("2. Eliminar tarea");
console.log("3. Marcar tarea como completada");

rl.question("Seleccione una opción: ", (option) => {
  switch (option) {
    case "1":
      rl.question("Indicador de la tarea: ", (indicador) => {
        rl.question("Descripción de la tarea: ", (descripcion) => {
          addTask(indicador, descripcion);
          console.log("Tarea añadida exitosamente.");
          rl.close();
        });
      });
      break;
    case "2":
      rl.question("Índice de la tarea a eliminar: ", (index) => {
        deleteTask(index);
        console.log("Tarea eliminada exitosamente.");
        rl.close();
      });
      break;
    case "3":
      rl.question("Índice de la tarea a marcar como completada: ", (index) => {
        toggleTask(index);
        console.log("Tarea marcada como completada exitosamente.");
        rl.close();
      });
      break;
    default:
      console.log("Opción inválida. Por favor, seleccione una opción válida.");
      rl.close();
      break;
  }
});
