import '../../styles/properties-fav.css'
export default function PropertiesFav() {
  return (
    <>
        <section id="cards properties-fav" className="cards properties-fav">
            <h2 className="title-section-cards">Propiedades destacadas</h2>
            <p className="text-section-cards">
                Seleccionamos para vos las tres propiedades más consultadas de nuestra inmobiliaria. Ubicaciones estratégicas, calidad constructiva y excelente relación precio-valor.
                Explorá nuestros inmuebles en venta y alquiler con características únicas y oportunidades que no duran mucho en el mercado.
            </p>
            <div className="conteiner-cards">
                <div title="Ver mas información" className="conteiner-image">
                    <p className="precio-propiedad">USD$1,000,000</p>
                    <img loading="lazy" className="image-gallery" src="./assets/img/imagen1.jpg"
                        alt="imagen del frente de una casa en venta" />
                    <div className="conteiner-data-destacadas">
                        <div className="col1-icons-img">
                            <p className="m2-house">300m2</p>
                            <i className="bi bi-house icon-house"></i>
                        </div>
                        <div className="col2-icons-img">
                            <p className="nro-rooms-house">3</p>
                            <img className="icon-rooms-house" src="img/rooms.svg" alt="" />
                        </div>
                    </div>
                    <div className="condicion-propiedad">
                        <p className="sale-rent-prop">Casa en venta</p>
                    </div>
                    <p className="address-house">
                        <i className="bi bi-geo-alt"></i>Avenida 123, En algun lugar
                    </p>
                </div>
                <div title="Ver mas información" className="conteiner-image">
                    <p className="precio-propiedad">USD$1,000,000</p>
                    <img loading="lazy" className="image-gallery" src="./assets/img/backgroundHero.jpg"
                        alt="imagen del frente de una casa en venta" />
                    <div className="conteiner-data-destacadas">
                        <div className="col1-icons-img">
                            <p className="m2-house">300m2</p>
                            <i className="bi bi-house icon-house"></i>
                        </div>
                        <div className="col2-icons-img">
                            <p className="nro-rooms-house">3</p>
                            <img className="icon-rooms-house" src="img/rooms.svg" alt="" />
                        </div>
                    </div>
                    <div className="condicion-propiedad">
                        <p className="sale-rent-prop">Casa en venta</p>
                    </div>
                    <p className="address-house">
                        <i className="bi bi-geo-alt"></i>Avenida 123, En algun lugar
                    </p>
                </div>
                <div title="Ver mas información" className="conteiner-image">
                    <p className="precio-propiedad">USD$1,000,000</p>
                    <img loading="lazy" className="image-gallery" src="./assets/img/imagen7.jpg"
                        alt="imagen del frente de una casa en venta" />
                    <div className="conteiner-data-destacadas">
                        <div className="col1-icons-img">
                            <p className="m2-house">300m2</p>
                            <i className="bi bi-house icon-house"></i>
                        </div>
                        <div className="col2-icons-img">
                            <p className="nro-rooms-house">3</p>
                            <img className="icon-rooms-house" src="img/rooms.svg" alt="" />
                        </div>
                    </div>
                    <div className="condicion-propiedad">
                        <p className="sale-rent-prop">Casa en venta</p>
                    </div>
                    <p className="address-house">
                        <i className="bi bi-geo-alt"></i>Avenida 123, En algun lugar
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}