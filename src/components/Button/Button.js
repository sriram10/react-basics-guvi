const PrimaryButton = (props) => {
  return (
    <button className={`bg-blue-200 p-2 rounded-md text-slate-700 ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default PrimaryButton;
