import { actionTypes } from "../constants/action-types"
import fakeApi from "../../apis/fakeApi"

export const fetchProducts = () => async(dispatch) => {
    const response = await fakeApi.get("/products")
    dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: response.data
    })
}

export const fetchSingleProduct = (id) => async(dispatch) => {
    const response = await fakeApi.get(`/products/${id}`)
    dispatch({
        type: actionTypes.SELECTED_PRODUCT,
        payload: response.data
    })
}

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }

}

export const selectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
      type: actionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };
