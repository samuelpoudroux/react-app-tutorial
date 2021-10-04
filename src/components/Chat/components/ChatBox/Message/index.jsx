import React, { useContext } from "react";
import { UserContext } from "./../../../../../contextes/UserContext";
import PropTypes from "prop-types";
import { MarginWrapper } from "../../../../../Wrappers/MarginWrapper";

const Message = ({ msg }) => {
  const { user } = useContext(UserContext);

  return (
    <MarginWrapper global="10">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: msg.user === user ? "flex-start" : "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              background: msg.user === user ? "grey" : "skyBlue",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            {msg.text}
          </div>
          <i style={{ marginLeft: "3px" }}>Envoyé par: {msg.user}</i>
        </div>
      </div>
    </MarginWrapper>
  );
};

Message.propTypes = {
  msg: PropTypes.object,
};

export default Message;
