import "./navBar.css";
import LinkNav from "../linksNavBar/linkNavBar";

export default function NavBar({className}) {
  return (
    <nav className={className}>
      <LinkNav hrefLink="#" enlace="Propiedades destacadas" />
      <LinkNav hrefLink="#" enlace="Sobre nosotros" />
      <LinkNav hrefLink="#" enlace="Propiedades" />
      <LinkNav hrefLink="#" enlace="Contacto" />
    </nav>
  );
}