import './btnsForm.css'
import BtnResetForm from './btnResetForm';
import BtnSubmitForm from './btnSubmitForm';

export default function ConteinerBtnsForm() {
  return (
    <>
      <div className="conteiner-btns-form">
        <BtnSubmitForm />
        <BtnResetForm />
      </div>
    </>
  );
}
