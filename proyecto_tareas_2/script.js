console.log("JS cargado correctamente");

document.getElementById("btn-agregar").addEventListener("click", () => {
  const titulo = document.getElementById("nueva-tarea").value.trim();

  if (titulo !== "") {
    fetch("backend-php/crear_tareas.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo: titulo }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          listarTareas();
          document.getElementById("nueva-tarea").value = "";
        } else {
          alert(data.message);
        }
      });
  } else {
    alert("Escribe un titulo para la tarea");
  }
});

function listarTareas() {
  fetch("backend-php/listar_tareas.php")
    .then((res) => res.json())
    .then((tareas1) => {
      const contenedor = document.getElementById("lista-tareas");
      contenedor.innerHTML = "";

      tareas1.forEach((tarea1) => {
        const li = document.createElement("li");
        li.classList.add("tarea-item"); // Clase CSS para el elemento de tarea

        li.innerHTML = `
  <span class="tarea-texto">${tarea1.titulo} - ${tarea1.estado}</span>
  <div class="botones">
    <button class="btn-accion" onclick="cambiarEstado(${tarea1.id}, '${
          tarea1.estado
        }')">
      ${tarea1.estado === "pendiente" ? "Completar" : "Reabrir"}
    </button>
    <button class="btn-eliminar" onclick="eliminarTarea(${
      tarea1.id
    })">Eliminar</button>
  </div>
`;
        contenedor.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function eliminarTarea(id) {
  if (confirm("¿Seguro que quieres eliminar esta tarea?")) {
    fetch("backend-php/eliminar_tareas.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          listarTareas();
        } else {
          alert(data.mensaje);
        }
      });
  }
}

function cambiarEstado(id, estado) {
  fetch("backend-php/cambiar_estado.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id, estado: estado }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        listarTareas();
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error al cambiar el estado de la tarea");
    });
}

listarTareas();
