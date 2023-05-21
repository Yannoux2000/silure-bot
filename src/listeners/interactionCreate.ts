import { Client, Events, Interaction } from "discord.js";

export default (client: Client, onSlashCommand: any): void => {
  client.once(Events.InteractionCreate, async (interaction: Interaction) => {

    console.log(`interaction généré : ${interaction}`);

    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
      await onSlashCommand(client, interaction);
    }
  });
};
