const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By ♛ 『DE』 NovritschPro#6808");


client.on("ready", () => {
let channel =     client.channels.get("510838272675545099")
setInterval(function() {
channel.send(`فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي`);
}, 50)
})

















        var prefix = "$";
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "spam") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR**');


   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
