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
exports.sendCommand = void 0;
const sendCommand = (client, command = "/imagine", prompt, channel_id = process.env.DISCORD_CHANNEL_ID) => __awaiter(void 0, void 0, void 0, function* () {
    const value = client.channels;
    console.log("chached");
    console.log(value);
});
exports.sendCommand = sendCommand;
//# sourceMappingURL=sendCommand.js.map