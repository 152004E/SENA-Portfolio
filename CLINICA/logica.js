console.log("conexion php con js");
document
  .getElementById("formCrearPaciente")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const documento = document.getElementById("documento").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;

    const nuevoPaciente = { nombre, documento, telefono, correo };

    try {
      const response = await fetch("./clinicaPhp/pacientes.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoPaciente),
      });

      const result = await response.json();
      if (result.success) {
        alert("✅ Paciente agregado");
        document.getElementById("modalCrearUsuario").classList.add("hidden");
        e.target.reset(); // limpia el formulario
        cargarPacientes(); // refresca la lista
      } else {
        alert("Error" + result.error);
      }
    } catch (error) {
      console.error(error);
      alert("No se pudo conectar al servidor");
    }
  });

async function cargarPacientes() {
  const response = await fetch("./clinicaPhp/pacientes.php");
  const pacientes = await response.json();

  console.log("Pacientes", pacientes);

  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = "";
}
