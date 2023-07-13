const Button = ({ className, children, onClick }) => {
  const classes = `btn ${className}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
