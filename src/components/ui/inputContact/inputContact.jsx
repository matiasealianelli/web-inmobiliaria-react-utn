import { useState } from "react";
import "./inputContact.css";

export default function InputContact({ valueLabel, typeInput, idInput }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="col-12">
        <label htmlFor={idInput} className="form-label conteiner-lbl-input-form">
          {valueLabel}
          <input
            type={typeInput}
            className="form-control input-form"
            name={idInput}
            id={idInput}
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {inputValue !== "" && <p> {inputValue} </p>}
        </label>
      </div>
    </>
  );
}