import { Client } from "discord.js";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        
        // const Guilds = client.guilds.cache.map(guild => guild.id);
        // console.log(Guilds);
        console.log(`${client.guilds.cache}`);

        console.log(`${client.user.username} is online`);
    });
};


//                         1018115009508802590
//[ '537339420605415425', '1018115009508802590' ]