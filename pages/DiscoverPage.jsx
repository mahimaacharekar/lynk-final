import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function DiscoverPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = Cookies.get("token");

        const res = await fetch(
          "https://task4-authdb.onrender.com/auth/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        console.log("DISCOVER RESPONSE:", data);


        setUsers(data.users || data || []);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading people...</p>;
  }

  if (users.length === 0) {
    return <p className="text-center mt-10">No users found.</p>;
  }

  return (
    <div className="min-h-screen bg-[#EADDD0] py-12 px-6 font-serif">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#3B2E2A]">
        Discover People
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-[#B89F8A] p-6 rounded-2xl shadow-md flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-full bg-[#3B2E2A] text-white flex items-center justify-center text-2xl font-semibold mb-4">
              {user.name?.charAt(0)}
            </div>

            <h3 className="text-lg font-semibold text-[#3B2E2A]">
              {user.name}
            </h3>

            <p className="text-[#5C5048] mb-4">
              @{user.email?.split("@")[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
