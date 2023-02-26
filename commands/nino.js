const {SlashCommandBuilder} = require('discord.js');

const answers = ['Que raro Nino desertando para irse con "los otros"', 'Ninguna novedad Nino cambiandonos', 'Ahí lo tenés al traidor', 'Vendepatria tenía que ser, porque no me sorprende de Nino', 'Nino es una _tramposa, algo altanera y mentirosa. En el amor, la más tramposa, y juega siempre al amor de una manera misteriosa_...', 'Tirando la de humo, típico de Nino', 'Andate con los otros dale, de paso llévate **esta** cagón', 'Mira como nos cambia, Nino teton', 'Dale andate, gordo gordo gordo', '🐂🐂🐂', 'Pudimos conquistar el mundo, pero escogiste revolcarte en la basura 🐀', `<:bastatrola:1079131794886111372>`];


function getRandomIndex(array){
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomElement = answers[randomIndex]
    return randomElement;
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nino')
        .setDescription('Mensajes de Nino gorreandonos :('),
    async execute(interaction){
        await interaction.reply(`${getRandomIndex(answers)}`);
    },
};