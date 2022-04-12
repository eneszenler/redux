import React from "react";
import {Container} from "react-bootstrap";
import NumberFormat from "react-number-format";
import {useSelector} from "react-redux";

function Header() {
  const money = useSelector((state) => state.product.money);
  return (
    <>
      <div className="header-container">
        <div>
          <img src="https://neal.fun/spend/billgates.jpg" alt="" />
        </div>
        <div>
          <h2> Spend Bill Gates' Money</h2>
        </div>
      </div>
      <div className="current-money">
        <h1>
          <NumberFormat
            value={money}
            displayType="text"
            thousandSeparator={true}
            prefix={"$"}
          />
        </h1>
      </div>
    </>
  );
}

export default Header;
