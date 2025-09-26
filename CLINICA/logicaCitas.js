console.log("js Citas")

document.getElementById("formCrearCitas").addEventListener("submit", async (e) => {
  e.preventDefault(); // evita recargar la página

  // Obtener valores del formulario
  const paciente = document.getElementById("paciente").value.trim();
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const odontologo = document.getElementById("odontologo").value.trim();

  if (!paciente || !fecha || !hora || !odontologo) {
    alert("Por favor llena todos los campos.");
    return;
  }

  // Construir objeto para enviar
  const nuevaCita = {
    paciente_id: paciente,  // si buscas por nombre o ID, aquí debería ser el ID real
    fecha: fecha,
    hora: hora,
    odontologo: odontologo,
    estado: "pendiente"
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
    selectPaciente.innerHTML = '<option value="">Selecciona un paciente</option>';

    pacientes.forEach(p => {
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