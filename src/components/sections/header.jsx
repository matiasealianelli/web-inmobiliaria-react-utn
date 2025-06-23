import '../../styles/header.css'
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="conteiner-logo-header">
            <a href="#" className="conteiner-logo-header">
                <img src="./assets/img/logoRealEstateFooter.svg" alt="" />
                <h3 className="logo">Inmobiliaria</h3>
            </a>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list icon-menu"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg icon-close"
            viewBox="0 0 16 16">
            <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
        <nav>
            <a href="#" className="link-header">Propiedades destacadas</a>
            <a href="#" className="link-header">Sobre nosotros</a>            
            <a href="#" className="link-header">Propiedades</a>
            <a href="#" className="link-header">Contacto</a>
        </nav>
      </header>
    </>
  )
}