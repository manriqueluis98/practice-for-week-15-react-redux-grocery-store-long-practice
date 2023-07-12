import { useDispatch } from "react-redux";
import { addProduce } from "../../store/cart";
import { likeProduce } from "../../store/produce";

function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch();

  function handleAddProduce() {
    dispatch(addProduce(produce));
  }

  function handleLikeProduce() {
    dispatch(likeProduce(produce.id));
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          onClick={handleLikeProduce}
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          onClick={handleAddProduce}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
