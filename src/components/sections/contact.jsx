import "../../styles/contact.css";
import InfoContact from "../ui/infoContact/infoContact";
export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <h2 className="">Contactanos</h2>
        <p className="text-section-contact">
          ¿Tenés consultas o querés coordinar una visita? Completá el formulario
          y nuestro equipo se pondrá en contacto a la brevedad. También podés
          escribirnos por WhatsApp o visitarnos en nuestra oficina. ¡Estamos
          para ayudarte!
        </p>
        <div className="conteiner-cols-contact">
          < InfoContact
            addressOffice={"Avenida 123, En algun lugar"}
            emailContact={"Inmobiliaria@example.com"}
            numberContact={"+54 (011)1234-5678"}
          />
        </div>
      </section>
    </>
  );
}