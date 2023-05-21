import 'dotenv/config';
import { Client } from "discord.js";

const TEST = process.env.TEST;

console.log("Bot is starting...");
console.log(`Le secret, c'est la: ${TEST}`);

const client = new Client({
    intents: []
});

// console.log(client);
