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
cargarPacientes();
async function cargarPacientes() {
  try {
    const response = await fetch("./clinicaPhp/pacientes.php");
    const pacientes = await response.json();

    console.log("Pacientes", pacientes);

    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = "";

    pacientes.forEach((p) => {
      const tr = document.createElement("tr");
      tr.classList.add("hover:bg-[#f3f3f3]");

      tr.innerHTML = `
        <td class="px-2 py-2">${p.id}</td>
        <td class="px-4 py-2">${p.nombre}</td>
        <td class="px-4 py-2">${p.documento}</td>
        <td class="px-4 py-2">${p.telefono}</td>
        <td class="px-4 py-2">${p.correo}</td>
        <td class="px-4 py-2 flex justify-center gap-3">
          <span class="material-symbols-outlined text-blue-500 cursor-pointer" onclick="editarPaciente(${p.id})">
            edit
          </span>
          <span class="material-symbols-outlined text-red-500 cursor-pointer" onclick="eliminarPaciente(${p.id})">
            delete
          </span>
        </td>
    `;

      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error(error);
    alert("No se pudo conectar al servidor");
  }
}


async function editarPaciente(id) {
  const response = await fetch("./clinicaPhp/pacientes.php");
  const pacientes = await response.json();
  const paciente = pacientes.find((p) => p.id == id);

  if (!paciente) return alert("Paciente no encontrado");

  // 2️⃣ Pedir nuevos valores (puedes usar un formulario real, esto es solo ejemplo rápido)
  const nuevoNombre = prompt("Nombre:", paciente.nombre);
  const nuevoDocumento = prompt("Documento:", paciente.documento);
  const nuevoTelefono = prompt("Teléfono:", paciente.telefono);
  const nuevoCorreo = prompt("Correo:", paciente.correo);

  if (!nuevoNombre || !nuevoDocumento || !nuevoTelefono || !nuevoCorreo) return;

  const result = await fetch("./clinicaPhp/pacientes.php", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      nombre: nuevoNombre,
      documento: nuevoDocumento,
      telefono: nuevoTelefono,
      correo: nuevoCorreo,
    }),
  });
  const data = await result.json();
  console.log(data);

  if (data.success) {
    alert("Datos Actualizados");
    cargarPacientes();
  } else {
    alert("Error al actualizar el paciente");
  }
}

async function eliminarPaciente(id) {
  const confirmar = confirm(
    "¿Estás seguro de que quieres eliminar este paciente?"
  );
  if (!confirmar) {
    console.log("Cancelado por el usuario");
    return; // <- ESTA LÍNEA es la que evita que siga
  }
  try {
    const response = await fetch("./clinicaPhp/pacientes.php", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });

    const result = await response.json();
    console.log("Eliminar :", result);

    if (result.success) {
      alert("Paciente eliminado con exito");
      cargarPacientes();
    } else {
      alert("El paciente no se puedo eliminar", result.error);
    }
  } catch (error) {
    console.error(error);
    alert("Error al conectar con el servidor");
  }
}
