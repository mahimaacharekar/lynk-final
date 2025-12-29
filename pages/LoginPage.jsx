import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://task4-authdb.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        Cookies.set("token", data.token);
        navigate("/home");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EADDD0]">
      <div className="bg-[#B89F8A] p-8 rounded-2xl shadow-md w-96">
        <h2 className="text-3xl font-semibold text-center mb-6 font-serif text-[#3B2E2A]">
          Log In
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-[#3B2E2A]">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[#3B2E2A] focus:outline-none focus:ring-2 focus:ring-[#3B2E2A]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-[#3B2E2A]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[#3B2E2A] focus:outline-none focus:ring-2 focus:ring-[#3B2E2A]"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3B2E2A] text-white py-2 rounded-lg font-medium hover:bg-[#D2C1B6] transition"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#3B2E2A] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
