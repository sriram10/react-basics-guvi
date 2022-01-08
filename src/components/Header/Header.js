import PrimaryButton from "../Button/Button";

const Header = (props) => {
  return (
    <div className="p-4 mb-3 flex justify-between bg-slate-600 text-slate-100">
      <div>
        Logo
      </div>

      <div>
        <PrimaryButton className="mr-4" onClick={props.onLoginClick}>
          Login/Sign up
        </PrimaryButton>
        <PrimaryButton onClick={props.onCartClick}>
          Cart {
            props.cartListItems.length ? `(${props.cartListItems.length})` : null
          }
        </PrimaryButton>
      </div>
    </div>
  )
}

export default Header;
