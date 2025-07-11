import "./FormContact.css";
import { InputContact } from "../inputContact/inputContact.jsx";
import InputCheckContact from "../inputCheckboxContact/inputCheckboxContact";
import InputSelectContact from "../inputSelectContact/inputSelectContact";
import TextareaContact from "../textareaContact/textareaContact";
import BtnSubmitForm from "../btnsFormContact/btnSubmitForm.jsx";
import BtnResetForm from "../btnsFormContact/btnResetForm.jsx";

import { useState } from "react";
export default function FormContact() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputTextarea, setInputTextarea] = useState("");
  const [inputCheck, setInputCheck] = useState(false);

  const handleSubmitForm = (e) => {
    if ((inputName, inputEmail, inputPhone, inputTextarea === "")) {
      alert("Por favor completa el formulario");
    } else {
      alert("Tu mensaje fue enviado correctamente");
      e.preventDefault();
      console.log(inputName);
      console.log(inputEmail);
      console.log(inputPhone);
      console.log(inputTextarea);
      console.log(inputCheck);
      console.log(inputCheck);
      console.log(inputCheck);
      setInputEmail("");
      setInputName("");
      setInputPhone("");
      setInputTextarea("");
    }
  };

  const handleResetForm = () => {
    if ((inputName, inputEmail, inputPhone, inputTextarea !== "")) {
      setInputEmail("");
      setInputName("");
      setInputPhone("");
      setInputTextarea("");
    }
  };

  return (
    <>
      <form>
        <div className="row g-3 col-1-contact">
          <InputContact
            nameLabel={"Nombre"}
            typeInput={"text"}
            setValue={setInputName}
            valueState={inputName}
          />
          <InputContact
            nameLabel={"Email"}
            typeInput={"email"}
            setValue={setInputEmail}
            valueState={inputEmail}
          />
          <InputContact
            nameLabel={"Telefono"}
            typeInput={"number"}
            setValue={setInputPhone}
            valueState={inputPhone}
          />
          <InputSelectContact />
          <div className="col-12 conteiner-checks">
            <p className="description-checks">
              Seleccionar una o mas opciones de la propiedad que le interesa
            </p>
            <InputCheckContact
              setValue={setInputCheck}
              valueState={inputCheck}
              idCheck={"Alquilar"}
            />
            <InputCheckContact
              setValue={setInputCheck}
              valueState={inputCheck}
              idCheck={"Comprar"}
            />
            <InputCheckContact
              setValue={setInputCheck}
              valueState={inputCheck}
              idCheck={"Vender"}
            />
          </div>
          <TextareaContact
            valueState={inputTextarea}
            setValue={setInputTextarea}
          />
          <div className="conteiner-btns-form">
            <BtnSubmitForm onClickEvent={handleSubmitForm} />
            <BtnResetForm onClickEvent={handleResetForm} />
          </div>
        </div>
      </form>
    </>
  );
}
