import Navbar from "./Navbar.jsx";

function Header({ username }) {
  return (
    <div>
      <h1>Header</h1>
      <Navbar username={username} />
    </div>
  );
}

export default Header;