import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.scss";
import { ReactComponent as Logo } from "../../Assets/uc-logo.svg";
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../Components/contexts/user.context";
import { CartContext } from "../../Components/contexts/cart.context";
import { signOutUser } from '../../Utilities/Firebase/firebase.utilities';

const Navbar = () => {
    const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT US
          </Link>
          {
            currentUser ? (<span className='nav-link'  onClick={signOutUser}>SIGN OUT</span>) : (<Link className='nav-link' to='/auth'>SIGN IN</Link>)
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
