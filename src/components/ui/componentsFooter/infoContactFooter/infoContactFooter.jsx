import "./infoContactFooter.css";

export default function InfoContactFooter({
  addressOffice,
  emailContact,
  numberContact,
}) {
  return (
    <>
      <div className="conteiner-info-contact-footer">
        <p className="title-info-contact">Información de contacto</p>
        <p className="text-info-contact-footer">
          <i className="bi bi-geo-alt-fill" ></i> {addressOffice}
        </p>
        <p className="text-info-contact-footer">
          <i className="bi bi-envelope-fill"></i> {emailContact}
        </p>
        <p className="text-info-contact-footer">
          <i className="bi bi-telephone-fill"></i> {numberContact}
        </p>
      </div>
    </>
  );
}
