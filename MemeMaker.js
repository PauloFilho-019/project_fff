const Discord = require("discord.js");
const bot = new Discord.Client();
require("dotenv").config();
const ytdl = require("ytdl-core");
const streamOptions = { seek: 0, volume: 1 };

bot.login(process.env.TOKEN);

bot.on("ready", () => {
  console.log('estou pronto para ser usado"!');
});

const commands = {
  rapaz: "https://www.youtube.com/watch?v=Jvl0L9GRH6o",
  uepa: "https://youtu.be/UpNy0v_ur-o",
  pare: "https://www.youtube.com/watch?v=QO7fw-OcOD4",
  irra: "https://youtu.be/CSDVrF5gAus",
};

bot.on("message", (msg) => {
  if (msg.author.bot) {
    return;
  }
  const [prefixo, ...rest] = msg.content;
  const command = rest.join("");
  if (prefixo !== "!") {
    return;
  }
  function toca(youtubeLink) {
    let VoiceChannel = msg.guild.channels.cache.find(
      (channel) => channel.id === "832066730477879322"
    );

    if (VoiceChannel == null) {
      console.log("Canal não encontrado");
    }

    if (VoiceChannel !== null) {
      console.log("Canal foi encontrado");

      VoiceChannel.join()
        .then((connection) => {
          const stream = ytdl(youtubeLink, { filter: "audioonly" });

          const DJ = connection.play(stream, streamOptions);
          DJ.on("end", (end) => {
            VoiceChannel.leave();
          });
        })
        .catch(console.error);
    }
  }

  if (command === "info") {
    msg.channel.send(
      "Projeto F.F.F (Futebol, Feijoada & Funk) é um bot que reproduz efeitos sonoros classicos da tv Brasileira desde o 'Rapaz' do xaropinho, até o João gordo brigando com o dolabella.ㅤㅤㅤㅤㅤㅤㅤㅤ ------------Comandos Disponiveis (No Momento): '!Rapaz', '!Irra', '!Uepa' e '!Pare------------"
    );
  }

  toca(commands[command]);
});
