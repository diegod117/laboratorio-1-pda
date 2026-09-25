// script.js — Interactividad del sitio del Grupo Mish (Laboratorio 3)

// ===== Función de equipo: modo claro / oscuro =====
const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("modo-claro");
  const esClaro = document.body.classList.contains("modo-claro");
  btnTema.textContent = esClaro ? "🌙 Modo oscuro" : "☀️ Modo claro";
});


// ===== Sección Johann: mostrar / ocultar detalles =====
const btnGeoDetalles = document.querySelector("#btn-geo-detalles");
const geoDetalles = document.querySelector("#geo-detalles");

btnGeoDetalles.addEventListener("click", () => {
  geoDetalles.classList.toggle("oculto");
  const estaOculto = geoDetalles.classList.contains("oculto");
  btnGeoDetalles.textContent = estaOculto ? "Ver más detalles" : "Ver menos";
});


// ===== Sección Diego: currículo en un modal =====
const cvThumbnail = document.querySelector("#cv-thumbnail");
const cvModal = document.querySelector("#cv-modal");
const cvModalClose = document.querySelector("#cv-modal-close");

cvThumbnail.addEventListener("click", () => {
  cvModal.classList.add("active");
});

cvThumbnail.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    cvModal.classList.add("active");
  }
});

cvModalClose.addEventListener("click", () => {
  cvModal.classList.remove("active");
});

cvModal.addEventListener("click", (event) => {
  if (event.target === cvModal) {
    cvModal.classList.remove("active");
  }
});


// ===== Sección Martín: nombre que se agranda con el mouse =====
const nombreMartin = document.querySelector("#martin .nombre-integrante");

nombreMartin.addEventListener("mouseover", () => {
  nombreMartin.classList.add("efecto-agrandar");
});

nombreMartin.addEventListener("mouseout", () => {
  nombreMartin.classList.remove("efecto-agrandar");
});
