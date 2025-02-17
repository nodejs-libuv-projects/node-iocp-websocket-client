const ws = new WebSocket("wss://95c281b9-3664-4a1d-b5f0-61f1350bad11-00-29gexjyimy68f.kirk.replit.dev/:3000");

ws.onopen = () => {
  logMessage("✅ WebSocket Connected!");
};

ws.onmessage = (event) => {
  logMessage(`🔹 ${event.data}`);
};

ws.onerror = (error) => {
  logMessage(`❌ WebSocket Error: ${error}`);
};

ws.onclose = () => {
  logMessage("🔴 WebSocket Disconnected!");
};

function sendMessage(message) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(message);
    logMessage(`📤 Sent: ${message}`);
  } else {
    logMessage("⚠️ WebSocket Not Connected!");
  }
}

function sendAll() {
  logMessage("🔄 Sending All Requests: [Hash, File, DNS]");
  sendMessage("hash");
  sendMessage("file");
  sendMessage("dns");
}

function logMessage(message) {
  const logDiv = document.getElementById("log");
  logDiv.innerHTML += `<p>${message}</p>`;
  logDiv.scrollTop = logDiv.scrollHeight;
}
