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

// Subclass Email
class EmailSerice extends MailService {
  sendEmailMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

const message1 = new WhatsAppService2("Anas");
message1.sendBroadcastMessage("Hello Guys", [
  "John Doe",
  "John Wick",
  "Anies Baswedan",
]);
console.log(message1 instanceof WhatsAppService2);

const emailMessage = new EmailSerice('John Wick')
emailMessage.sendEmailMessage("Hi John! How are you?", "johnwick@gmail.com", 3000)