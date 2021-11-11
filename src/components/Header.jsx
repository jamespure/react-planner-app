import Button from "./Button";

const Header = ({ heading }) => {
  return (
    <header className="header">
      <h1>{heading}</h1>
      <Button text="Add" color="green" className="btn" />
    </header>
  );
};

Header.defaultProps = {
  heading: "Plan Tracker",
};
export default Header;
