import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {deleteContact} from "../../redux/contactsSlice";

function Item({contact}) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Are u Sure?")) dispatch(deleteContact(id));
  };
  return (
    <li>
      <span>{contact.name}</span>
      <span>{contact.phone_number}</span>
      <div>
        <Link to={`/edit/${contact.id}`}>
          <button>Edit</button>
        </Link>
        <span className="deleteBtn" onClick={() => handleDelete(contact.id)}>
          X
        </span>
      </div>
    </li>
  );
}

export default Item;
