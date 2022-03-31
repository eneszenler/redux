import axios from "axios";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";

function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {quote_id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}quotes/${quote_id}`)
      .then((res) => res.data)
      .then((data) => {
        setQuote(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [quote_id]);

  return (
    <div>
      <Navbar />
      <h1>Quote Details</h1>
      <br />
      {loading && <Loading />}
      {quote && (
        <div className="quoteContainer">
          <q>{quote.quote}</q>
          <strong>- {quote.author}</strong>
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

export default Quote;
