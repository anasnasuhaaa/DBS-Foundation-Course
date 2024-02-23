class MailService {
  constructor(sender) {
    this.sender = sender;
  }
  sendMessage(message, receiver) {
    console.log(`${this.sender} send ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  // Overriding Constructor
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }
  // Overriding Method
  sendMessage(message, receiver) {
    // memanggil method sendMessage pada superclass
    super.sendMessage(message, receiver);
    console.log("message sent via WhatsApp");
  }
}

const mailService = new MailService('Ansu')
const whatsAppService = new WhatsAppService('Nasuha', true)

mailService.sendMessage('Hello World!', 'Anna')
whatsAppService.sendMessage('Hi There! How are you?', 'Maria')