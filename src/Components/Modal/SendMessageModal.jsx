import React, { useRef, useEffect, useState } from "react";
import { useProofChat, useSendMessage } from "../../Hooks/api/dashboard_api";
import { FiPaperclip, FiSend } from "react-icons/fi";

const SendMessageModal = ({ orderId }) => {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const bottomRef = useRef(null);
  const { data, isLoading } = useProofChat(orderId);
  const chats = data?.data?.proof_requests?.[0]?.chats || [];
  const { mutate: sendMsgMutation, isPending } = useSendMessage(
    orderId,
    data?.data?.proof_requests?.[0]?.proof_request_id,
  );

  // auto scroll to bottom
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [chats, isLoading]);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("message", text);
    if (file) {
      formData.append("attachment", file);
    }

    sendMsgMutation(formData, {
      onSuccess: res => {
        if (res?.success) {
          setText("");
          setFile(null);
          setPreview(null);
        }
      },
    });
  };

  if (isLoading) {
    return (
      <div className="py-14 flex justify-center">
        <div className="animate-spin rounded-full size-14 border-t-4 border-primary-pink border-solid" />
      </div>
    );
  }

  return (
    <div className="">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-3">Proof Chat</h2>

      {/* Chat Body */}
      <div className="h-[620px] flex-1 overflow-y-auto space-y-3 pr-2 chat-scrollbar">
        {chats?.length > 0 ? (
          chats.map(chat => (
            <div
              key={chat.id}
              className={`flex ${
                chat.sender_type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] px-3 py-2 rounded-lg text-sm ${
                  chat.sender_type === "user"
                    ? "bg-primary-pink text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {/* Message */}
                {chat.message && <p>{chat.message}</p>}

                {/* Image */}
                {chat.attachment && (
                  <img
                    src={chat.attachment}
                    alt="attachment"
                    className="mt-2 rounded-md max-h-40 object-cover"
                  />
                )}

                {/* Time */}
                <p className="text-[10px] mt-1 opacity-70">{chat.created_at}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="py-10 flex justify-center text-center">
            No chat found
          </div>
        )}

        <div ref={bottomRef}></div>
      </div>

      {/* Footer */}
      <div>
        {/* Preview Image */}
        {preview && (
          <div className="mb-2 relative w-fit">
            <img
              src={preview}
              alt="preview"
              className="h-16 rounded-md object-cover"
            />
            <button
              type="button"
              onClick={() => setPreview(null)}
              className="absolute -top-2 -right-2 cursor-pointer bg-black text-white text-xs rounded-full px-1"
            >
              ✕
            </button>
          </div>
        )}

        <div className="flex items-center gap-2 bg-gray-900 rounded-full mt-3 px-3 py-2">
          {/* File Upload Icon */}
          <label className="cursor-pointer text-gray-500">
            <FiPaperclip size={18} />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={e => {
                const file = e.target.files[0];
                if (file) {
                  setFile(file);
                  setPreview(URL.createObjectURL(file));
                }
              }}
            />
          </label>

          {/* Message Input */}
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-transparent outline-none text-sm"
          />

          {/* Send Button */}
          <button
            disabled={isPending}
            onClick={handleSubmit}
            className="bg-primary-pink cursor-pointer p-2 rounded-full hover:scale-105 transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <FiSend size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMessageModal;
