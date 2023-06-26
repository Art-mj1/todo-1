const Button = ({ clickAddButtonHandler, children }) => {
  return <button onClick={clickAddButtonHandler}>{children}</button>;
};
export default Button;
