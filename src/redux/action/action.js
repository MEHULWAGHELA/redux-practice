import { DECREMENT, INCREMENT } from "../type/type"

export const incrementCount = (dispatch) => {
    dispatch({ type: INCREMENT })
}

export const decrementCount = (dispatch) => {
    dispatch({ type: DECREMENT })
}