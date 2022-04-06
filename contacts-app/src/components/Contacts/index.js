import React from "react";
import {useSelector} from "react-redux";
import {contactSelectors} from "../../redux/contactsSlice";
import Form from "./Form";
import List from "./List";

function Contacts() {
  const total = useSelector(contactSelectors.selectTotal);
  return (
    <div className="container">
      <h2 className="contacts">Contacts ({total})</h2>
      <List />
      <Form />
    </div>
  );
}

export default Contacts;
