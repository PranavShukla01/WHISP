// apiConfig.js
let baseUrl;
let socketUrl;

if (import.meta.env.VITE_NODE_ENV === "production") {
  baseUrl = "https://simple-chat-app-6yeb.onrender.com";
  socketUrl = "wss://simple-chat-app-6yeb.onrender.com";
} else {
  baseUrl = "https://whisp-yq5j.onrender.com";
  socketUrl = "ws://simple-chat-app-6yeb.onrender.com";
}

export { baseUrl, socketUrl };
