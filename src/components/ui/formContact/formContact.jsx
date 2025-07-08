import ConteinerBtnsForm from "../btnsFormContact/conteinerBtnsForm";
import InputCheckContact from "../inputCheckboxContact/inputCheckboxContact";
import InputContact from "../inputContact/inputContact";
import InputSelectContact from "../inputSelectContact/inputSelectContact";
import TextareaContact from "../textareaContact/textareaContact";
import "./FormContact.css";

export default function FormContact() {
  return (
    <>
      <form>
        <div className="row g-3 col-1-contact">
          <InputContact
            valueLabel={"Nombre"}
            typeInput={"text"}
            idInput={"name"}
          />
          <InputContact
            valueLabel={"Email"}
            typeInput={"email"}
            idInput={"email"}
          />
          <InputContact
            valueLabel={"Telefono"}
            typeInput={"number"}
            idInput={"phone"}
          />
          <InputSelectContact />
          <div className="col-12 conteiner-checks">
            <p className="description-checks">
              Seleccionar una o mas opciones de la propiedad que le interesa
            </p>
            <InputCheckContact idCheck={"Alquilar"} />
            <InputCheckContact idCheck={"Comprar"} />
            <InputCheckContact idCheck={"Vender"} />
          </div>
          <TextareaContact />
          <ConteinerBtnsForm />
        </div>
      </form>
    </>
  );
}