import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSingleProduct, removeSelectedProduct } from "../redux/actions/productActions";

export default function ProductDetail(){
    const product = useSelector((state) => state.selectedProducts);
    console.log("I am here")
    const {image , title,price,category,description} = product;
    
    const {productId} = useParams();

    const id = productId;
    const dispatch = useDispatch();

    console.log(product);

    useEffect(() => {
        if(id && id!=='') dispatch(fetchSingleProduct(id));
        return ()=>{dispatch(removeSelectedProduct());};
    },[id,dispatch]);
    return (
        <div className="ui grid container">
          {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <div className="ui placeholder segment">
              <div className="ui two column stackable center aligned grid">
                <div className="middle aligned row">
                  <div className="column lp">
                    <img className="ui fluid image" src={image} alt={title} />
                  </div>
                  <div className="column rp">
                    <h1>{title}</h1>
                    <h2 className="ui teal tag label">$ {price}</h2>
                    <h3 className="ui brown block header">{category}</h3>
                    <p>{description}</p>
                    <div className="ui vertical animated button" tabIndex="0">
                      <div className="hidden content">
                        <i className="shop icon"></i>
                      </div>
                      <div className="visible content">Add to Cart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );

}
