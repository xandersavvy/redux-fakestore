import { actionTypes } from "../constants/action-types"

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case actionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export const selectedProductReducer = (state = initialState, action) => { 
    switch (action.type) {
        case actionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                ...action.payload
            }
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}