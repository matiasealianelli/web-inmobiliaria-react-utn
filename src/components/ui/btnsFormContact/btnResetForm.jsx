import "./btnsForm.css";

export default function BtnResetForm({onClickEvent}) {
  return (
    <>
      <button type="button" onClick={onClickEvent} id="" className="btn btn-primary btn-form">
        Resetear
      </button>
    </>
  );
}
