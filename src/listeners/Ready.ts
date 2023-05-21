import { Client, Events, REST, Routes } from "discord.js";

export default function ready(client: Client, commandList: any): void {
    client.once(Events.ClientReady, async () => {
        console.log(`${client.user?.username} est en ligne`);

        // const Guilds = client.guilds.cache.map(guild => guild.id);
        // console.log(Guilds);
        console.log(`${client.guilds.cache}`);

        const rest = new REST({ version: "9" }).setToken(process.env.TOKEN as string);
        const commandData = commandList.map((command: any) => command.data);

        await rest.put(
            Routes.applicationCommands(
                client.user?.id || "missing id"
            ),
            { body: commandData }
        );
    });
};


//                         1018115009508802590
//[ '537339420605415425', '1018115009508802590' ]
