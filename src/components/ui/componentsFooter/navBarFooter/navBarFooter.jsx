import LinkNav from "../../linksNavBar/linkNavBar.jsx";
import './navBarFooter.css'
export default function NavBarFooter() {
  return (
    <>
      <div className="conteiner-links-footer">
        <LinkNav className={"link-footer"} enlace={"Inicio"} hrefLink={"#"} />
        <LinkNav className={"link-footer"} enlace={"Propiedades destacadas"} hrefLink={"#"} />
        <LinkNav className={"link-footer"} enlace={"Sobre nosotros"} hrefLink={"#"} />
        <LinkNav className={"link-footer"} enlace={"Propiedades"} hrefLink={"#"} />
        <LinkNav className={"link-footer"} enlace={"Contacto"} hrefLink={"#"} />
      </div> 
    </>
  );
}