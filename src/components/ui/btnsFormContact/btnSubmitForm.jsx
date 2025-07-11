import "./btnsForm.css";

export default function BtnSubmitForm({onClickEvent}) {
  return (
    <>
      <button type="submit" id="btn-submit" onClick={onClickEvent} className="btn btn-primary btn-form">
        Enviar mensaje
      </button>
    </>
  );
}
