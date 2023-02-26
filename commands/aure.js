const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aure')
        .setDescription('respuesta cuando se enojan con aure'),
    async execute(interaction){
        await interaction.reply('***Auri***: Qué te metes con mi tocayo?');
    },
};