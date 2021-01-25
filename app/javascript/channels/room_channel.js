import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received() {
    var node = document.createElement("p");
    var textnode = document.createTextNode(data.content.message);
    node.appendChild(textnode);
    document.getElementById("new_message").appendChild(node);
    document.getElementById('chat_message').value='';
  }
});
