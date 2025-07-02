// apiConfig.js
let baseUrl;
let socketUrl;

if (import.meta.env.VITE_NODE_ENV === "production") {
  baseUrl = "https://whisp-yq5j.onrender.com";
  socketUrl = "wss://whisp-yq5j.onrender.com";
} else {
  baseUrl = "https://whisp-yq5j.onrender.com";
  socketUrl = "wss://whisp-yq5j.onrender.com";
}

export { baseUrl, socketUrl };
