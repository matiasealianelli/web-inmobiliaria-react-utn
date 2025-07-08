import OptionSelect from "./optionSelect/optionSelect";

export default function InputSelectContact() {
  return (
    <>
      <div className="col-12">
        <label htmlFor="">Tipo de propiedad          </label>
        <select className="form-select input-form " id="select-option" required>
          <OptionSelect option={"Seleccionar una opcion"} />
          <OptionSelect option={"Departamento"} />
          <OptionSelect option={"PH"} />
          <OptionSelect option={"Local"} />
          <OptionSelect option={"Terreno"} />
          <OptionSelect option={"Casa"} />
          </select>
      </div>
    </>
  );
}
