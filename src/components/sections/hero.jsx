import "../../styles/hero.css";
export default function hero() {
  return (
    <>
      <section id="hero" class="hero">
        <div class="conteiner-info-hero">
          <h1 class="title-hero">
            Te ayudamos a hacer realidad el sueño de tu inmueble propio
          </h1>
          <p class="text-hero">
            Ya sea que estés buscando una propiedad en venta o alquiler, nuestro
            equipo de profesionales está listo para brindarte un asesoramiento
            personalizado. Contanos qué estás buscando y comenzá hoy mismo.
          </p>
          <div class="conteiner-btns-cta">
            <a
              class="btn-link-contact"
              href="https://matiasealianelli.github.io/landing-inmobiliaria/#contact">
              <button class="btn-cta-hero">Contactanos</button>
            </a>
          </div>
        </div>
        <div class="conteiner-redes-hero">
          <a target="_blank" href="https://www.whatsapp.com/">
            <i class="bi bi-whatsapp icon-wpp icon-red"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/">
            <i class="bi bi-instagram icon-ig icon-red"></i>
          </a>
          <a target="_blank" href="https://www.facebook.com/">
            <i class="bi bi-facebook icon-fb icon-red"></i>
          </a>
        </div>
      </section>
    </>
  );
}
