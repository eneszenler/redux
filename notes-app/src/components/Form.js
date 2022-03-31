import {useState} from "react";
import {useDispatch} from "react-redux";
import {addNote} from "../redux/notes/notesSlice";

function Form() {
  const [color, setColor] = useState("green");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      description &&
        dispatch(addNote({title: title, description: description, color: color}));
    }
  };

  return (
    <div className="col-12-style center">
      <form onSubmit={handleSubmit}>
        <div className="form-container ">
          <div className="w-100">
            <input
              className="title-input"
              placeholder="Enter your title here..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="80"
              rows="10"
              placeholder="Enter your note here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="d-flex-style space-between w-100 ">
            <div className="d-flex-style form-footer-left">
              <div className="wrapper">
                <input
                  className="state"
                  type="radio"
                  name="app"
                  id="a"
                  defaultValue="a"
                  onChange={() => setColor("pink")}
                />
                <label className="label" htmlFor="a">
                  <div className="indicator pink-btn" />
                </label>
              </div>
              <div className="wrapper">
                <input
                  className="state"
                  type="radio"
                  name="app"
                  id="b"
                  defaultValue="b"
                  onChange={() => setColor("blue")}
                />
                <label className="label" htmlFor="b">
                  <div className="indicator blue-btn" />
                </label>
              </div>
              <div className="wrapper">
                <input
                  className="state"
                  type="radio"
                  name="app"
                  id="c"
                  defaultValue="c"
                  onChange={() => setColor("green")}
                />
                <label className="label" htmlFor="c">
                  <div className="indicator green-btn" />
                </label>
              </div>
              <div className="wrapper">
                <input
                  className="state"
                  type="radio"
                  name="app"
                  id="d"
                  defaultValue="d"
                  onChange={() => setColor("yellow")}
                />
                <label className="label" htmlFor="d">
                  <div className="indicator yellow-btn" />
                </label>
              </div>
            </div>
            <div className="form-footer-right">
              <button type="submit" className="submit-btn">
                ADD
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
