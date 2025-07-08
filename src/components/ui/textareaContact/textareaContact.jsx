import { useState } from "react";

export default function TextareaContact() {
  const [valueTextarea, setValueTextarea] = useState("");

  return (
    <>
      <label htmlFor="textarea-msj">
        Escribir un mensaje
        <textarea
          className="form-control input-form"
          name="textarea-msj"
          id="textarea-msj"
          value={valueTextarea}
          onChange={(e) => setValueTextarea(e.target.value)}></textarea>
      </label>
      {
        valueTextarea !== "" && <p> {valueTextarea} </p>
      }
    </>
  );
}
