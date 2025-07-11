import "./navBar.css";
import LinkNav from "../linksNavBar/linkNavBar";

export default function NavBar({className}) {
  return (
    <nav className={className}>
      <LinkNav hrefLink={"#properties-fav"} className={"link-header"} enlaceName="Propiedades destacadas" />
      <LinkNav hrefLink={"#about"} className={"link-header"} enlaceName="Sobre nosotros" />
      <LinkNav hrefLink={"#properties"} className={"link-header"} enlaceName="Propiedades" />
      <LinkNav hrefLink={"#contact"} className={"link-header"} enlaceName="Contacto" />
    </nav>
  );
}