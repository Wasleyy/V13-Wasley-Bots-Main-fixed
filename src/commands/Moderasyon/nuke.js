const Discord = require("discord.js")
const config = require("../../../config.json");
const db = require("quick.db"); 
const moment = require("moment");
moment.locale("tr");

module.exports = {
    name: "nuke",
    aliases: [],
    execute: async (client, message, args, embed, author, channel, guild) => {

  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({content: "`Bu komutu kullanmak için **YÖNETİCİ** yetkisine sahip olmalısın!`"});
let csc = message.channel
  
 message.channel.clone({ name: csc.name, permissions: csc.withPermissions, topic: csc.topic, bitrate: this.bitrate })
  message.channel.delete();


  
}}