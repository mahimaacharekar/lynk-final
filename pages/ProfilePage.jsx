import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import myprofile from "../assets/images/myprofile.png";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

export default function ProfilePage() {
 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = Cookies.get("token");

        const res = await fetch(
          "https://task4-authdb.onrender.com/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Failed to load user");
      }
    };

    fetchUser();
  }, []);


  if (!user) {
    return (
      <p className="text-center mt-10 text-[#3B2E2A]">
        Loading profile...
      </p>
    );
  }

  return (
    <div className="p-6 flex flex-col items-center bg-[#EADDD0] min-h-screen">
      {/* Profile header */}
      <div className="flex flex-col sm:flex-row items-center gap-8 bg-white shadow-md rounded-2xl p-6 w-full max-w-3xl mb-8">
        {/* Profile picture */}
        <img
          src={myprofile}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-[#EADDD0]"
        />

        {/* Info */}
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-[#3B2E2A]">
            {user.name}
          </h2>

          <p className="text-gray-600">@{user.username}</p>

          <p className="text-gray-700 mt-2">
            {user.bio || "No bio added yet"}
          </p>

          {/* Stats */}
          <div className="flex justify-center sm:justify-start gap-8 mt-4 text-gray-800">
            <div>
              <span className="font-semibold">{posts.length}</span> posts
            </div>
            <div>
              <span className="font-semibold">320</span> followers
            </div>
            <div>
              <span className="font-semibold">290</span> following
            </div>
          </div>

          {/* Edit button */}
          <button className="mt-4 bg-[#B89F8A] text-white px-4 py-2 rounded-md hover:bg-[#a4866d] transition">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition"
          >
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
