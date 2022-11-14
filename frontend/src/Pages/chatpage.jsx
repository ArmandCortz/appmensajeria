import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  
  const fetchchats = async() => {
    const data = await axios.get("/api/chat");
    setChats(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchchats();
  }, []);
  return (<div>{chats.map((chat) => {
        
        <div>{chat.chatName}</div>

      })}</div>)
  
};

export default ChatPage;
