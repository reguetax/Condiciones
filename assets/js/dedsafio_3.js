function verifyPassword() {
  let select1 = document.querySelector("#select1").value;
  let select2 = document.querySelector("#select2").value;
  let select3 = document.querySelector("#select3").value;
  let password = select1 + select2 + select3;
  let text = document.querySelector("#text");

  if (password === "911") {
    text.innerHTML = "Password 1 correcto";
  } else if (password === "714") {
    text.innerHTML = "Password 2 correcto";
  }
  else {
    text.innerHTML= "Password incorrecto"
  }
}
