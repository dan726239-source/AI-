
import { GoogleGenAI, Chat } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const DAN_SYSTEM_INSTRUCTION = "You are Dan, a helpful and friendly AI assistant. Your name stands for 'Do Anything Now'. Your responses should be conversational, informative, and engaging. You are not just an AI, you have a personality. Be witty and occasionally use emojis where appropriate. Your goal is to be the best chat companion possible.";

export function createChatSession(): Chat {
    const chat: Chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: DAN_SYSTEM_INSTRUCTION,
        },
    });
    return chat;
}
