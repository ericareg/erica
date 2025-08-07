document.getElementById('quizForm').onsubmit = function(event) {
  event.preventDefault();
  let acertos = 0;

  const q1 = document.getElementById('q1').value.toLowerCase().trim();
  const q2 = document.getElementById('q2').value.toLowerCase().trim();
  const q3 = document.getElementById('q3').value.toLowerCase().trim();
  const q4 = document.getElementById('q4').value.toLowerCase().trim();
  const q5 = document.getElementById('q5').value.toLowerCase().trim();
  const q6 = document.getElementById('q6').value.toLowerCase().trim();
  const q7 = document.getElementById('q6').value.toLowerCase().trim();

  if (q1 === 'rosa') acertos++;
  if (q2 === 'lupe') acertos++;
  if (q3 === 'sushi') acertos++;
  if (q4 === 'luiza') acertos++;
  if (q5 === 'enrolados') acertos++;
  if (q6 === '8') acertos++;
  if (q7 === 'fortnight') acertos++;

  document.getElementById('resultado').innerText = `Você acertou ${acertos}/2 perguntas!`;
};

document.addEventListener("mousemove", function (e) {
    const brilho = document.createElement("div");
    brilho.className = "brilho";

    brilho.style.left = e.pageX + "px";
    brilho.style.top = e.pageY + "px";

    document.body.appendChild(brilho);

    setTimeout(() => {
        brilho.remove();
    }, 800); // tempo de vida da partícula
});