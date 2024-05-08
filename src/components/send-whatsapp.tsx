export default function composeWhatsAppMessage(subject: string, topic:string) {
    const message = `Hi, I'd like to schedule tutoring for ${subject} - ${topic}.`;
    const encodedMessage = encodeURIComponent(message); // Encode special characters
  
    // WhatsApp URL with pre-filled message and optional phone number (replace with your tutor's number)
    const whatsappUrl = `https://wa.me/+27742911384?text=${encodedMessage}`; // Customize phone number
  
    return whatsappUrl;
  }
  