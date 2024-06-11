(function () {
  const usuario = prompt("Qual o seu nome?");
  let saudacao = document.querySelector("#saudacao p");
  saudacao.textContent = `Seja bem vindo(a), ${usuario}`;
})();
