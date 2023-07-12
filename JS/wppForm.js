const wppNombre = document.querySelector("#f4bFormNombre");
const wppMensaje = document.querySelector("#f4bFormMensaje");
const wppSubmit = document.getElementById("f4bFormWpp");

// En espera de click en enviar

wppSubmit.addEventListener("click", verificaForm);

// Verifica: campos completos, sin espacios, cambia clase y nombre del placeholder

function verificaForm() {
  if (wppNombre.value.trim().length == 0) {
    console.warn("Completar Nombre");
    wppNombre.placeholder = "Verificar Campo";
    wppNombre.classList = "verificarForm";
  } else {
    if (wppMensaje.value.trim().length == 0) {
      console.warn("Completar Mensaje");
      wppMensaje.placeholder = "Verificar Campo";
      wppMensaje.classList = "verificarForm";
    } else {
      wppNombre.classList = "";
      generaHREF();
    }
  }
}

// Genera href de la <a> del enviar

function generaHREF() {
  wppSubmit.href = `https://api.whatsapp.com/send?phone=+5491166549841&text=Hola%20mi%20nombre%20es%20${
    wppNombre.value
  },%20Vi%20tu%20contacto%20en%20fletesymudanzasmalaga.com.ar,%20${wppMensaje.value.replace(
    / /g,
    "%20"
  )}`;
}
