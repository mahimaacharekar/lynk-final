import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(
        "https://task4-authdb.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            password: password.trim(),
            city: "Mumbai",
            gender: "female",
            dob: "2004-01-01",
            bio: "Hello, I’m new here!",
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      alert("Signup successful! Please log in.");
      navigate("/login");
    } catch (error) {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EADDD0]">
      <div className="bg-[#B89F8A] p-8 rounded-2xl shadow-md w-96">
        <h2 className="text-3xl font-semibold text-center mb-6 font-serif text-[#3B2E2A]">
          Sign Up
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-[#3B2E2A]">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2
                         text-[#3B2E2A] placeholder-[#3B2E2A]
                         focus:outline-none focus:ring-2 focus:ring-[#3B2E2A]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-[#3B2E2A]">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2
                         text-[#3B2E2A] placeholder-[#3B2E2A]
                         focus:outline-none focus:ring-2 focus:ring-[#3B2E2A]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-[#3B2E2A]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2
                         text-[#3B2E2A] placeholder-[#3B2E2A]
                         focus:outline-none focus:ring-2 focus:ring-[#3B2E2A]"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium text-[#3B2E2A]">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2
                         text-[#3B2E2A] placeholder-[#3B2E2A]
                         focus:outline-none focus:ring-2 focus:ring-[#3B2E2A]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3B2E2A] text-white py-2 rounded-lg hover:bg-[#D2C1B6] transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#3B2E2A] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
