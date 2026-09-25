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

const btnGeoDetalles = document.querySelector("#btn-geo-detalles");
const geoDetalles = document.querySelector("#geo-detalles");

btnGeoDetalles.addEventListener("click", () => {
  geoDetalles.classList.toggle("oculto");
  const estaOculto = geoDetalles.classList.contains("oculto");
  btnGeoDetalles.textContent = estaOculto ? "Ver más detalles" : "Ver menos";
});
