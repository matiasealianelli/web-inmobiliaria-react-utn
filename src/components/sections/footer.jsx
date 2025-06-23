import '../../styles/footer.css'
export default function Footer() {
  return (
    <>
    <footer className="footer">
        <div className="conteiner-cols-footer">
            <div className="col-1-footer">
                <div className="conteiner-logo-header conteiner-logo-footer">
                    <a href="#" className="conteiner-logo-header conteiner-logo-footer">
                        <img src="./assets/img/logoRealEstateFooter.svg" alt="" />
                        <h3 className="logo">Inmobiliaria</h3>
                    </a>
                </div>
                <div className="conteiner-redes-footer">
                    <a target="_blank" href="#"><i className="bi bi-whatsapp icon-wpp icon-red icon-red-footer"></i></a>
                    <a target="_blank" href="#"><i className="bi bi-instagram icon-ig icon-red icon-red-footer"></i></a>
                    <a target="_blank" href="#"><i className="bi bi-facebook icon-fb icon-red icon-red-footer"></i></a>
                </div>
            </div>
            <div className="col-2-footer">
                <ul className="conteiner-links-footer">
                    <li className="link-footer"><a className="link-footer" href="#">Inicio</a></li>
                    <li className="link-footer"><a className="link-footer" href="#">Propiedades destacadas</a></li>
                    <li className="link-footer"><a className="link-footer" href="#">Sobre nosotros</a></li>
                    <li className="link-footer"><a className="link-footer" href="#">Propiedades</a></li>
                    <li className="link-footer"><a className="link-footer" href="#">Contacto</a></li>
                </ul>    
                <div className="col-2 info-contacto-footer ">
                    <h6>Información de contacto</h6>
                    <p><i className="bi bi-geo-alt-fill"></i> Avenida 123, En algun lugar</p>
                    <p><i className="bi bi-envelope-fill"></i> Inmobiliaria@example.com</p>
                    <p><i className="bi bi-telephone-fill"></i> +54 (011)1234-5678</p>
                </div>
            </div>
        </div>  
        <div className="col-3-footer">
            <p><i className="bi bi-code-slash"></i> Desarrollado por <a href="https://matiasealianelli.github.io/portafolio-web/" target="_blank" class="link-portafolio-ma">Matias Alianelli</a></p>
        </div>
    </footer>
    </>
  )
}