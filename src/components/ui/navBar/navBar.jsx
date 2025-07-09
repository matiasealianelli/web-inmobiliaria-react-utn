import "./navBar.css";
import LinkNav from "../linksNavBar/linkNavBar";

export default function NavBar({className}) {
  return (
    <nav className={className}>
      <LinkNav hrefLink="#" className={"link-header"} enlace="Propiedades destacadas" />
      <LinkNav hrefLink="#" className={"link-header"} enlace="Sobre nosotros" />
      <LinkNav hrefLink="#" className={"link-header"} enlace="Propiedades" />
      <LinkNav hrefLink="#" className={"link-header"} enlace="Contacto" />
    </nav>
  );
}