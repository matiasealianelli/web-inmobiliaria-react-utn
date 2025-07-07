import "../../styles/properties.css";
import RentProperties from "../ui/categoriesProperties/rentProperties/rentProperties";
import SaleProperties from "../ui/categoriesProperties/saleProperties/saleProperties";
export default function Properties() {
  return (
    <>
      <section id="properties" className="properties">
        <h2 className="title-properties-section">Nuestras Propiedades</h2>
        <div className="conteiner-all-props">
          <RentProperties />
          <SaleProperties />
        </div>
      </section>
    </>
  );
}