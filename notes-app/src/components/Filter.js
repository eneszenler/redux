import {useEffect} from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {filterItems} from "../redux/notes/notesSlice";

function Filter() {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterItems({filter}));
  }, [filter]);

  return (
    <div className="col-12-style center pb-4">
      <input
        className="filter-input"
        type="text"
        placeholder="Search..."
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export default Filter;
