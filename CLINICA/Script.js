console.log("Js conectado");

const modal = document.getElementById("modalCrearUsuario");
const contenido = document.getElementById("contenidoModal");
const contenidoModalEstado = document.getElementById("contenidoModalEstado");

const modalEstado = document.getElementById("modalActualizarEstado");

function abrirModal() {
  modal.classList.remove("hidden");
  setTimeout(() => {
    contenido.classList.remove("scale-95", "opacity-0");
    contenido.classList.add("scale-100", "opacity-100");
  }, 10);
}

function cerrarModal() {
  contenido.classList.remove("scale-100", "opacity-100");
  contenido.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 500); // mismo tiempo que la transición
}
function cerrarModalCita() {
  contenidoModalEstado.classList.remove("scale-100", "opacity-100");
  contenidoModalEstado.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    modalEstado.classList.add("hidden");
  }, 500); // mismo tiempo que la transición
}

function abrirModalCitas() {
  modal.classList.remove("hidden");
  setTimeout(() => {
    contenido.classList.remove("scale-95", "opacity-0");
    contenido.classList.add("scale-100", "opacity-100");
  }, 10);
}

function editarCita(id) {
  // Guardar el id en la variable global
  citaEditando = id;

  // Buscar la cita en la lista (puedes traerla de cargarCitas o hacer fetch por id)
  fetch(`./clinicaPhp/citas.php?id=${id}`)
    .then(res => res.json())
    .then(cita => {
      // Rellenar el formulario
      document.getElementById("fechaActualizar").value = cita.fecha;
      document.getElementById("horaActualizar").value = cita.hora;
     
      document.getElementById("estadoActualizar").value = cita.estado;

      // Abrir modal
      modalEstado.classList.remove("hidden");
      setTimeout(() => {
        contenidoModalEstado.classList.remove("scale-95", "opacity-0");
        contenidoModalEstado.classList.add("scale-100", "opacity-100");
      }, 10);
    })
    .catch(err => {
      console.error("Error cargando cita:", err);
      alert("No se pudo cargar la cita para editar");
    });
}
