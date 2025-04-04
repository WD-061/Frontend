import ChatBubble from "./ChatBubble";

const Chat = ({ messages, chatRef }) => {
  return (
    <div
      ref={chatRef}
      id="results"
      className="h-2/3 w-full p-6 bg-slate-700 rounded-xl shadow-lg overflow-y-auto flex flex-col space-y-2"
    >
      {messages.filter((msg) => msg.role !== "system").length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-slate-400 text-center">
            Start a conversation by typing a message below
          </p>
        </div>
      ) : (
        messages
          .filter((msg) => msg.role !== "system")
          .map((msg) => {
            return <ChatBubble key={msg.id} {...msg} />;
          })
      )}
    </div>
  );
};

export default Chat;
