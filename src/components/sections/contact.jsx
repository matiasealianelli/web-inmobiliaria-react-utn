import "../../styles/contact.css";
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
          <form>
            <div className="row g-3 col-1">
              <div className="col-12">
                <label for="" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control input-form"
                  id="name"
                  placeholder=""
                  value=""
                  required
                />
              </div>
              <div className="col-12">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control input-form"
                  id="email"
                  placeholder=""
                  required
                />
              </div>
              <div className="col-12">
                <label for="" className="form-label">
                  Telefono
                </label>
                <input
                  type="number"
                  className="form-control input-form"
                  id=""
                  placeholder=""
                  required
                />
              </div>
              <div className="col-12">
                <label for="" className="form-label">
                  Tipo de propiedad
                </label>
                <select className="form-select input-form" id="" required="">
                  <option value="">Seleccionar una opcion</option>
                  <option>Departamento</option>
                  <option>Local</option>
                  <option>PH</option>
                  <option>Casa</option>
                  <option>Terreno</option>
                </select>
              </div>
              <div className="col-12">
                <label for="" className="form-label">
                  Escribe un mensaje
                </label>
                <textarea
                  name=""
                  id=""
                  className="form-control input-form"
                  required></textarea>
              </div>
              <div className="col-12 conteiner-checks">
                <p className="description-checks">
                  Seleccionar una o mas opciones de la propiedad que le interesa
                </p>
                <label for="">
                  <input type="checkbox" name="" id="" /> Alquilar
                </label>
                <label for="">
                  <input type="checkbox" name="" id="" /> Comprar
                </label>
              </div>
              <div className="conteiner-btns-form">
                <button
                  type="submit"
                  id=""
                  className="btn btn-primary btn-form">
                  Enviar mensaje
                </button>
                <button
                  type="submit"
                  id=""
                  className="btn btn-primary btn-form">
                  Resetear
                </button>
              </div>
            </div>
          </form>
          <div className="col-2 info-contacto">
            <h6>Información de contacto</h6>
            <p>
              <i className="bi bi-geo-alt-fill"></i> Avenida 123, En algun lugar
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i> Inmobiliaria@example.com
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> +54 (011)1234-5678
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
