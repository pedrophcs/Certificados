// Obtém elementos HTML
var modal = document.getElementById("modal")
var imagens = document.querySelectorAll(".certificado img")
var modalConteudo = document.getElementById("imagemAmpliada")
var fecharModal = document.querySelector(".fechar")

// Define ação para cada miniatura ao ser clicada
imagens.forEach(function (img) {
  img.addEventListener("click", function () {
    modal.style.display = "block"
    modalConteudo.src = this.src
  })
})

// Fecha o modal quando o botão de fechar é clicado
fecharModal.addEventListener("click", function () {
  modal.style.display = "none"
})

// Fecha o modal quando o usuário clica fora da imagem ampliada
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
})
