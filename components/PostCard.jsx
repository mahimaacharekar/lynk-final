import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link to={`/post/${post.id}`} className="block">
      <article
        style={{
          maxWidth: 400,
          margin: "0 auto 60px",
        }}
        className="bg-[#B89F8A] shadow rounded-lg overflow-hidden hover:shadow-md transition"
      >
        {/* Header */}
        <div style={{ padding: 16, display: "flex", alignItems: "center" }}>
          <img
            src={post.userImg}
            alt={post.username}
            style={{
              width: 40,
              height: 40,
              borderRadius: "9999px",
              objectFit: "cover",
              marginRight: 12,
            }}
          />
          <span style={{ fontWeight: 600 }}>{post.username}</span>
        </div>

        
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "100%",
            background: "#f3f4f6",
          }}
        >
          <img
            src={post.postImg}
            alt={post.caption}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Footer */}
        <div style={{ padding: 16 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <strong>{post.likes} likes</strong>
            <span style={{ color: "#6b7280", fontSize: 12 }}>
              {post.timestamp}
            </span>
          </div>
          <p>
            <strong>{post.username}</strong> {post.caption}
          </p>
        </div>
      </article>
    </Link>
  );
}
