const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', () => {
    console.log("Bot Ready !");
});

bot.login('process.env.TOKEN');

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "Citoyen");
    member.guild.channels.find("name", "arrivants").send(`:rocket: Bienvenue ${member.user.username} sur Impulsion Life France! :rocket:`)
    member.addRole(role)
});

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Les commandes disponibles :\n - !help pour afficher les commandes \n - !forum pour avoir le lien du forum \n - !serveur pour avoir l'IP du serveur \n - !ts pour avoir l'IP du TeamSpeak");
        console.log("Commande Help demandée !");
    }

});

bot.on('message', message => {
    if (message.content === prefix + "forum"){
        message.channel.sendMessage("le forum -> http://impulsionlifefrance.fr/forum/");
        console.log("Commande Forum demandée !");
    }

});

bot.on('message', message => {
    if (message.content === prefix + "serveur"){
        message.channel.sendMessage("IP du serveur -> ...");
        console.log("Commande IP demandée !");
    }

});

bot.on('message', message => {
    if (message.content === prefix + "ts"){
        message.channel.sendMessage("IP du TeamSpeak -> 54.37.65.23");
        console.log("Commande TS demandée !");
    }

});
