import Sidebar from "../components/Sidebar";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

export default function HomePage() {
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Feed Area */}
      <main className="flex-1 ml-56 bg-[#EADDD0] min-h-screen p-6">
        <div className="max-w-xl mx-auto">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
