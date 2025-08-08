document.getElementById('quizForm').onsubmit = function(event) {
  event.preventDefault();
  let acertos = 0;

  // Respostas abertas
  const q1 = document.getElementById('q1').value.toLowerCase().trim();
  const q2 = document.getElementById('q2').value.toLowerCase().trim();
  const q3 = document.getElementById('q3').value.toLowerCase().trim();
  const q4 = document.getElementById('q4').value.toLowerCase().trim();

  // Checkbox (pergunta 5)
  const comidasSelecionadas = Array.from(document.querySelectorAll('input[name="comida"]:checked'))
                                   .map(cb => cb.value.toLowerCase());

  // Select (pergunta 6)
  const q6 = document.getElementById('q6').value.trim();

  // Última pergunta (texto)
  const q7 = document.getElementById('q7').value.toLowerCase().trim();

  // --- Verificação ---
  if (q1 === 'rosa') acertos++;
  if (q2 === 'lupe') acertos++;
  if (q3 === 'sushi') acertos++;
  if (q4 === 'luiza') acertos++;

  // Pergunta 5: comidas favoritas corretas
  const comidasCorretas = ['sushi', 'galeto']; 
  const todasCorretasMarcadas = comidasCorretas.every(c => comidasSelecionadas.includes(c));
  const nenhumaErradaMarcada = comidasSelecionadas.every(c => comidasCorretas.includes(c));
  if (todasCorretasMarcadas && nenhumaErradaMarcada) acertos++;

  // Pergunta 6: período correto
  if (q6 === '8') acertos++;

  // Pergunta 7
  if (q7 === 'hollow knight') acertos++;

  // Resultado
  document.getElementById('resultado').innerText = `Você acertou ${acertos}/7 perguntas!`;
  document.getElementById('quizForm').style.display = 'none';
  document.getElementById('resultado').innerHTML = `
    <h2>🎉 Parabéns!</h2>
    <p>Você acertou <strong>${acertos}</strong> perguntas!</p>
    <img src="img/parabens.jpg" alt="Parabéns" style="max-width:200px; margin-top:15px; border-radius:10px; box-shadow:0 0 15px rgba(0,0,0,0.3);">
    </br>
    </br>
    </br>


    <a href="index.html">Voltar ao início</a>
  `;
};


// Efeito brilho no mouse
document.addEventListener("mousemove", function (e) {
  const brilho = document.createElement("div");
  brilho.className = "brilho";
  brilho.style.left = e.pageX + "px";
  brilho.style.top = e.pageY + "px";
  document.body.appendChild(brilho);

  setTimeout(() => brilho.remove(), 800);
});

