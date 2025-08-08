
/* ===========================
   Partículas em canvas (fundo)
   =========================== */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  canvas.width  = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.reset(true);
  }
  reset(init = false) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.r = Math.random() * 2.2 + 0.8;          // raio
    this.vx = (Math.random() - 0.5) * 0.25;      // velocidade X
    this.vy = (Math.random() - 0.5) * 0.25;      // velocidade Y
    this.alpha = Math.random() * 0.6 + 0.3;      // opacidade
    if (!init && Math.random() < 0.5) this.y = -10; // reentradas pela parte superior
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;

    const w = window.innerWidth;
    const h = window.innerHeight;

    if (this.x < -20 || this.x > w + 20 || this.y < -20 || this.y > h + 20) {
      this.reset();
    }
  }
  draw(ctx) {
    ctx.save();
    ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
    ctx.shadowColor = '#fffacd';   // amarelado suave
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

const PARTICLE_COUNT = 60;
const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(ctx); });
  requestAnimationFrame(animate);
}
animate();

/* ======================================
   Carrosséis (Família, Amigos, Namorado)
   ====================================== */
document.querySelectorAll('.carrossel').forEach(carrossel => {
  const container = carrossel.querySelector('.carrossel-container');
  const btnPrev = carrossel.querySelector('.anterior');
  const btnNext = carrossel.querySelector('.proximo');

  // Largura aproximada de um item (img + gap)
  function itemStep() {
    const img = container.querySelector('img');
    if (!img) return 320 + 16;
    const style = getComputedStyle(img);
    const w = img.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(container).gap || 16);
    const ml = parseFloat(style.marginLeft || 0);
    const mr = parseFloat(style.marginRight || 0);
    return Math.round(w + gap + ml + mr);
  }

  let offset = 0;

  btnNext.addEventListener('click', () => {
    offset += itemStep();
    container.style.transform = `translateX(-${offset}px)`;
    // trava simples para não “vazar” demais
    const maxOffset = Math.max(0, container.scrollWidth - carrossel.clientWidth + 60);
    if (offset > maxOffset) offset = maxOffset;
    container.style.transform = `translateX(-${offset}px)`;
  });

  btnPrev.addEventListener('click', () => {
    offset -= itemStep();
    if (offset < 0) offset = 0;
    container.style.transform = `translateX(-${offset}px)`;
  });

  // Ajuste do offset ao redimensionar
  window.addEventListener('resize', () => {
    const maxOffset = Math.max(0, container.scrollWidth - carrossel.clientWidth + 60);
    if (offset > maxOffset) {
      offset = Math.max(0, maxOffset);
      container.style.transform = `translateX(-${offset}px)`;
    }
  });
});
