const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("modo-claro");
  const esClaro = document.body.classList.contains("modo-claro");
  btnTema.textContent = esClaro ? "🌙 Modo oscuro" : "☀️ Modo claro";
});

const btnGeoDetalles = document.querySelector("#btn-geo-detalles");
const geoDetalles = document.querySelector("#geo-detalles");
console.log(btnGeoDetalles, geoDetalles);

btnGeoDetalles.addEventListener("click", () => {
  geoDetalles.classList.toggle("oculto");
});
