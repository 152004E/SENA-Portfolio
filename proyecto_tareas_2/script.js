console.log("JS cargado correctamente");

document.getElementById("btn-agregar").addEventListener("click", () => {
  const titulo = document.getElementById("nueva-tarea").value.trim();

  if (titulo !== "") {
    fetch("crear_tareas.php", {
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
  fetch("listar_tareas.php")
    .then((res) => res.json())
    .then((tareas) => {
      const contenedor = document.getElementById("lista-tareas");
      contenedor.innerHTML = "";

      tareas.forEach((tarea) => {
        const li = document.createElement("li");
        li.classList.add("tarea-item"); // Clase CSS para el elemento de tarea

        li.innerHTML = `
  <span class="tarea-texto">${tarea.titulo} - ${tarea.estado}</span>
  <div class="botones">
    <button class="btn-accion" onclick="cambiarEstado(${tarea.id}, '${tarea.estado}')">
      ${tarea.estado === "pendiente" ? "Completar" : "Reabrir"}
    </button>
    <button class="btn-eliminar" onclick="eliminarTarea(${tarea.id})">Eliminar</button>
  </div>
`;
        contenedor.appendChild(li);
      });
    });
}

function eliminarTarea(id) {
  if (confirm("¿Seguro que quieres eliminar esta tarea?")) {
    fetch("eliminar_tareas.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.exito) {
          listarTareas();
        } else {
          alert(data.mensaje);
        }
      });
  }
}

function cambiarEstado(id, estado) {
  fetch("cambiar_estado.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id, estado: estado }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        listarTareas();
      } else {
        alert(data.message);
      }
    });
}

listarTareas();
