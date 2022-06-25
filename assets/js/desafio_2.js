function clickStickers() {
  let input1 = document.querySelector("#input1").value;
  let input2 = document.querySelector("#input2").value;
  let input3 = document.querySelector("#input3").value;
  let total = Number(input1) + Number(input2) + Number(input3);
  let text = document.querySelector("#textSticker");
  console.log(total);
  if (total > 10) {
    text.innerHTML = "Llevas demasiados stickers";
  } else {
    text.innerHTML = "llevas " + total + " sticker";
  }
}
