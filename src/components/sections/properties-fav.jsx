import "../../styles/properties-fav.css";
import CardPropertie from "../ui/cardPropertie/cardPropertie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import Props from "../../../public/data/properties.json";

export default function PropertiesFav() {
  const [dataProps, setDataProps] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setDataProps(Props);
      setLoading(false);
    } catch (error) {
      setError(error);
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
      <section id="properties-fav" className="properties-fav">
        <h2 className="title-section-properties-fav">Propiedades destacadas</h2>
        <p className="text-section-properties-fav">
          Seleccionamos para vos las tres propiedades más consultadas de nuestra
          inmobiliaria. Ubicaciones estratégicas, calidad constructiva y
          excelente relación precio-valor. Explorá nuestros inmuebles en venta y
          alquiler con características únicas y oportunidades que no duran mucho
          en el mercado.
        </p>
        <Swiper
          className="conteiner-properties-fav"
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
      </section>
    </>
  );
}
