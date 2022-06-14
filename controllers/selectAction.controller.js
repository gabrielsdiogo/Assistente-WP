import { sendTo } from "../services/sendMessage.service.js";

export async function choice(req, res){
    try {
        let key = req.body.Body.toUpperCase()

        console.log(req.body)

        switch (key) {
            case "!STATUS":
                console.log("comando !status")
                sendTo("Bot is alive!")
                break;
            case "!LEMBRETE":
                console.log("comando !lembrete")
                break;
                        
            default:
                break;
        }
    } catch (error) {
        
    }
}