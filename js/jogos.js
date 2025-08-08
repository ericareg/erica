
const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawPixels() {
  for (let i = 0; i < 1000; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2 + 1;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    ctx.fillStyle = `rgba(${r},${g},${b},0.4)`;
    ctx.fillRect(x, y, size, size);
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPixels();
  requestAnimationFrame(animate);
}

animate();


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