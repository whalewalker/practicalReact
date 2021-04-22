const Button = ({ name, color }) => {
  const buttonStyle = {
    cursor: "pointer",
    background: "#222",
    border: 0,
    color: color,
    display: "block",
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    width: "100%",
    textTransform: "upperCase",
    borderRadius: "5px",
  };

  return <button style={buttonStyle}>{name}</button>;
};

Button.defaultProps = {
  color: "#fff",
};

export default Button;
