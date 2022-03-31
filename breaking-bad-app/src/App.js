import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Quote from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:name" element={<Detail />}></Route>
        <Route path="/quotes" element={<Quotes />}></Route>
        <Route path="/quotes/:quote_id" element={<Quote />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
