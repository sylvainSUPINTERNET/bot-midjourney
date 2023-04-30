import { Client, GatewayIntentBits  } from "discord.js";

export default (): Client => {

    const client = new Client({
        intents: [GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences, GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages] 
    });
    client.login(process.env.DISCORD_BOT_TOKEN!);

    return client;
};