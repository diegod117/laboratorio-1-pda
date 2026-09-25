const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("modo-claro");
  const esClaro = document.body.classList.contains("modo-claro");
  btnTema.textContent = esClaro ? "🌙 Modo oscuro" : "☀️ Modo claro";
  // Interacción de Diego: miniatura del currículo que se amplía en un modal
const cvThumbnail = document.querySelector("#cv-thumbnail");
const cvModal = document.querySelector("#cv-modal");
const cvModalClose = document.querySelector("#cv-modal-close");
 
if (cvThumbnail && cvModal && cvModalClose) {
  cvThumbnail.addEventListener("click", () => {
    cvModal.classList.toggle("active");
  });
 
  cvModalClose.addEventListener("click", () => {
    cvModal.classList.remove("active");
  });
 
  cvModal.addEventListener("click", (event) => {
    if (event.target === cvModal) {
      cvModal.classList.remove("active");
    }
  });
}
});

const btnGeoDetalles = document.querySelector("#btn-geo-detalles");
const geoDetalles = document.querySelector("#geo-detalles");
console.log(btnGeoDetalles, geoDetalles);

btnGeoDetalles.addEventListener("click", () => {
  geoDetalles.classList.toggle("oculto");
  const estaOculto = geoDetalles.classList.contains("oculto");
  btnGeoDetalles.textContent = estaOculto ? "Ver más detalles" : "Ver menos";
});
