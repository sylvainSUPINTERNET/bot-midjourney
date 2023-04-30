"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
require('dotenv').config();
const Discord = require('discord.js');
const client = new discord_js_1.Client({
    intents: [discord_js_1.GatewayIntentBits.GuildInvites, discord_js_1.GatewayIntentBits.GuildMessages, discord_js_1.GatewayIntentBits.GuildMembers, discord_js_1.GatewayIntentBits.GuildPresences, discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.DirectMessages, discord_js_1.GatewayIntentBits.GuildMessages]
});
client.on('ready', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Logged in as ${client.user.tag}!`);
    // Call the /imagine command for the Midjourney bot with a prompt
    const midjourneyBotId = '936929561302675456'; // Replace with the ID of the Midjourney bot
    const prompt = 'This is my prompt';
    const command = `/imagine ${prompt}`; // Replace "!" with the Midjourney bot's command prefix
    const midjourneyBotChannel = yield client.channels.cache.get("1102026209472286781"); // Replace with the ID of the channel
    yield midjourneyBotChannel.send(command);
    console.log('Command sent to Midjourney bot!');
}));
client.login(process.env.DISCORD_BOT_TOKEN);
/* import { Client, ClientOptions, SlashCommandBuilder } from "discord.js";
import bot from "./bot/bot";
import { sendCommand } from "./interractions/sendCommand";
import ready from "./listeners/ready";


( async () => {

    const client = bot();
    ready(client);

    // sendCommand(client, "/imagine", "Imagine being a bot", process.env.DISCORD_CHANNEL_ID!);

    
    client.on('message', async message => {
        if (message.channel.id === process.env.DISCORD_CHANNEL_ID! ) {
        console.log(`New message: ${message.content}`);
        }
    });

    // Fetch the server and bot user objects
    const server = await client.guilds.fetch("1102026209006735411");
    const botUser = await server.members.fetch("936929561302675456");
    const channel = await client.channels.fetch("1102026209472286781");


    // List the bot's permissions and roles
    console.log(`Bot Permissions: ${botUser.permissions.toArray().join(', ')}`);
    console.log(`Bot Roles: ${botUser.roles.cache.map(role => role.name).join(', ')}`);


    channel.send("/imagine mer");


    const midjourneyBotChannel = await client.channels.cache.get('1102026209472286781'); // Replace with the ID of the channel



})(); */ 
//# sourceMappingURL=index.js.map