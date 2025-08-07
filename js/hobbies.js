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