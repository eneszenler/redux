import React from "react";
import {Row} from "react-bootstrap";
import Card from "./Card";
import {useSelector} from "react-redux";

function CardList() {
  const product = useSelector((state) => state.product.items);

  return (
    <Row>
      {product.map((product, i) => (
        <Card key={i} item={product} />
      ))}
    </Row>
  );
}

export default CardList;
