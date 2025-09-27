console.log("js Citas");
let citaEditando = null;

document
  .getElementById("formCrearCitas")
  .addEventListener("submit", async (e) => {
    e.preventDefault(); // evita recargar la página

    // Obtener valores del formulario
    const paciente = document.getElementById("paciente").value.trim();
    const fecha = document.getElementById("fechaCrear").value;
    const hora = document.getElementById("horaCrear").value;
    const odontologo = document.getElementById("odontologoCrear").value.trim();

    if (!paciente || !fecha || !hora || !odontologo) {
      alert("Por favor llena todos los campos.");
      return;
    }

    // Construir objeto para enviar
    const nuevaCita = {
      paciente_id: paciente, // si buscas por nombre o ID, aquí debería ser el ID real
      fecha: fecha,
      hora: hora,
      odontologo: odontologo,
      estado: "pendiente",
    };

    try {
      const response = await fetch("./clinicaPhp/citas.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaCita),
      });

      const data = await response.json();
      console.log("Respuesta:", data);

      if (data.success) {
        alert("Cita creada con éxito ✅");
        document.getElementById("modalCrearUsuario").classList.add("hidden");
        e.target.reset(); // limpia el formulario
      } else {
        alert("Error al crear la cita: " + data.error);
      }
    } catch (error) {
      console.error("Error al crear la cita:", error);
      alert("No se pudo conectar al servidor");
    }
  });

async function cargarPacientesSelect() {
  try {
    const response = await fetch("./clinicaPhp/pacientes.php");
    const pacientes = await response.json();

    const selectPaciente = document.getElementById("paciente");
    selectPaciente.innerHTML =
      '<option value="">Selecciona un paciente</option>';

    pacientes.forEach((p) => {
      const option = document.createElement("option");
      option.value = p.id;
      option.textContent = p.nombre;
      selectPaciente.appendChild(option);
    });
  } catch (error) {
    console.error("Error cargando pacientes:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarPacientesSelect);

async function cargarCitas() {
  try {
    const response = await fetch("./clinicaPhp/citas.php");
    const citas = await response.json();

    console.log("Citas:", citas);

    const contenedor = document.getElementById("contenedorCitas");
    contenedor.innerHTML = ""; // Limpia antes de volver a pintar

    citas.forEach((c) => {
      const ficha = document.createElement("div");
      ficha.className =
        "bg-[#f3f3f3] w-[220px] h-[177px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 hover:scale-[1.05] transition-all duration-[1s] hover:shadow-none";

      ficha.innerHTML = `
      
  <div class="bg-yellow-200 h-[80px] flex items-center justify-between px-4">
  
    <span class="material-symbols-outlined text-[40px] text-gray-700">person</span>
    <p class="uppercase">${c.estado}</p>
    <span
      class="material-symbols-outlined text-blue-500 cursor-pointer hover:text-black transition-all duration-300"
      onclick="editarCita(${c.id})"
    >
      edit
    </span>
    <span 
  onclick="eliminarCita(${c.id})" 
  class="material-symbols-outlined text-red-500 cursor-pointer hover:text-black transition-all duration-300">
    delete
</span>
  </div>
  <div class="bg-white h-[90px] px-4 py-2 flex flex-col justify-center rounded-b-2xl">
    <p class="font-semibold text-gray-700">${c.paciente}</p>
    <p class="text-sm text-gray-600">${c.fecha} - ${c.hora}</p>
    <p class="text-sm text-gray-500">${c.odontologo}</p>
  </div>
`;

      contenedor.appendChild(ficha);
    });
  } catch (error) {
    console.error("Error cargando citas:", error);
    alert("No se pudo cargar la lista de citas");
  }
}

// Llamar automáticamente cuando cargue la página
document.addEventListener("DOMContentLoaded", cargarCitas);

// ACTUALIZAR
document
  .getElementById("formActualizarCita")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!citaEditando) {
      alert("No hay cita seleccionada");
      return;
    }

    const citaActualizada = {
      id: citaEditando,
      fecha: document.getElementById("fechaActualizar").value,
      hora: document.getElementById("horaActualizar").value,
      odontologo: document.getElementById("odontologoActualizar").value,
      estado: document.getElementById("estadoActualizar").value,
    };

    let response = await fetch("./clinicaPhp/citas.php", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(citaActualizada),
    });

    let result = await response.json();
    if (result.success) {
      alert("✅ Cita actualizada correctamente");
      cerrarModalCita();
      cargarCitas();
    } else {
      alert("❌ Error: " + result.error);
    }
    citaEditando = null;
  });

function eliminarCita(id) {
  if (!confirm("¿Seguro que deseas eliminar esta cita?")) {
    return;
  }

  fetch("./clinicaphp/citas.php", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        alert("✅ " + data.message);
        // Aquí recargas la lista de citas o refrescas la tabla
        cargarCitas();
      } else {
        alert("❌ Error: " + data.error);
      }
    })
    .catch((err) => console.error("Error en fetch:", err));
}
