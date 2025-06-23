import "../../styles/about.css";
export default function About() {
  return (
    <>
      <section id="about" className="about">
        <h2 className="title-section-about">Sobre nosotros</h2>
        <div className="conteiner-text-about">
          <p className="text">
            Somos una empresa inmobiliaria con más de una década de experiencia
            en el mercado de bienes raíces, dedicada a ofrecer soluciones
            confiables y personalizadas a quienes buscan comprar, vender o
            alquilar propiedades. Nuestro compromiso es acompañar a cada cliente
            de forma transparente, ofreciendo asesoramiento integral durante
            todo el proceso.{" "}
          </p>
          <p className="text">
            Trabajamos con un equipo profesional especializado en inmuebles
            residenciales, comerciales y terrenos, lo que nos permite adaptarnos
            a diferentes necesidades y presupuestos. En nuestra inmobiliaria
            priorizamos el trato humano, la honestidad y la eficiencia. Creemos
            que encontrar el lugar donde vivir o invertir no debería ser un
            proceso estresante, sino una experiencia positiva, clara y bien
            acompañada.
          </p>
        </div>
      </section>
    </>
  );
}
