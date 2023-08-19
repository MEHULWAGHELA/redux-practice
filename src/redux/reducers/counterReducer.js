import { DECREMENT, INCREMENT } from "../type/type"

let defaultState = {
    count: 0
}
export const counterReducer = (state = defaultState, action) => {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case INCREMENT: {
            return {
                count: state.count + 1
            }
        }
        case DECREMENT: {
            return {
                count: state.count - 1
            }
        }
        default: {
            return defaultState
        }
    }
}