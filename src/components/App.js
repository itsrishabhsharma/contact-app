import React from "react"
import './App.css';
import Header from "./Header";
import AddContacts from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contacts = [
    {
      id: 1,
      name: "Rishabh",
      email: "rishabh@gmail.com",
    },
    {
      id: 2,
      name: "Sharma",
      email: "sharma@gmail.com",
    }
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContacts />
      <ContactList contacts={contacts} />
    </div>
  )

}

export default App;
