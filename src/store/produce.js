import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";

const LIKE_PRODUCE = "produce/LIKE_PRODUCE";

export function likeProduce(id) {
  return {
    type: LIKE_PRODUCE,
    id: id
  };
}

export function populateProduce() {
  return {
    type: POPULATE,
    produce: produceData,
  };
}

export default function produceReducer(state = {}, action) {
    let newState = {...state}
  switch (action.type) {
    case LIKE_PRODUCE:
        newState[action.id].liked = !newState[action.id].liked
        return newState
    case POPULATE:
      action.produce.forEach((produce) => {
        newState[produce.id] = produce;
      });

      return newState;
    default:
      return state;
  }
}
