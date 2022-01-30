import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/globalContext';
import PrimaryButton from "../Button/Button";

const Header = (props) => {
  const { cartItems } = useContext(GlobalContext)
  return (
    <div className="p-4 mb-3 flex justify-between bg-slate-600 text-slate-100">
      <div>
        Logo
      </div>

      <div>
        <Link className="mr-4" to="/">Home</Link>
        <Link className="mr-4" to="/terms">Terms & Conditions</Link>
        <Link className="mr-4" to="/about">About</Link>
        <PrimaryButton className="mr-4" onClick={props.onLoginClick}>
          Login/Sign up
        </PrimaryButton>
        <PrimaryButton onClick={props.onCartClick}>
          Cart {
            cartItems.length ? `(${cartItems.length})` : null
          }
        </PrimaryButton>
      </div>
    </div>
  )
}

export default Header;
