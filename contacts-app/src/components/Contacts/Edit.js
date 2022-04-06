import React from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {contactSelectors} from "../../redux/contactsSlice";
import EditForms from "./EditForms";

function Edit() {
  const {id} = useParams();

  const contact = useSelector((state) => contactSelectors.selectById(state, id));

  console.log(contact);
  return (
    <div className="container">
      <h2 className="contacts">Edit</h2>
      <EditForms contact={contact} />
    </div>
  );
}

export default Edit;
