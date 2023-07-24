function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "Imagens/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito Sorrindo, usando óculos escuros de sol e jaqueta preta. Imagem com fundo azul. "
    )
  } else {
    img.setAttribute("src", "Imagens/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito Sorrindo, usando óculos de grau e jaqueta preta. Imagem com fundo azul. "
    )
  }
}
