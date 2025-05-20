import css from "./ContactList.module.css";
import Contact from "../contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
