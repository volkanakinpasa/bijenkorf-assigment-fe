function Icon(props) {
  const { label, src } = props;

  return <img src={src} alt={label} />;
}

export default Icon;
