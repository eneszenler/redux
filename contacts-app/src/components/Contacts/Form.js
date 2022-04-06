import React, {useState} from "react";

import {useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";

import {addContact, addContacts} from "../../redux/contactsSlice";

function Form() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return false;

    const data = addContacts(
      name.split(",").map((name) => ({id: nanoid(), name, phone_number: number}))
    );
    dispatch(data);

    setName("");
    setNumber("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="phonee">
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
          />
        </div>

        <div className="btn">
          <button type="submit">Add </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
