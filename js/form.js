const campos = document.querySelectorAll(".campoDoFormulario");
const botaoEnviar = document.querySelector("#btnEnviar");

campos.forEach((input) => {
  botaoEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    if (input.value == "") {
      input.classList.add("campo-vazio");
      input.nextElementSibling.style.display = "block";
    } else if (input.value !== "") {
      input.classList.remove("campo-vazio");
      input.classList.add("campo-preenchido");
      input.nextElementSibling.style.display = "none";
    }
  });
});