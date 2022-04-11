import React, {useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import Card from "../Card";

import {useDispatch, useSelector} from "react-redux";
import {Col} from "react-bootstrap";
import {compare, shuffle, restart} from "../../redux/cardsSlice";

function CardList() {
  const [isCompleted, setIsCompleted] = useState(false);

  const puan = useSelector((state) => state.cards.puan);
  const listItem = useSelector((state) => state.cards.items);
  const selectedItems = useSelector((state) => state.cards.selectedItems);
  const completedItems = useSelector((state) => state.cards.completedItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shuffle());
  }, []);

  useEffect(() => {
    if (selectedItems.length == 2) {
      setTimeout(compareCard, 1500);
    }
  }, [selectedItems]);

  function compareCard(arg) {
    dispatch(compare());
  }

  useEffect(() => {
    if (completedItems === listItem.length) {
      setIsCompleted(true);
    }
  }, [completedItems]);

  const handleClick = () => {
    dispatch(restart());
    setIsCompleted(false);
  };

  return (
    <>
      <Row className="text-center title">
        <h1>Card Guess Game</h1>
      </Row>
      <Row className="text-center puan">
        <h4>Puan: {puan}</h4>
      </Row>
      <Row>
        {listItem.map((item, i) => (
          <Col md={2} key={i}>
            <Card item={item} />
          </Col>
        ))}
      </Row>

      {isCompleted && (
        <Row>
          <button onClick={handleClick} className="btn">
            Restart
          </button>
        </Row>
      )}
    </>
  );
}

export default CardList;
