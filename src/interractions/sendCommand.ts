import { Client } from "discord.js";


export const sendCommand = async ( client: Client, command: "/imagine" = "/imagine", prompt: string , channel_id: string = process.env.DISCORD_CHANNEL_ID!): Promise<void> => {
    

    const value = client.channels;

    console.log("chached");
    console.log(value);

};