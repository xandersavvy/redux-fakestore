
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";



export default function ProductListing(){
    const products = useSelector(state => state.allProducts);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch]);
    console.log(products);
    return (
        <div className="ui grid container">
        <ProductComponent />
      </div>
    )

}
