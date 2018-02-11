module.exports = (client, message) => {
  if (!message.member.roles.has('BAN_MEMBERS')) {
    return message.reply('Ban Permission required to execute.');
  }
  if (message.mentions.users.size === 0) {
    return message.reply('Please type a user you want to ban like @Mikulasz12! jk pls no');
  }
  const BanMember = message.guild.member(message.mentions.users.first());
  if (!BanMember) {
    return message.reply('Invalid user, please use @ to mention a user');
  }
  if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
    return message.reply('I need BAN_MEMBER permission to execute this command!');
  }
  BanMember.ban();
  message.channel.send('User has been successfully banned!');
};