import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Navbar() {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#3B2E2A] text-white">
      <Link to="/" className="text-2xl font-serif">
        Lynk
      </Link>

      <div className="flex gap-4 items-center">
        {!token ? (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/signup" className="hover:underline">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link to="/home" className="hover:underline">
              Home
            </Link>

            <button
              onClick={handleLogout}
              className="bg-[#B89F8A] text-[#3B2E2A] px-4 py-1 rounded hover:bg-[#D2C1B6]"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
