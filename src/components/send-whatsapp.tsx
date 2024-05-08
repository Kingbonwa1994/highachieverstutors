export default function composeWhatsAppMessage(subject: string, topic:string) {
    const message = `Hi, I'd like to schedule tutoring for ${subject} - ${topic}.`;
    const encodedMessage = encodeURIComponent(message); // Encode special characters
    const whatsappUrl = `https://wa.me/+27742911384?text=${encodedMessage}`; // Customize phone number
  
    return whatsappUrl;
  }
  