const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

let contador = 0;

botao.addEventListener("click", () => {
  contador++;

  // 1. Mostrar a div oculta
  resultado.classList.add("mostrar");

  // 2. Alternar a cor do texto
  const cores = ["#0077cc", "#d62828", "#2a9d8f", "#f4a261"];
  mensagem.style.color = cores[contador % cores.length];

  // 3. Alterar o conteúdo da mensagem
  mensagem.textContent = `Você clicou ${contador} vez${contador > 1 ? "es" : ""}!`;

  // 4. Exibir alerta a cada 3 cliques
  if (contador % 3 === 0) {
    alert("Você clicou 3 vezes!");
  }
});
