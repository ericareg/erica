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
function toggleMusica() {
    const musica = document.getElementById('musica');
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
}
function tocarSom() {
    document.getElementById('somClique').play();
}

document.addEventListener("click", function (e) {
    for (let i = 0; i < 8; i++) {
        const bolha = document.createElement("div");
        bolha.className = "bolha";
        bolha.style.left = e.pageX + "px";
        bolha.style.top = e.pageY + "px";
        bolha.style.setProperty('--i', i);
        document.body.appendChild(bolha);
        setTimeout(() => bolha.remove(), 600);
    }
});