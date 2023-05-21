import { ICommand } from "./ICommand";
import { HelloCmd } from "./Hello";
import { Client, Interaction } from "discord.js";


export const CommandList: ICommand[] = [
  HelloCmd
];


export const onSlashCommand = async (client: Client, interaction: Interaction) => {

  console.log(`c'est une commande: ${interaction}`)

  if (interaction.isCommand()) {
    for (const Command of CommandList) {
      if (interaction.commandName === Command.data.name) {
        console.log('la commande à été reconnue !');
        await Command.run(interaction);
        break;
      }
    }
  }
};
