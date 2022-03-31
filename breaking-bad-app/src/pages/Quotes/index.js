import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import {fetchAllQuotes} from "../../redux/quotesSlice";

function Quotes() {
  const quotes = useSelector((state) => state.quotes.items);
  const status = useSelector((state) => state.quotes.status);
  const error = useSelector((state) => state.quotes.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>Quotes ({quotes.length})</h1>
      {status === "loading" && <Loading />}
      <main>
        {status === "succeeded" &&
          quotes.map((item) => (
            <div className="singleQuote" key={item.quote_id}>
              <Link to={`/quotes/${item.quote_id}`}>
                <q>{item.quote}</q>
                <span>
                  <strong> - {item.author}</strong>
                </span>
              </Link>
            </div>
          ))}
      </main>
    </div>
  );
}

export default Quotes;
