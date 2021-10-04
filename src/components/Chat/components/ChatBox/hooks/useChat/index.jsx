import { useContext, useState } from "react";
import { socket } from "./../../../../../../socket";
import { UserContext } from "./../../../../../../contextes/UserContext";

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const { user } = useContext(UserContext);

  const setNewMessage = (msg) =>
    setMessages((oldMessage) => [...oldMessage, msg]);

  const sendMessage = (message) => {
    const msg = {
      user,
      text: message,
    };
    socket.emit("CLIENT_MSG", msg);
  };

  return { messages, setNewMessage, sendMessage };
};

export default useChat;
