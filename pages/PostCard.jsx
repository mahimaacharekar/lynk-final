export default function PostCard({ post }) {
  return (
    <div className="bg-white border rounded-md shadow-sm mb-6">
      {/* User info */}
      <div className="flex items-center p-3">
        <img
          src={post.userImg}        
          alt={post.username}
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <span className="font-medium">{post.username}</span>
      </div>

      {/* Post image */}
      <img
        src={post.postImg}          
        alt={post.caption}
        className="w-[150px] h-[150px] object-cover"  
      />

      {/* Post info */}
      <div className="p-3">
        <div className="flex items-center mb-2">
          <span className="mr-3 font-medium">{post.likes} likes</span>
        </div>
        <p>
          <span className="font-semibold">{post.username}</span> {post.caption}
        </p>
      </div>
    </div>
  );
}
