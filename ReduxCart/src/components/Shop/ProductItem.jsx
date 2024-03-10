import { useDispatch } from "react-redux";

import "./shop.css";
import Card from "../UI/Card";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };

  return (
    <li className="item">
      <Card>
        <header>
          <h3>{title}</h3>
          <div className="price">${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className="product-actions">
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
