import axios from "axios";
import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "./Detail.module.css";

function Detail() {
  const {name} = useParams();
  const navigate = useNavigate();

  const formattedName = name
    .split("-")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .pop();

  const [char, setChar] = useState(null);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}characters?name=${formattedName}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]));
  }, [formattedName]);

  return (
    <div>
      <Navbar />
      <h1>Character Details</h1>
      {char && (
        <div className="characterContainer">
          <img src={char.img} alt={char.name} />
          <div className="characterInfo">
            <h3>Name:</h3>
            <p>{char.name}</p>
            <h3>Nickname:</h3>
            <p>{char.nickname}</p>
            <h3>Occupation:</h3>
            <ul className="characterOccupation">
              {char.occupation.map((job, index) => (
                <li key={"job" + index}>{job}</li>
              ))}
            </ul>
            <h3>Portrayed by:</h3>
            <p>{char.portrayed}</p>
            <h3>Status:</h3>
            <p>{char.status}</p>
          </div>
        </div>
      )}
      <br />
      <hr />
      <div className="button-container">
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  );
}

export default Detail;
