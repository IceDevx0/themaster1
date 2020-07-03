const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://bestdiscordb.glitch.me/`);
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 
client.on('message', msg => {   if (msg.content === 'هلا') {     msg.reply('هلا منور');   } });
client.on('message', msg => {   if (msg.content === 'السلام عليكم') {     msg.reply('وعليكم السلام ');   } });
client.on('message', msg => {   if (msg.content === 'باك') {     msg.reply('ولكم :heart:');   } });


client.on("message", message => {
    if (message.content == `${prefix}colors`) {
        var fsn = require('fs-nextra');
        fs.readdir('./img', async (err, files) => {
            var f = files[Math.floor(Math.random() * files.length)];
            var {
                Canvas
            } = require('canvas-constructor');
            var x = 0;
            var y = 0;
             if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0) return message.reply("can't find any colors")
            message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(() => {
                x += 100;
                if (x > 100 * 12) {
                    x = 100;
                    y += 80;
                }
            });
            var image = await fsn.readFile(`./img/${f}`);
            var xd = new Canvas(100 * 11, y + 250)
                .addBeveledImage(image, 0, 0, 100 * 11, y + 250, 50)
                .setTextBaseline('middle')
                .setColor('white')
                .setTextSize(60)
                .addText(`Colors list : ${message.guild.name}`, 140, 40);
            x = 0;
            y = 150;
            message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(role => {
                x += 75;
                if (x > 100 * 10) {
                    x = 75;
                    y += 80;
                }
                xd
                    .setTextBaseline('middle')
                    .setTextAlign('center')
                    .setColor(role.hexColor)
                    .addBeveledRect(x, y, 60, 60, 15)
                    .setColor('white');
                if (`${role.name}`.length > 2) {
                    xd.setTextSize(30);
                } else if (`${role.name}`.length > 1) {
                    xd.setTextSize(40);
                } else {
                    xd.setTextSize(50);
                }
                xd.addText(role.name, x + 30, y + 30);
            });
            message.channel.sendFile(xd.toBuffer());
        });
    }
})


client.on('message', message => {   
     if (message.content === "#ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("RANDOM")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
 

  message.channel.sendEmbed(embed);
    }
});


const Prefix = '#';

client.on('message', function(msg) {

    if(msg.content.startsWith (prefix + 'server')) {
      if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
      let embed = new Discord.RichEmbed()
      .setColor('#000000')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`${msg.guild.name}`,true)
      .addField(':id: **Server ID:**',`${msg.guild.id}`,true)
      .addField('📅** Created On**',msg.guild.createdAt.toLocaleString())
      .addField('👑** Owned By**',`${msg.guild.owner}`,true)
      .addField(':busts_in_silhouette:  **Members **' + `[ ${msg.guild.memberCount} ]`,`**${msg.guild.members.filter(m=>m.presence.status == 'online').size}**` + ' Online')
      .addField(':speech_balloon: Channels ' + `[ ${msg.guild.channels.size} ]`,`**${msg.guild.channels.filter(m => m.type === 'text').size}**` + ' Text | ' + `**${msg.guild.channels.filter(m => m.type === 'voice').size}**` + ' Voice')//tt
      .addField(':earth_africa: Others','**Region: **' + `${msg.guild.region}` + ' **Verification Level:** ' + `${msg.guild.verificationLevel}`)
      .addField(':closed_lock_with_key:** Rules **' + `[ ${msg.guild.roles.size} ]`,'To see a list with all roles use **#roles**');
      msg.channel.send({embed:embed});
    }
  });


client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '#bc') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● Server  :***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})


