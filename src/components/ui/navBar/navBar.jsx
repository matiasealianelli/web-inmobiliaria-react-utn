import "./navBar.css";

export default function NavBar({className}) {
  function LinkNav({ enlace, hrefLink }) {
    return (
      <a href={hrefLink} className="link-header">
        {enlace}
      </a>
    );
  }
  return (
    <nav className={className}>
      <LinkNav hrefLink="#" enlace="Propiedades destacadas" />
      <LinkNav hrefLink="#" enlace="Sobre nosotros" />
      <LinkNav hrefLink="#" enlace="Propiedades" />
      <LinkNav hrefLink="#" enlace="Contacto" />
    </nav>
  );
}