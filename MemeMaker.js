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
  qisso:
    "https://www.youtube.com/watch?v=ou3BlCaj1DM&list=PLJxFlYsd38rLghWxPrtoX2mL7jXCrZq_M&index=9",
  ratinho:
    "https://www.youtube.com/watch?v=-d6wB4KyuUk&list=PLJxFlYsd38rLghWxPrtoX2mL7jXCrZq_M&index=11",
  tarzan:
    "https://www.youtube.com/watch?v=dvZIySi9-5Q&list=PLJxFlYsd38rLghWxPrtoX2mL7jXCrZq_M&index=15",
  grito:
    "https://www.youtube.com/watch?v=RM88KhLw0oA&list=PLRyDuP997asbuX7phvrSD8-LKhcvEXHox&index=16",
  gatinho:
    "https://www.youtube.com/watch?v=OutIegT8HBg&list=PLRyDuP997asbuX7phvrSD8-LKhcvEXHox&index=10",
  suspense:
    "https://www.youtube.com/watch?v=GS7tHGWMDS4&list=PLier33pDdoyejhHwEqeKSST93RV_BKIig&index=19",
  duelo: "https://www.youtube.com/watch?v=tv8nZHN29YI",
  gordo: "https://www.youtube.com/watch?v=c11OYJstwIQ",
  cair: "https://www.youtube.com/watch?v=lUddmmLzaOQ&list=PLIeGqcQGFzBXub2wpXDiDX_5xBHFBWiJU&index=29",
  sarcas:
    "https://www.youtube.com/watch?v=74DJ5JbTirI&list=PLIeGqcQGFzBXub2wpXDiDX_5xBHFBWiJU&index=28",
  end: "https://www.youtube.com/watch?v=Fmvnfxyhwbw",
  cazalb:
    "https://www.youtube.com/watch?v=B132m_6Z150&list=PLabbG5fpT6yNZKI6OYwk8UP2PafB1hVG0&index=25",
  cburro:
    "https://www.youtube.com/watch?v=dfLFNQFpX7Q&list=PLabbG5fpT6yNZKI6OYwk8UP2PafB1hVG0&index=28",
  demenci:
    "https://www.youtube.com/watch?v=ypioV-jvT3o&list=PLabbG5fpT6yNZKI6OYwk8UP2PafB1hVG0&index=64",
  toms: "https://www.youtube.com/watch?v=D0BZOsPn74M",
  gritola: "https://www.youtube.com/watch?v=9FHw2aItRlw",
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

  if (command === "iinfo") {
    msg.channel.send(
      "Projeto F.F.F (Futebol, Feijoada & Funk) é um bot que reproduz efeitos sonoros classicos da tv Brasileira desde o 'Rapaz' do xaropinho, até o João gordo brigando com o dolabella, Comandos Disponiveis (No Momento):"
    );

    msg.channel.send(Object.keys(commands).join(", "));
    return;
  }

  const chosen = commands[command];
  if (chosen) {
    toca(chosen);
    return;
  }
  msg.channel.send(
    "Este comando não existe, digite !iinfo para ver os comandos existentes."
  );
});
