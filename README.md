# 🚀 Node.js IOCP WebSocket Demo

This project demonstrates how **Node.js utilizes IOCP (I/O Completion Ports) on Windows** for handling **high-performance asynchronous operations**, including **WebSockets, CPU-intensive tasks, file I/O, and DNS lookups**.

## 📌 Key Features
✅ **Asynchronous HTTP Endpoints** (`/cpu`, `/file`, `/dns`)  
✅ **WebSocket Server** (Handles multiple real-time connections)  
✅ **Non-blocking I/O (libuv + IOCP)** for optimal performance  
✅ **Scalable Node.js concurrency model on Windows**  

## 🎯 Concepts Explored
- How **Windows IOCP** manages concurrent async I/O.
- How **Node.js (libuv)** schedules **CPU, File, and Network tasks** efficiently.
- Difference between **IOCP (Windows) vs. epoll (Linux)**.

## 🛠 Tech Stack
- **Node.js**
- **Express.js** (HTTP server)
- **WebSockets (`ws` library)**
- **File System (`fs`)**
- **Crypto (`crypto.pbkdf2`)**
- **DNS (`dns.lookup`)**

---

## 🚀 Installation & Running the Project

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/nodejs-libuv-projects/node-iocp-websocket-demo.git
cd node-iocp-websocket-demo
