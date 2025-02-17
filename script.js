const ws = new WebSocket("wss://your-replit-project.replit.dev");  // Your WebSocket server URL

ws.onopen = () => {
  logMessage("✅ WebSocket Connected!");
};

ws.onmessage = (event) => {
  logMessage(`🔹 ${event.data}`);
};

ws.onerror = (error) => {
  logMessage(`❌ WebSocket Error: ${error}`);
  showServerDownMessage();
};

ws.onclose = () => {
  logMessage("🔴 WebSocket Disconnected!");
  showServerDownMessage();
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
  sendMessage("hash");
  sendMessage("file");
  sendMessage("dns");
  logMessage("🔄 Sent All Requests: [Hash, File, DNS]");
}

function logMessage(message) {
  const logDiv = document.getElementById("log");
  logDiv.innerHTML += `<p>${message}</p>`;
  logDiv.scrollTop = logDiv.scrollHeight;
}

function showServerDownMessage() {
  document.getElementById("server-down").style.display = "block";
}
