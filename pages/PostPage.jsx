
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));


  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EADDD0] text-[#3B2E2A] font-serif">
        <h2 className="text-2xl">Post not found 😢</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#EADDD0] py-10 font-serif">
      <article className="bg-[#B89F8A] shadow-lg rounded-xl overflow-hidden w-[90%] max-w-[600px]">
        {/* Header */}
        <div className="flex items-center p-4">
          <img
            src={post.userImg}
            alt={post.username}
            className="w-12 h-12 rounded-full object-cover mr-3"
          />
          <span className="font-semibold">{post.username}</span>
        </div>

        {/* Image */}
        <img
          src={post.postImg}
          alt={post.caption}
          className="w-full object-cover"
        />

        {/* Footer */}
        <div className="p-4">
          <p className="font-semibold mb-2">{post.likes} likes</p>
          <p className="mb-4">
            <strong>{post.username}</strong> {post.caption}
          </p>

          {/* Static comments */}
          <div className="bg-[#D2C1B6] p-3 rounded-lg">
            <p><strong>maya:</strong> love this 🫶</p>
            <p><strong>neil:</strong> wow where’s this?</p>
            <p><strong>anya:</strong> beautiful shot 😍</p>
          </div>

          {/* Comment box */}
          <input
            type="text"
            placeholder="Add a comment..."
            className="mt-4 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B2E2A]"
          />
        </div>
      </article>
    </div>
  );
}
