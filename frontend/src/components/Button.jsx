/* eslint-disable react/prop-types */
function Button({text, type, onClick, variant}) {
  return (
    <button onClick={onClick} type={type} className={variant}>{text}</button>
  )
}

export default Button;