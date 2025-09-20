
type ButtonClick = {
    onClick: () => void;
}

export default function Button({onClick}: ButtonClick) {
  return (
    <button onClick={onClick}>Click me</button>
  )
}
