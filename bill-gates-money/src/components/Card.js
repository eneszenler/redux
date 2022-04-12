import React, {useEffect, useState} from "react";
import {Col} from "react-bootstrap";
import NumberFormat from "react-number-format";
import {useDispatch, useSelector} from "react-redux";
import {setQtd, total} from "../redux/productSlice";

function Card({item}) {
  const money = useSelector((state) => state.product.money);

  const [quantity, setQuantity] = useState(0);
  const [recipeItem, setRecipeItem] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQtd(recipeItem));
  }, [recipeItem]);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setRecipeItem({name: item.name, qtd: quantity - 1, price: item.price});
      dispatch(total(-item.price));
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    setRecipeItem({name: item.name, qtd: quantity + 1, price: item.price});
    dispatch(total(item.price));
  };

  return (
    <>
      <Col xs={12} md={6} lg={4}>
        <div className="item">
          <div className="item-img">
            <img src={item.img} />
          </div>
          <div className="item-info">
            <div className="item-title">{item.name}</div>
            <div className="item-price">
              <NumberFormat
                value={item.price}
                displayType="text"
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>
          </div>
          <div className="item-control">
            <div className="control">
              {quantity !== 0 ? (
                <button className="sell-active" onClick={handleDecrease}>
                  Sell
                </button>
              ) : (
                <button className="sell" disabled>
                  Sell
                </button>
              )}
            </div>
            <div className="control">
              <input type="number" value={quantity} disabled />
            </div>
            <div className="control">
              {money < item.price ? (
                <button className="sell" onClick={handleIncrease} disabled>
                  Buy
                </button>
              ) : (
                <button className="buy" onClick={handleIncrease}>
                  Buy
                </button>
              )}
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Card;
