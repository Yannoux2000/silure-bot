import 'dotenv/config';
import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/Ready";

const token = process.env.TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});
client.login(token);

ready(client);
