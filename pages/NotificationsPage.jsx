const notifications = [
  {
    id: 1,
    text: "Josh started following you",
    time: "5m ago",
  },
  {
    id: 2,
    text: "Riya liked your post",
    time: "1h ago",
  },
  {
    id: 3,
    text: "Karan commented on your post",
    time: "Yesterday",
  },
];

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-[#EADDD0] py-10 px-6">
      <h2 className="text-3xl font-semibold text-center mb-8 text-[#3B2E2A]">
        Notifications
      </h2>

      <div className="max-w-xl mx-auto bg-white rounded-xl shadow divide-y">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="p-4 flex justify-between hover:bg-[#F3EADF]"
          >
            <p className="text-[#3B2E2A]">{n.text}</p>
            <span className="text-sm text-gray-500">
              {n.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
