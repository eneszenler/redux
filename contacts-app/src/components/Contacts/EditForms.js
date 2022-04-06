import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {updateContact} from "../../redux/contactsSlice";

function EditForms({contact}) {
  const [name, setName] = useState(contact.name);
  const [phone_number, setPhone_Number] = useState(contact.phone_number);

  const Navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone_number) return false;

    dispatch(
      updateContact({
        id: contact.id,
        changes: {
          name,
          phone_number,
        },
      })
    );

    Navigate(-1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <h3>Name</h3>
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="phonee">
          <label>
            <h3>Number</h3>
          </label>
          <input
            value={phone_number}
            onChange={(e) => setPhone_Number(e.target.value)}
            placeholder="Phone Number"
          />
        </div>

        <div className="btn">
          <button type="submit">Update </button>
        </div>
      </form>
    </div>
  );
}

export default EditForms;
