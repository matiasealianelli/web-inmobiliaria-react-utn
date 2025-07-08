import './inputCheckboxContact.css'

export default function InputCheckContact({ idCheck }) {
  return (
    <>
      <label htmlFor={idCheck} className="checkbox-contact">
        <input type="checkbox" name={idCheck} id={idCheck} />
        { idCheck }
      </label>
    </>
  );
}
