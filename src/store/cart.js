const ADD_PRODUCE = "cart/ADD_PRODUCE";

const REMOVE_PRODUCE = "cart/REMOVE_PRODUCE";

const PLUS_ITEM_PRODUCE = "cart/PLUS_ITEM_PRODUCE";
const MINUS_ITEM_PRODUCE = "cart/MINUS_ITEM_PRODUCE";


const CLEAR_CART = "cart/CLEAR_CART"

export function clearCart(){
    return {
        type: CLEAR_CART
    }
}

export function addProduce(produce) {
  return {
    type: ADD_PRODUCE,
    produce,
  };
}

export function removeProduce(produce) {
  return {
    type: REMOVE_PRODUCE,
    produce,
  };
}

export function plusItemProduce(id) {
  return {
    type: PLUS_ITEM_PRODUCE,
    id,
  };
}

export function minusItemProduce(id) {
  return {
    type: MINUS_ITEM_PRODUCE,
    id,
  };
}

export default function cartReducer(state = {}, action) {
  let newState = { ...state };
  switch (action.type) {
    case CLEAR_CART:
        return {}
    case PLUS_ITEM_PRODUCE:
      if (newState.hasOwnProperty(action.id)) {
        newState[action.id].count = newState[action.id].count + 1;
      }

      return newState;

    case MINUS_ITEM_PRODUCE:
      if (newState.hasOwnProperty(action.id)) {
        if (newState[action.id].count === 1) {
          delete newState[action.id];
        } else {
          newState[action.id].count = newState[action.id].count - 1;
        }
      }

      return newState;
    case REMOVE_PRODUCE:
      if (newState.hasOwnProperty(action.produce.id)) {
        delete newState[action.produce.id];
      }

      return newState;
    case ADD_PRODUCE:
      if (newState.hasOwnProperty(action.produce.id)) {
        newState[action.produce.id].count =
          newState[action.produce.id].count + 1;
      } else {
        newState[action.produce.id] = {
          id: action.produce.id,
          count: 1,
        };
      }

      return newState;
    default:
      return state;
  }
}
