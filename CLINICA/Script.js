console.log("Js conectado")

const modal = document.getElementById("modalCrearUsuario");
  const contenido = document.getElementById("contenidoModal");

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