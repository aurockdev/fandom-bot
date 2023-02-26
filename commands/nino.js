const {SlashCommandBuilder} = require('discord.js');

const answers = ['Que raro Nino desertando para irse con "los otros"', 'Ninguna novedad Nino cambiandonos', 'Ahí lo tenés al traidor', 'Vendepatria tenía que ser, porque no me sorprende de Nino', 'Nino es una _tramposa, algo altanera y mentirosa. En el amor, la más tramposa, y juega siempre al amor de una manera misteriosa_...', 'Tirando la de humo, típico de Nino', 'Andate con los otros dale, de paso llévate **esta** cagón', 'Mira como nos cambia, Nino teton', 'Dale andate, gordo gordo gordo', '🐂🐂🐂', 'Pudimos conquistar el mundo, pero escogiste revolcarte en la basura 🐀', `<:bastatrola:1079131794886111372>`, '_Rata inmunda...animal rastrero...escoria de la vida, adefesio mal hecho_', '🐖', 'Peor que la gata flora', 'te pesan las teeetassss', 'gordogordogordogordo', '60kg cada teta', `<a:anigay:1020425207665659955>`, 'Pero andate bien a la mierda de paso', 'la novia: 👸🏻 / el cuerno: 👹', 'Nino nunca te va a cambiar por algo mejor, sino por algo más fácil 💅', 'La peor traición no viene de tus enemigos, sino de tus amigos.', 'Amigo de todos no es amigo de nadie.', `<:gays:1020425455339315361>`];


function getRandomIndex(array){
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomElement = answers[randomIndex]
    answers.splice(randomIndex, 1);
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