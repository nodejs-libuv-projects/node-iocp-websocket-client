const WS_SERVER_URL = "wss://your-replit-project.replit.dev"; // Your WebSocket server URL

function connectWebSocket() {
    const ws = new WebSocket(WS_SERVER_URL);

    ws.onopen = () => {
        logMessage("✅ Connected to WebSocket Server!");
    };

    ws.onmessage = (event) => {
        logMessage(`🔹 ${event.data}`);
    };

    ws.onerror = (error) => {
        console.error("❌ WebSocket Error:", error);
        showServerDownMessage();
    };

    ws.onclose = () => {
        logMessage("🔴 WebSocket Disconnected!");
        showServerDownMessage();
    };

    return ws;
}

function logMessage(message) {
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += `<p>${message}</p>`;
    logDiv.scrollTop = logDiv.scrollHeight;
}

function showServerDownMessage() {
    document.getElementById("server-down").style.display = "block";
}

// Attempt to connect to WebSocket
let ws = connectWebSocket();
