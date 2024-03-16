function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let mensajeimg = document.getElementById("mensajeimg");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "sólo un genio podrá descifrar tu mensaje";
    mensajeimg.src = "./img/encriptado.png";
  } else {
    mensajeimg.src = "./img/unpato.png";
    tituloMensaje.textContent = "No hay mensajes";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("¡Alto rufián!", "No ingresaste ningún texto", "error");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let mensajeimg = document.getElementById("mensajeimg");

  let textoCifrado = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Tu texto fue desencriptado";
      parrafo.textContent = "¡descubriste el mensaje secreto!";
      mensajeimg.src = "./img/desencriptado.png";
    } else {
      mensajeimg.src = "./img/unpato.png";
      tituloMensaje.textContent = "No hay mensajes";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("¡Alto rufián!", "No ingresaste ningún texto", "error");
    }
}
