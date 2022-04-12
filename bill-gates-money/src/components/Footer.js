import React from "react";
import NumberFormat from "react-number-format";
import {useSelector} from "react-redux";

function Footer() {
  const orders = useSelector((state) => state.product.recipeItems);
  const total = useSelector((state) => state.product.amount);

  if (!total) return <div className="built">Built with 🖤 by Enes Zenler</div>;
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-title">Your Receipt</div>
          <div className="footer-item-container">
            {orders &&
              orders.map((item, i) => (
                <div key={i} className="footer-item">
                  <div id="name">{item.name}</div>
                  <div id="count">x{item.qtd}</div>
                  <div id="price">
                    <NumberFormat
                      value={item.qtd * item.price}
                      displayType="text"
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </div>
                </div>
              ))}
          </div>

          <div className="footer-total">
            <div>TOTAL</div>
            <div id="price-total">
              <NumberFormat
                value={total}
                displayType="text"
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="built">Built with 🖤 by Enes Zenler</div>
    </div>
  );
}

export default Footer;
