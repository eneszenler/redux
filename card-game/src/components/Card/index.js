import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addSelectedItems, setVisible} from "../../redux/cardsSlice";

function CardItem({item}) {
  const selectedItems = useSelector((state) => state.cards.selectedItems);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (selectedItems.length < 2) {
      dispatch(setVisible(item.id));
      dispatch(addSelectedItems(item));
    }
  };

  return (
    <>
      <div>
        {!item.visible && (
          <div onClick={handleClick} className="front">
            ?
          </div>
        )}
        {item.visible && (
          <div onClick={handleClick} className="back">
            <img src={item.image} alt={item.name} width="60%" />
          </div>
        )}
      </div>
    </>
  );
}

export default CardItem;
