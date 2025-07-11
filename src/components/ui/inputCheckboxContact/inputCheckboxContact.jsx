import './inputCheckboxContact.css'

export default function InputCheckContact({ idCheck, valueState, setValue }) {
  return (
    <>
      <label htmlFor={idCheck} className="checkbox-contact">
        <input type="checkbox" name={idCheck} id={idCheck}
          checked={valueState}
          onChange={(e) => setValue(e.target.checked)}/>
        { idCheck }
      </label>
    </>
  );
}
