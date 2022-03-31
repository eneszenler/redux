import React from "react";
import {useSelector} from "react-redux";

function NoteList() {
  const listItem = useSelector((state) => state.notes.items);
  console.log(listItem);

  return (
    <div className="notes-container ">
      <div className="row w-100">
        {listItem &&
          listItem.map((item, i) => (
            <div key={i} className="col-md-4 p-2">
              <div className={`note-card ${item.color}`}>
                <div>
                  <h3>{item.title}</h3>
                </div>
                <div>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default NoteList;
