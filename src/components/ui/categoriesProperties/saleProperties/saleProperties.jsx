import "./saleProperties.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardPropertie from "../../cardPropertie/cardPropertie";
import { useEffect, useState } from "react";
import Props from "../../../../../public/data/properties.json";

export default function SaleProperties() {
  const [dataProps, setDataProps] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setDataProps(Props);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Cargando propiedades...</div>;
  }

  if (error) {
    return <div>Error al cargar las propiedades: {error.message}</div>;
  }

  if (!dataProps) {
    return <div>No hay datos de propiedades disponibles.</div>;
  }
  return (
    <>
      <div className="conteiner-condition">
        <h3>Propiedades en Venta </h3>
        <Swiper
          className="conteiner-rent"
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={true}
          delay={4000}
          speed={4000}
          breakpoints={{
            360: { slidesPerView: 1, spaceBetween: 10 },
            500: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
          }}>
          {dataProps.properties?.venta?.map((propertie) => (
            <SwiperSlide>
              <CardPropertie
                idProp={propertie.id}
                moneyProp={propertie.money}
                srcImageProp={propertie.source}
                priceProp={propertie.price}
                m2House={propertie.m2}
                numberRooms={propertie.rooms}
                typeProp={propertie.type}
                conditionProp={propertie.condition}
                addressHouse={propertie.address}
                city={propertie.city}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
