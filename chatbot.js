const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

const responses = {
  hello: "Hi there! How can I help you?",
  hi: "Hello! How can I assist you today?",
  hii: "Hello! How can I assist you today?",
  hey: "Hey! How can I help?",
  "good morning": "Good morning! Hope you have a great day!",
  "good afternoon": "Good afternoon! How can I assist you?",
  "good evening": "Good evening! What can I do for you?",
  "how are you": "I'm just a bot, but I'm doing well! How about you?",
  default:
    "hey hello! drop your message in our contact box we will connect to you soon.",
};

function sendMessage() {
  let userText = userInput.value.toLowerCase();
  let botResponse = responses[userText] || responses["default"];

  chatBox.innerHTML += `<p><strong>You:</strong> ${userText}</p>`;
  chatBox.innerHTML += `<p><strong>Aditya:</strong> ${botResponse}</p>`;

  userInput.value = "";
}

function toggleChatbot() {
    const chatContainer = document.getElementById("chatContainer");
    if (chatContainer.style.display === "block") {
        chatContainer.style.display = "none"; // Hide chatbox
    } else {
        chatContainer.style.display = "block"; // Show chatbox
    }
}
