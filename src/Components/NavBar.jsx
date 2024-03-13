import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "250px",
          justifyContent: "space-between",
        }}
      >
        <Link to="/home">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/weather">Weather</Link>
      </div>
    </>
  );
};

export default NavBar;
