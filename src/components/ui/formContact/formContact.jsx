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
  const [inputChecks, setInputChecks] = useState([]);

  const handleCheck = (checkFocus) => {
    setInputChecks((checksPrev) =>
      checksPrev.includes(checkFocus)
        ? checksPrev.filter((check) => check !== checkFocus)
        : [...checksPrev, checkFocus]
    );
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      inputName.trim() === "" ||
      inputEmail.trim() === "" ||
      inputPhone.trim() === "" ||
      inputTextarea.trim() === ""
    ) {
      return alert("Por favor completa todos los campos.");
    } else {
      alert("Tu mensaje fue enviado correctamente");
      console.log({
        inputName,
        inputEmail,
        inputPhone,
        inputTextarea,
        inputChecks,
      });
      setInputName("");
      setInputEmail("");
      setInputPhone("");
      setInputTextarea("");
      setInputChecks([]);
    }
  };

  const handleResetForm = () => {
    setInputName("");
    setInputEmail("");
    setInputPhone("");
    setInputTextarea("");
    setInputChecks([]);
  };

  return (
    <form onSubmit={handleSubmitForm}>
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
          {["Alquilar", "Comprar", "Vender"].map((check) => (
            <InputCheckContact
              key={check}
              setValue={() => handleCheck(check)}
              valueState={inputChecks.includes(check)}
              idCheck={check}
            />
          ))}
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
  );
}
