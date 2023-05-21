import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { ICommand } from "./ICommand";

export const Spammer: ICommand = {
  data: new SlashCommandBuilder()
    .setName('parle')
    .setDescription('dit quelque chose d\'interessant !'),
  run: async (interaction: CommandInteraction) => {
    interaction.reply("va dans tes dm.");
    
    const members = interaction.guild?.members;
    console.log(`${JSON.stringify(members)}`);
    const cobaye = await members?.fetch('1109891850673856573');

    {
      let dms = await cobaye?.createDM(true);
      await dms?.send("Laisse moi te parler de mon projet d'investissement immobilier sur plusieurs génération!");
      await dms?.send("https://i.kym-cdn.com/photos/images/newsfeed/001/204/477/a21.jpg");
    };
  }
}
