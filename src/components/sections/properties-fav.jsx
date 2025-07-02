import "../../styles/properties-fav.css";
import CardPropertieFav from "../ui/cardPropertieFav/cardPropertie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// iperSlide from "swiper";

export default function PropertiesFav() {
  return (
    <>
      <section id="cards properties-fav" className="cards properties-fav">
        <h2 className="title-section-cards">Propiedades destacadas</h2>
        <p className="text-section-cards">
          Seleccionamos para vos las tres propiedades más consultadas de nuestra
          inmobiliaria. Ubicaciones estratégicas, calidad constructiva y
          excelente relación precio-valor. Explorá nuestros inmuebles en venta y
          alquiler con características únicas y oportunidades que no duran mucho
          en el mercado.
        </p>
        <Swiper
          className="conteiner-cards"
          spaceBetween={10}
          // slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}>
          <SwiperSlide>
            <CardPropertieFav
              pricePropFav={"1.000.000"}
              srcImagePropFav={"./assets/img/backgroundHero.jpg"}
              m2House={"300"}
              numberRooms={"5"}
              saleRentProp={"Casa en Venta"}
              addressHouse={"Avenida 123, En algun lugar"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardPropertieFav
              pricePropFav={"1.000.000"}
              srcImagePropFav={"./assets/img/backgroundHero.jpg"}
              m2House={"300"}
              numberRooms={"5"}
              saleRentProp={"Casa en Venta"}
              addressHouse={"Avenida 123, En algun lugar"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardPropertieFav
              pricePropFav={"1.000.000"}
              srcImagePropFav={"./assets/img/backgroundHero.jpg"}
              m2House={"300"}
              numberRooms={"5"}
              saleRentProp={"Casa en Venta"}
              addressHouse={"Avenida 123, En algun lugar"}
            />
          </SwiperSlide>
          ...
        </Swiper>
      </section>
    </>
  );
}

// pricePropFav, srcImagePropFav, m2House, numberRooms, saleRentProp, addressHouse
