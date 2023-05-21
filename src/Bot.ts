import 'dotenv/config';
import { Client, GatewayIntentBits } from "discord.js";
import ready from "./listeners/Ready";
import interactionCreate from './listeners/interactionCreate';
import { validateEnv } from './validateEnv';
import { CommandList, onSlashCommand } from './commands/CommandList';

(async () => {
  if(!validateEnv()) return;

  const token = process.env.TOKEN; // add your token here  
  console.log("Bot is starting...");
  
  const client = new Client({
      intents: [GatewayIntentBits.Guilds]
  });
  
  ready(client, CommandList);
  interactionCreate(client, onSlashCommand);
  
  await client.login(token);
})();
