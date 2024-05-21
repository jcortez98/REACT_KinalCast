import { io } from "socket.io-client";
import { useStore } from "./store";

let socket;
const ip = "127.0.0.1"

export const connectWithSocketServer = () => {
  //socket = io(`https://node-js-kinal-cast-2024.vercel.app/`);
  socket = io(`http://18.119.102.15:3001`);
  
  socket.on("connect", () => {

  });

  socket.on('chat-history', (chatHistory) => {
    const { setChatHistory } = useStore.getState()
    setChatHistory(chatHistory)
  })

  socket.on('chat-message', (chatMessage) => {
    const { chatHistory, setChatHistory } = useStore.getState()

    setChatHistory({
      channelId: chatHistory.channelId,
      messages:[
        ...chatHistory.messages,
        {
          author: chatMessage.author,
          content: chatMessage.content,
          date: chatMessage.date
        }
      ]
    })
  })
};

export const getChatHistory = (channelId) => {
    socket.emit('chat-history', channelId)
}

export const sendChatMessage = (toChannel, message) => {
  socket.emit('chat-message', {
    toChannel,
    message,
  })
}

export const closeChatSubscription = (channelId) => {
  socket.emit("chat-unsubscribe", channelId)
}


