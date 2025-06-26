import "./navBar.css";

export default function navBar() {
  function LinkNav({ enlace, hrefLink }) {
    return (
      <a href={hrefLink} className="link-header">
        {enlace}
      </a>
    );
  }
  return (
    <nav>
      <LinkNav hrefLink="#" enlace="Propiedades destacadas" />
      <LinkNav hrefLink="#" enlace="Sobre nosotros" />
      <LinkNav hrefLink="#" enlace="Propiedades" />
      <LinkNav hrefLink="#" enlace="Contacto" />
    </nav>
  );
}
