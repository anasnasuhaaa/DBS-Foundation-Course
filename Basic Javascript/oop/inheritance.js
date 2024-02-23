class WhatsAppService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }

  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}
const myWhatsApp = new WhatsAppService("John Doe");
myWhatsApp.sendMessage("Hello World!", "Jane Smith"); // John Doe sent Hello World! to Jane Smith
myWhatsApp.sendBroadcastMessage("This is a broadcast message.", [
  "Jane Smith",
  "Mark Johnson",
  ["Michael"],
]);

// Membuat class

// SuperClass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }
  sendMessage(message, receiver) {
    console.log(`${this.sender} send ${message} to ${receiver}`);
  }
}

// Subclass WhatsApp
class WhatsAppService2 extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

const message1 = new WhatsAppService2("Anas");
message1.sendBroadcastMessage("Hello Guys", [
  "John Doe",
  "John Wick",
  "Anies Baswedan",
]);

console.log(message1 instanceof WhatsAppService2);