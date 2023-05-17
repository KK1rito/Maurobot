//const//

const Discord = require("discord.js");
const client = new Discord.Client();





//prefix//

const prefix = "m/";



//log//

client.on("ready", () => {
  console.log('Mauro Bot è pronto!');
})






//ping//

client.on('message', message => {
  if (message.content.startsWith(prefix + "ping")) {  
    message.channel.send(`Pong!🏓 (${Math.round(client.ws.ping)}ms)`);
  }
});



//invite//

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "invite")) {
    message.channel.send("ECCO IL LINK FUCKING PROFESSIONALE: https://discord.com/oauth2/authorize?client_id=796160299601625158&scope=bot&permissions=2147483647");
  }
});




//dm//

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "hello")) {
    message.author.send("Yo :3");
  }
});




//latte di noci//

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "youtubo")) {
    message.channel.send("Latte Di Noci");
  }
});






//token//

client.login(process.env.token);