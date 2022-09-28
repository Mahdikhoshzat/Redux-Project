import * as actionType from "./Action"


const initState = {
    counter: 0,
    List: []
}

export default function reducer(state = initState, action) {

    switch (action.type) {
        case actionType.INC:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionType.DEC:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionType.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionType.SUB:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionType.SHOW:
            return {
                ...state,
                List: state.List.concat(state.counter)
            }
        default:
            return state
    }
}