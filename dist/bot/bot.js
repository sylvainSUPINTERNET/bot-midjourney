"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = () => {
    const client = new discord_js_1.Client({
        intents: [discord_js_1.GatewayIntentBits.GuildInvites, discord_js_1.GatewayIntentBits.GuildMessages, discord_js_1.GatewayIntentBits.GuildMembers, discord_js_1.GatewayIntentBits.GuildPresences, discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.DirectMessages, discord_js_1.GatewayIntentBits.GuildMessages]
    });
    client.login(process.env.DISCORD_BOT_TOKEN);
    return client;
};
//# sourceMappingURL=bot.js.map