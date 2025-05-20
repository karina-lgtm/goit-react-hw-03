import css from "./Contact.module.css";
import { BsTelephoneFill, BsPersonFill } from "react-icons/bs";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.container}>
      <div className={css.leftSide}>
        <div className={css.blockContact}>
          <BsTelephoneFill />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.blockContact}>
          <BsPersonFill />
          <p className={css.text}>{number}</p>
        </div>
      </div>

      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
