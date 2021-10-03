import { useState } from "react";
import { socket } from "./../../../../../../socket";

const useChat = () => {
  const [messages, setMessages] = useState([]);

  const setNewMessage = (msg) =>
    setMessages((oldMessage) => [...oldMessage, msg]);

  const sendMessage = (e) => {
    e.preventDefault();
    const msg = {
      username: e.target.username.value,
      text: e.target.text.value,
    };
    socket.emit("CLIENT_MSG", msg);
  };

  return { messages, setNewMessage, sendMessage };
};

export default useChat;
