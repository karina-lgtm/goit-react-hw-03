import "modern-normalize";
import "./App.css";
import { useEffect, useState } from "react";

import ContactForm from "./contactform/ContactForm";
import ContactList from "./contactlist/ContactList";
import SearchBox from "./searchbox/SearchBox";

import initialContacts from "../contact.json";
import { nanoid } from "nanoid";

export default function App() {
  const [contact, setContact] = useState(() => {
    const savedContacts = window.localStorage.getItem("contact-list");
    if (savedContacts) {
      try {
        const parseContacts = JSON.parse(savedContacts);
        return Array.isArray(parseContacts) && parseContacts.length > 0
          ? parseContacts
          : initialContacts;
      } catch (error) {
        console.log(" error", error);
        return initialContacts;
      }
    }
    return initialContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contact-list", JSON.stringify(contact));
  }, [contact]);

  const addContact = (newTask) => {
    setContact((prevTasks) => {
      return [...prevTasks, { ...newTask, id: nanoid() }];
    });
  };
  const visibleContact = contact.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = (taskId) => {
    setContact((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  return (
    <div className="main">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContact} onDelete={deleteContact} />
    </div>
  );
}
