const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: false,
    },
});

quotes = [
    "If not for Kazuma, there could've been worse casualties in the Destroyer battle.",
    "The only crimes Kazuma commits are minor ones, like sexual harassment.",
    "I'm sure I could've stopped Kazuma!",
    "Chomusuke.",
    "Wh-Wh-What should we do?!",
    "Having already cast my explosion magic,",
    "Excuse me, but I think I'm slowly being swallowed.",
    "This must be one of those 'Hey, it's me!' scams that Kazuma described before.",
    "I can't believe I get to use explosion magic twice in a day—",
    "What is it? Is this sexual harassment?",
    "Wahahahahaha! My name is Megumin, the number one mage of Axel! Come, you shall all become my experience points today!",
    "Ex-PLOSION~!",
    "Darker than black, darker than darkness, combine with my intense crimson. Time to wake up, descend to these borders and appear as an intangible distortion. Dance, dance, dance! May a destructive force flood my torrent of power, a destructive force like no other! Send all creation to its source! Come out of your abyss! Humanity knows no other more powerful offensive technique! It is the ultimate magical attack! Explosion!",
    
]

client.on("message", msg => {
    if(msg.content === "!quote") {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        msg.reply(quote);
    }
})

client.on("message", msg => {
    if(msg.content === '!random') {
        msg.reply("Wait a minute, please.");
        (async () => {
            const results = await google.scrape('megumin', 200);
            console.log('results', results);
            let num = Math.floor(Math.random() * results.length);
            console.log(num);
            let reply = await results[num]['url'];
            console.log(reply);
            msg.reply(reply)
                .then(() => console.log(`'Replied to message '${msg.content}`))
        })();
    }
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
    if(msg.content === '!ping') {
        msg.reply('pong');
    }
})

client.login('OTY1MzEyMzI3NDg0MzA5NTY0.YlxXKQ.Ux89G2b0o5IZxHAetutvAqtzAkc');