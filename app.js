const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function addTask(indicador, descripcion, completado = false) {
  return new Promise((resolve, reject) => {
    const task = {
      indicador,
      descripcion,
      completado,
    };

    tasks.push(task);
    resolve();
  });
}

function deleteTask(index) {
  return new Promise((resolve, reject) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      resolve();
    } else {
      reject("Índice de tarea inválido.");
    }
  });
}

function toggleTask(index) {
  return new Promise((resolve, reject) => {
    if (index >= 0 && index < tasks.length) {
      tasks[index].completado = !tasks[index].completado;
      resolve();
    } else {
      reject("Índice de tarea inválido.");
    }
  });
}

console.log("Bienvenido a la gestión de tareas.");
console.log("Opciones disponibles:");
console.log("1. Añadir tarea");
console.log("2. Eliminar tarea");
console.log("3. Marcar tarea como completada");

async function askQuestion(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  const option = await askQuestion("Seleccione una opción: ");

  switch (option) {
    case "1":
      const indicador = await askQuestion("Indicador de la tarea: ");
      const descripcion = await askQuestion("Descripción de la tarea: ");
      try {
        await addTask(indicador, descripcion);
        console.log("Tarea añadida exitosamente.");
      } catch (error) {
        console.log("Error al añadir la tarea:", error);
      }
      rl.close();
      break;
    case "2":
      const deleteIndex = await askQuestion("Índice de la tarea a eliminar: ");
      try {
        await deleteTask(deleteIndex);
        console.log("Tarea eliminada exitosamente.");
      } catch (error) {
        console.log("Error al eliminar la tarea:", error);
      }
      rl.close();
      break;
    case "3":
      const toggleIndex = await askQuestion(
        "Índice de la tarea a marcar como completada: "
      );
      try {
        await toggleTask(toggleIndex);
        console.log("Tarea marcada como completada exitosamente.");
      } catch (error) {
        console.log("Error al marcar como completada la tarea:", error);
      }
      rl.close();
      break;
    default:
      console.log("Opción inválida. Por favor, seleccione una opción válida.");
      rl.close();
      break;
  }
}

main()
  .then(() => {
    console.log("Programa finalizado.");
  })
  .catch((error) => {
    console.log("Error en el programa:", error);
  });
