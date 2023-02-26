const { REST, Routes} = require('discord.js');
const { clientID, guildID, token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
//Grab all the command files from the commands directory you created early
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

//Grab the SlashCommandBuilder#toJson() output of each command's data for deployment
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

//Construct and prepare an instance of the REST module 
const rest = new REST({ version: '10' }).setToken(token);

//and deploy your commands

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // the put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(
            Routes.applicationCommands(clientID),
            { body: commands },
        );


            console.log(`Succesfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        //And of course, make sure you catch and log any errors! 
        console.error(error);
    }
})();