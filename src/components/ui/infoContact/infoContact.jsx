import "./infoContact.css";

export default function InfoContact({
  addressOffice,
  emailContact,
  numberContact,
}) {
  return (
    <>
      <div className="col-2-contact">
        <p className="title-info-contact">Información de contacto</p>
        <p>
          <i className="bi bi-geo-alt-fill"></i> {addressOffice}
        </p>
        <p>
          <i className="bi bi-envelope-fill"></i> {emailContact}
        </p>
        <p>
          <i className="bi bi-telephone-fill"></i> {numberContact}
        </p>
      </div>
    </>
  );
}
