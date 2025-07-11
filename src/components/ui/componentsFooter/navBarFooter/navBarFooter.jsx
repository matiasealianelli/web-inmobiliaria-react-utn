import LinkNav from "../../linksNavBar/linkNavBar.jsx";
import './navBarFooter.css'
export default function NavBarFooter() {
  return (
    <>
      <div className="conteiner-links-footer">
        <LinkNav className={"link-footer"} enlaceName={"Inicio"} hrefLink={"#"} />
        <LinkNav className={"link-footer"} enlaceName={"Propiedades destacadas"} hrefLink={"#properties-fav"} />
        <LinkNav className={"link-footer"} enlaceName={"Sobre nosotros"} hrefLink={"#about"} />
        <LinkNav className={"link-footer"} enlaceName={"Propiedades"} hrefLink={"#properties"} />
        <LinkNav className={"link-footer"} enlaceName={"Contacto"} hrefLink={"#contact"} />
      </div> 
    </>
  );
}