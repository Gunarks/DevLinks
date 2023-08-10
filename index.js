// Function mode modify
function toggleMode() {
  const body = document.body
  body.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Subistiuir a imagem
  if (body.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem ligth
    img.setAttribute("src", "./assets/avatar.jpg")
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.jpg")
  }
}
