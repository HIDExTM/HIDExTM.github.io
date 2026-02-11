// CORAZONES
setInterval(() => {
    const corazon = document.createElement("span");
    corazon.innerHTML = "❤";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (Math.random() * 20 + 15) + "px";
    document.querySelector(".corazones").appendChild(corazon);
    setTimeout(() => corazon.remove(), 6000);
}, 400);

// ABRIR CARTA
function abrirCarta() {
    const inicio = document.getElementById("inicio");
    inicio.style.opacity = "0";
    inicio.style.transform = "scale(1.1)";

    setTimeout(() => {
        inicio.classList.add("oculto");
        document.getElementById("mensaje").classList.remove("oculto");
    }, 700);
}

// BOTÓN NO
function moverNo() {
    const btn = document.getElementById("noBtn");
    const x = Math.random() * 150 - 75;
    const y = Math.random() * 150 - 75;
    btn.style.position = "relative";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

// ACEPTAR
function aceptar() {
    const mensaje = document.getElementById("mensaje");
    mensaje.style.opacity = "0";

    setTimeout(() => {
        mensaje.classList.add("oculto");
        document.getElementById("final").classList.remove("oculto");
    }, 700);
}
