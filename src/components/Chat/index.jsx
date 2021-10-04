import React, { useState, useEffect, useContext } from "react";
import { WechatOutlined } from "@ant-design/icons";
import ChatBox from "./components/ChatBox";
import { socket } from "./../../socket";
import useChat from "./components/ChatBox/hooks/useChat/index";
import { UserContext } from "./../../contextes/UserContext";

const Chat = () => {
  const [isChatOpened, setIsChatOpened] = useState(false);
  const { user } = useContext(UserContext);
  const { messages, sendMessage, setNewMessage } = useChat();

  const closeChat = () => setIsChatOpened(false);

  useEffect(() => {
    socket.on("SERVER_MSG", (msg) => {
      setNewMessage(msg);
      setIsChatOpened(true);
    });
  }, []);

  return (
    <div style={{ position: "absolute", bottom: "0%", right: "1%" }}>
      {(!isChatOpened && (
        <>
          {!user && <b>Merci de renseigner le user pour accéder au chat</b>}
          <WechatOutlined
            disabled={!user}
            style={{
              fontSize: "100px",
              color: user ? "black" : "grey",
              cursor: user ? "pointer" : "auto",
            }}
            onClick={() => (user ? setIsChatOpened(true) : null)}
          />
        </>
      )) || (
        <ChatBox
          messages={messages}
          sendMessage={sendMessage}
          closeChat={closeChat}
        />
      )}
    </div>
  );
};

export default Chat;
