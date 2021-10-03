import React, { useState, useEffect } from "react";
import { WechatOutlined } from "@ant-design/icons";
import ChatBox from "./components/ChatBox";
import { socket } from "./../../socket";
import useChat from "./components/ChatBox/hooks/useChat/index";

const Chat = () => {
  const [isChatOpened, setIsChatOpened] = useState(false);
  const { messages, sendMessage, setNewMessage } = useChat();

  useEffect(() => {
    socket.on("SERVER_MSG", (msg) => {
      setNewMessage(msg);
      setIsChatOpened(true);
    });
  }, []);

  return (
    <div>
      {(!isChatOpened && (
        <WechatOutlined onClick={() => setIsChatOpened(true)} />
      )) || <ChatBox messages={messages} sendMessage={sendMessage} />}
    </div>
  );
};

export default Chat;
