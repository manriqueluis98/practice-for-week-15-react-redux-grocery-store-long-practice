import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  minusItemProduce,
  plusItemProduce,
  removeProduce,
} from "../../store/cart";

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  function handleRemoveItem() {
    dispatch(removeProduce(item));
  }

  function handlePlusItem() {
    dispatch(plusItemProduce(item.id));
  }

  function handleMinusItem() {
    dispatch(minusItemProduce(item.id));
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input type="number" value={count} />
        <button onClick={handlePlusItem} className="cart-item-button">
          +
        </button>
        <button onClick={handleMinusItem} className="cart-item-button">-</button>
        <button onClick={handleRemoveItem} className="cart-item-button">
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