client.on("message", message => {
    var prefix = "#";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("#clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});


client.on("message",message => {
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar")){
const mention = message.mentions.users.first()

if(!mention) return console.log("") 
let embed = new Discord.RichEmbed()
.setColor("BLACK")
.setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
.setTitle("Avatar Link")
.setURL(`${mention.avatarURL}`)
.setImage(`${mention.avatarURL}`)
.setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
    message.channel.send(embed)
}
})

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar server")) {
    let doma = new Discord.RichEmbed()
    .setColor("BLACK")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1]
var avt = args || message.author.id;    
    client.fetchUser(avt).then(user => {
     avt = user;
  let embed = new Discord.RichEmbed() 
  .setColor("BLACK")
  .setAuthor(`${avt.tag}`, avt.avatarURL)
  .setTitle("Avatar Link")
  .setURL(avt.avatarURL)
  .setImage(avt.avatarURL)
  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed) 
    })
  }
})


client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'tic')) {
        let modlog = client.channels.find('name', 'tic');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`اضغط على الصح لفتح تكت `).then(msg => {
       
       
        msg.react('✅')
       .then(() => msg.react('✅'))
     
     
 
       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
     
                                                       
                               active.on("collect", r => {
                                  if (
      message.guild.channels.exists(
        "name",
        `ticket-${message.author.id}`
      )
    )
      return;
    message.guild
      .createChannel(`ticket-${message.author.id}`, "text")
      .then(c => {
        let role = message.guild.roles.find("name", "support");
        let role2 = message.guild.roles.find("name", "@everyone");
        let role3 = message.guild.roles.find("name", "support new");
        c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        c.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        
      
        const embed = new Discord.RichEmbed()
          .setColor(0xcf40fa)
          .addField(
            `Hey ${message.author.username}!`,
            `الكلام يلي يجي بل تكت`
          )
          .setTimestamp();
        c.send({
          embed: embed
        }
              )
                                   })
                                   })
       }
                                                                    
                                   );
       }
}
          )



client.on('message', message => {
  if(message.content.split(' ')[0] == `#{prefix}kick`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(':no_entry: | لا تمتلك صلاحية طرد الاعضاء!');
      if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.channel.send(':no_entry: | انا لا امتلك صلاحية طرد الاعضاء!');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send("نرجوا اتباع التنسيق الاتي: ogkick @Name والسبب");
      if(!reason) reason = 'No reason provided.';
      if(user.user.id === message.author.id) return message.channel.send(':no_entry: | لماذا تريد طرد نفسك؟');
      if(user.user.id === message.guild.owner.id) return message.channel.send(':no_entry: | محاولة فاشلة جميلة :3');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`:no_entry: | لا يمكنك طرد **${user.user.username}** لأن رتبته اعلي منك!`);
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | لا يمكنني طرد **${user.user.username}** لأن رتبته اعلي من رتبتي!`);
      if(!message.guild.member(user.user).kickable) return message.channel.send(`:no_entry: | لا يمكنني طرد **${user.user.username}** `);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`:no_entry: | لا يمكننك طرد **${user.user.username}** لأنه يمتلك رتبة عالية!`);
      message.guild.member(user).kick(reason, user);
      message.channel.send(`:white_check_mark: | تم بنجاح طرد ${user.user.username} من السيرفر! :airplane: ``${reason}```);
    }
});


client.on('message', message => {
                      if (message.content.startsWith(prefix + 'اسرع')) {
                        if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                      
                      const type = require('./2sr3.json');
                      const item = type[Math.floor(Math.random() * type.length)];
                      const filter = response => {
                          return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                      };
                      message.channel.send('** لديك 15 ثانيه لكتابه هذه الكلمه بسرعة**').then(msg => {
                      
                            
                      msg.channel.send(`${item.type}`).then(() => {
                              message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                              .then((collected) => {
                          message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من كتابه هذه الكلمه بسرعه**`);
                          console.log(`[Typing] ${collected.first().author} typed the word.`);
                                })
                                .catch(collected => {
                                  message.channel.send(`:x: **لم يتمكن احد من كتابه هذه الكلمه في الوقت المناسب**`);
                                })
                          })
                        })
                      }
                      });



const discord = require('discord.js');
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity('', { type: 'PLAYING' })
});



