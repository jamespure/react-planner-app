import Button from "./Button";

const Header = ({ onAdd, heading, showAdd }) => {
  return (
    <header className="header">
      <h1>{heading}</h1>
      <Button text={showAdd ? "Close" : "Add"} color={showAdd ? 'red' : 'green'}  onClick={onAdd}/>
    </header>
  );
};

Header.defaultProps = {
  heading: "Plan Tracker",
};
export default Header;
