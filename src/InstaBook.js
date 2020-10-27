import React from "react";
import Chat from "./Chat";
import "./InstaBook.css";
import Sidebar from "./Sidebar";
function InstaBook() {
  return (
    <div className="InstaBook">
      {/*Sidebar */}
      <Sidebar />
      {/*Chat */}
      <Chat />
    </div>
  );
}

export default InstaBook;