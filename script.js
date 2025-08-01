const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

let contador = 0;

botao.addEventListener("click", () => {
  contador++;

  // 1. Mostrar a mensagem
  resultado.classList.add("mostrar");

  // 2. Alternar a cor do texto
  const cores = ["#00aaff", "#ff006e", "#00ff88", "#f9c74f"];
  mensagem.style.color = cores[contador % cores.length];

  // 3. Mudar o conteúdo do texto
  mensagem.textContent = `Você clicou ${contador} vez${contador > 1 ? "es" : ""}!`;

  // 4. Girar o texto levemente para efeito visual
  mensagem.style.transform = `rotate(${(contador % 2 === 0 ? 5 : -5)}deg)`;

  // Alerta a cada 5 cliques
  if (contador % 5 === 0) {
    alert("Você clicou 5 vezes!");
  }
});
