import "../../styles/footer.css";
import InfoContactFooter from "../ui/componentsFooter/infoContactFooter/infoContactFooter";
import LinkPortafolio from "../ui/componentsFooter/linkPortafolio/linkPortafolio";
import NavBarFooter from "../ui/componentsFooter/navBarFooter/navBarFooter";
import RedesFooter from "../ui/componentsFooter/redesFooter/redesFooter";
import Logo from "../ui/logo/logo";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="conteiner-cols-footer">
          <div className="col-1-footer">
            <Logo />
            <RedesFooter />
          </div>
          <div className="col-2-footer">
            <NavBarFooter />
            <InfoContactFooter
              addressOffice={"Avenida 123, En algun lugar"}
              emailContact={"Inmobiliaria@example.com"}
              numberContact={"+54 (011)1234-5678"}
            />
          </div>
        </div>
        <LinkPortafolio />
      </footer>
    </>
  );
}
