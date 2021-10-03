import React, { memo } from "react";

const ChatBox = ({ messages, sendMessage }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">My first chat</div>
              <hr />
              <div className="messages">
                {messages.map((msg, index) => {
                  return (
                    <div key={msg + index}>
                      {msg.username}: {msg.text}
                    </div>
                  );
                })}
              </div>
            </div>
            <form onSubmit={(e) => sendMessage(e)}>
              <div className="card-footer">
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="form-control"
                />
                <br />
                <input
                  id="text"
                  type="text"
                  placeholder="Your message"
                  className="form-control"
                />
                <br />
                <button type="submit" className="btn btn-primary form-control">
                  send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ChatBox);
