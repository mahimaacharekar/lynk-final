import { Link } from "react-router-dom";
import landingIllustration from "../assets/images/landing_illustration.png"; 

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#EADDD0] flex flex-col items-center justify-center text-center font-serif px-6">
      {/* Logo Name */}
      <h1 className="text-6xl font-bold mb-4 text-[#3B2E2A]">Lynk</h1>
      <p className="text-lg text-[#5C5048] max-w-md mb-10">
        Where connections feel natural.  
        Share moments, discover stories, and stay close to what matters.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <Link
          to="/signup"
          className="bg-[#B89F8A] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#a4866d] transition"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="border border-[#B89F8A] text-[#B89F8A] px-8 py-3 rounded-lg text-lg hover:bg-[#B89F8A] hover:text-white transition"
        >
          Log In
        </Link>
      </div>

      
      <div className="mt-16">
        <img
          src={landingIllustration}
          alt="landing"
          className="w-[470px] mx-auto rounded-xl shadow-md"
        />
      </div>
    </div>
  );
}
