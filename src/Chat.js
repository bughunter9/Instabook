import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MicNoneIcon from "@material-ui/icons/MicNone";
import "./Chat.css";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "./features/chatSlice";
import db from "./firebase";
import firebase from "firebase";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
function Chat() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState(" ");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId, input]);
  console.log(messages);
  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
    //firebase Magic
    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      //uid: user.id,
      photo: user.photo,
      email: user.email,
      //displayName: user.displayName,
    });
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/*Chat Messages */}
      <div className="chat__messages">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} content={data} />
          ))}
        </FlipMove>
      </div>

      <div className="chat__input">
        <form action="">
          <input
            placeholder="InstaBook"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button onClick={sendMessage}>Send Messages</button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;