const API_URL = "https://your-backend-url.com/chat"; // Replace with your backend URL

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    // Append user message to chat
    appendMessage(userInput, "user");

    // Call backend API
    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        appendMessage(data.response, "bot");
    })
    .catch(error => {
        appendMessage("Sorry, I couldn't get a response. Try again later.", "bot");
    });

    // Clear input
    document.getElementById("user-input").value = "";
}

function appendMessage(text, sender) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.className = sender === "user" ? "user-message" : "bot-message";
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
}
