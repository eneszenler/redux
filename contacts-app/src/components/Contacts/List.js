import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {contactSelectors, deleteAllContacts} from "../../redux/contactsSlice";
import Item from "./Item";

function List() {
  const contacts = useSelector(contactSelectors.selectAll);

  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Are u Sure?")) dispatch(deleteAllContacts());
  };

  return (
    <>
      <div className="deleteAllBtn" onClick={handleDelete}>
        Delete All
      </div>
      <ul className="list">
        {contacts.map((contact) => (
          <Item key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
}

export default List;
