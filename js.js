function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        let chatBox = document.getElementById("chat-box");
        let newMessage = document.createElement("p");
        newMessage.className = "message";
        newMessage.textContent = userInput;
        chatBox.appendChild(newMessage);
        document.getElementById("user-input").value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}