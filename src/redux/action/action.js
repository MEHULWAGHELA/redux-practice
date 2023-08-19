import { DECREMENT, INCREMENT } from "../type/type"

export const incrementCount = (number) => {
    return { type: INCREMENT, number: number }
}

export const decrementCount = (number) => {
    return { type: DECREMENT, number: number }
}
