const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("modo-claro");
  const esClaro = document.body.classList.contains("modo-claro");
  btnTema.textContent = esClaro ? "🌙 Modo oscuro" : "☀️ Modo claro";
});

// --- Interacción de Martín ---
const nombreMartin = document.querySelector('#martin .nombre-integrante');

nombreMartin.addEventListener('mouseover', function() {
    nombreMartin.classList.add('efecto-agrandar');
});

nombreMartin.addEventListener('mouseout', function() {
    nombreMartin.classList.remove('efecto-agrandar');
});