import "./cardPropertie.css";

export default function CardPropertie({
  idProp,
  moneyProp,
  priceProp,
  srcImageProp,
  m2House,
  numberRooms,
  typeProp,
  conditionProp,
  addressHouse,
  city,
}) {
  return (
    <div title="Ver mas información" key={idProp} className="card-prop">
      <p className="precio-propiedad">
        {moneyProp}${priceProp}
      </p>
      <img
        className="image-card-prop"
        src={srcImageProp}
        alt="imagen del frente de una casa en venta"
      />
      <div className="conteiner-data-destacadas">
        <div className="col1-icons-img">
          <p className="m2-house"> {m2House}m² </p>
          <i className="bi bi-house icon-house"></i>
        </div>
        <div className="col2-icons-img">
          <p className="nro-rooms-house"> {numberRooms} </p>
          <img
            className="icon-rooms-house"
            src="./assets/img/rooms.svg"
            alt="icono de plano illustrado de una casa desde arriba "
          />
        </div>
      </div>
      <div className="condicion-propiedad">
        <p className="sale-rent-prop">
          {typeProp} en {conditionProp}
        </p>
      </div>
      <p className="address-house">
        <i className="bi bi-geo-alt"></i> {addressHouse}, {city}
      </p>
    </div>
  );
}
