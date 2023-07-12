
const ADD_PRODUCE = 'cart/ADD_PRODUCE'

const REMOVE_PRODUCE = 'cart/REMOVE_PRODUCE'

export function addProduce(produce){
    return {
        type: ADD_PRODUCE,
        produce
    }
}

export function removeProduce(produce){
    return {
        type: REMOVE_PRODUCE,
        produce
    }
}


export default function cartReducer(state = {}, action){
    switch(action.type){
        case REMOVE_PRODUCE:
            let newObj = {
                ...state
            }

            if(newObj.hasOwnProperty(action.produce.id)){
                delete newObj[action.produce.id]
            }

            return newObj
        case ADD_PRODUCE:
            let newState = {
                ...state
            }

            if(newState.hasOwnProperty(action.produce.id)){
                newState[action.produce.id].count = newState[action.produce.id].count + 1
            }else{
                newState[action.produce.id] = {
                    id: action.produce.id,
                    count: 1
                }
            }

            
            return newState
        default:
            return state
    }
}