let isBorderOn = false;

function agregarBorde() {
  let gatito = document.querySelector("#gatito");
  let textoBordeActivado = document.querySelector("#textoborde");
  let clickIndicativo = document.querySelector("#click-indicativo");

  if (isBorderOn) {
    gatito.style.border = "0px solid red";
    textoBordeActivado.innerHTML = "Borde desactivado";
    clickIndicativo.innerHTML = "Hacer click en el michi";

    isBorderOn = false;
  } else {
    gatito.style.border = "2px solid red";
    textoBordeActivado.innerHTML = "Borde Activado";
    clickIndicativo.innerHTML = "MIAU";

    isBorderOn = true;
  }
}
