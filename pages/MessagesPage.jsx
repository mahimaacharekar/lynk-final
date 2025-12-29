import { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "Josh",
    lastMessage: "Did you finish the assignment?",
    time: "2m",
  },
  {
    id: 2,
    name: "Riya",
    lastMessage: "Let’s meet after class",
    time: "1h",
  },
  {
    id: 3,
    name: "Karan",
    lastMessage: "Sent you the notes",
    time: "Yesterday",
  },
];

export default function MessagesPage() {
  const [selected, setSelected] = useState(conversations[0]);

  return (
    <div className="flex min-h-screen bg-[#EADDD0]">
      {/* Conversation */}
      <div className="w-1/3 bg-white border-r">
        <h2 className="text-xl font-semibold p-4 text-[#3B2E2A]">
          Messages
        </h2>

        {conversations.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelected(chat)}
            className={`p-4 cursor-pointer hover:bg-[#F3EADF] ${
              selected.id === chat.id ? "bg-[#F3EADF]" : ""
            }`}
          >
            <div className="flex justify-between">
              <p className="font-medium text-[#3B2E2A]">
                {chat.name}
              </p>
              <span className="text-xs text-gray-500">
                {chat.time}
              </span>
            </div>
            <p className="text-sm text-gray-600 truncate">
              {chat.lastMessage}
            </p>
          </div>
        ))}
      </div>

      {/* Chat */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 bg-white border-b font-medium text-[#3B2E2A]">
          {selected.name}
        </div>

        <div className="flex-1 p-6 text-gray-500 flex items-center justify-center">
          Chat UI ready — backend coming soon 💬
        </div>

        <div className="p-4 bg-white border-t">
          <input
            disabled
            placeholder="Type a message…"
            className="w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>
      </div>
    </div>
  );
}
