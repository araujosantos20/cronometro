const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const reiniciar = document.getElementById("reiniciar");

let segundos = 0;
let minutos = 0;
let cronometroId = null;

function iniciarCronometro() {
  cronometroId = setInterval(() => {
    segundos++;

    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }

    const tempoFormatado =
      String(minutos).padStart(2, 0) + ":" + String(segundos).padStart(2, 0);
    document.getElementById("tempo").textContent = tempoFormatado;
  }, 1000);
}

iniciar.addEventListener("click", () => {
  if (cronometroId !== null) return;
  iniciarCronometro();
});

pausar.addEventListener("click", () => {
  clearInterval(cronometroId);
  cronometroId = null;
});

reiniciar.addEventListener("click", () => {
  clearInterval(cronometroId);
  segundos = 0;
  minutos = 0;
  cronometroId = null;
  const tempoFormatado =
    String(minutos).padStart(2, 0) + ":" + String(segundos).padStart(2, 0);
  document.getElementById("tempo").textContent = tempoFormatado;
});
