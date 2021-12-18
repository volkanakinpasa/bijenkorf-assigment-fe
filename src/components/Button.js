function Button(props) {
  const { label, icon, type, onClick } = props;

  return (
    <button type={type} aria-label={label} onClick={onClick}>
      {icon}
    </button>
  );
}

export default Button;
