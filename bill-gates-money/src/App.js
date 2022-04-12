import React from "react";
import {Container} from "react-bootstrap";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Container fluid="md">
      <Header />
      <CardList />
      <Footer />
    </Container>
  );
}

export default App;
