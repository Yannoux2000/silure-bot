import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { ICommand } from "./ICommand";

export const HelloCmd: ICommand = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('si ça ping, alors ça fait pong?'),
  run: async (interaction: CommandInteraction) => {
    console.log('il a dit hello :poggers:');
    interaction.reply("PONG! TARBA !");
  }
}

// export function async execute(interaction: BaseInteraction) {
// 	await interaction.reply('Pong!')
// }
