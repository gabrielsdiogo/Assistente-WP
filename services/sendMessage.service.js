import twilio from 'twilio'
const accountSid = 'AC13a478e7a2137bee05fa041e01319509'; 
const authToken = 'e1fc8ecb41edb0ca1967f871c4950340'; 
const client = new twilio.Twilio(accountSid, authToken)


export async function sendTo(message){
    client.messages.create({
        //body: message,
        mediaUrl: ['https://e283-177-148-205-222.sa.ngrok.io/22.jpg'],
        from: "whatsapp:+14155238886",
        to: "whatsapp:+5511960961599",
      }).then((message) => console.log(message.sid)).done();
}


