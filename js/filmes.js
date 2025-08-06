  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const isOpen = content.style.display === 'block';
      content.style.display = isOpen ? 'none' : 'block';
      button.textContent = (isOpen ? '▶ ' : '▼ ') + button.textContent.slice(2);
    });
  });

  const carrosselContainer = document.querySelector('.carrossel-container');
  const btnAnterior = document.querySelector('.anterior');
  const btnProximo = document.querySelector('.proximo');
  let scroll = 0;

  btnAnterior.addEventListener('click', () => {
    scroll -= 320;
    if (scroll < 0) scroll = 0;
    carrosselContainer.style.transform = `translateX(-${scroll}px)`;
  });

  btnProximo.addEventListener('click', () => {
    const maxScroll = carrosselContainer.scrollWidth - carrosselContainer.clientWidth;
    scroll += 320;
    if (scroll > maxScroll) scroll = maxScroll;
    carrosselContainer.style.transform = `translateX(-${scroll}px)`;
  });
