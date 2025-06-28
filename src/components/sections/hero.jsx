import "../../styles/hero.css";
import BtnContactCTA from "../ui/btnContactCTA/btnContactCTA";
import RedesHero from "../ui/redesHero/redesHero";
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
            <BtnContactCTA />
          </div>
        </div>
        <RedesHero />
      </section>
    </>
  );
}
