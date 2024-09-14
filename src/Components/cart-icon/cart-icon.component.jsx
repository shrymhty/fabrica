import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-cart-icon.svg";

import './cart-icon.styles.scss';
import { CartContext } from "../contexts/cart.context";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className="cart-icon-container">
            <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon;