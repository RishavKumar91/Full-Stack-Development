// Navbar.jsx
import UserProfile from "./Userprofile.jsx";

function Navbar({ username }) {
  return (
    <div>
      <h2>Navbar</h2>
      <UserProfile username={username} />
    </div>
  );
}

export default Navbar;