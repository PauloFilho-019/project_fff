const Discord = require("discord.js");
const bot = new Discord.Client();
require("dotenv").config();
const ytdl = require("ytdl-core");
const streamOptions = { seek: 0, volume: 1 };

bot.login(process.env.TOKEN);

bot.on("ready", () => {
  //message.channel.send("Digita um !Info pra ver os comandos disponiveis e umas fita a mais ae")
  console.log('estou pronto para ser usado"!');
});

bot.on("message", (msg) => {
  if (msg.author.bot) {
    return;
  }
  function toca() {
    if (msg.content.indexOf("youtube") !== -1) {
      let youtubeLink = CompleteMessage[1];

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
  }
  if (msg.content === "!Info") {
    msg.channel.send(
      "Projeto F.F.F (Futebol, Feijoada & Funk) é um bot que reproduz efeitos sonoros classicos da tv Brasileira desde o 'Rapaz' do xaropinho, até o João gordo brigando com o dolabella.ㅤㅤㅤㅤㅤㅤㅤㅤ ------------Comandos Disponiveis (No Momento): '!Rapaz', '!Irra', '!Uepa' e '!Pare------------"
    );
  }
  if (msg.content === "!Rapaz") {
    toca.youtubeLink = "https://www.youtube.com/watch?v=Jvl0L9GRH6o";
  }
  if (msg.content === "!Uepa") {
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
          const stream = ytdl("https://youtu.be/UpNy0v_ur-o", {
            filter: "audioonly",
          });

          const DJ = connection.play(stream, streamOptions);
          DJ.on("end", (end) => {
            VoiceChannel.leave();
          });
        })
        .catch(console.error);
    }
  }
  if (msg.content === "!Pare") {
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
          const stream = ytdl("https://www.youtube.com/watch?v=QO7fw-OcOD4", {
            filter: "audioonly",
          });

          const DJ = connection.play(stream, streamOptions);
          DJ.on("end", (end) => {
            VoiceChannel.leave();
          });
        })
        .catch(console.error);
    }
  }
  if (msg.content === "!Irra") {
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
          const stream = ytdl("https://youtu.be/CSDVrF5gAus", {
            filter: "audioonly",
          });

          const DJ = connection.play(stream, streamOptions);
          DJ.on("end", (end) => {
            VoiceChannel.leave();
          });
        })
        .catch(console.error);
    }
  }
});

/*const executor = muse => {
    const muses = {
      Rapaz :'https://www.youtube.com/watch?v=Jvl0L9GRH6o',
      Uepa :'https://youtu.be/UpNy0v_ur-o',
      Pare :'https://www.youtube.com/watch?v=QO7fw-OcOD4',
      Irra :'https://youtu.be/CSDVrF5gAus'
    }
    return muses[muse]
}*/
