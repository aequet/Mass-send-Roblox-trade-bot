// Main Variables

const token = ""
const cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|"
const SelfUserId = "youruserid"
const channelId = "Discord Channel Id"
// other

import fetch from "node-fetch"
import axios from "axios"
import noblox from "noblox.js"
// import keepalive from "./keepalive.js"
console.clear()
import { Client, Intents } from 'discord.js'


const proxies = [""]
// free proxies if you want, https://proxy10.aequet2604.repl.co/v1/trades/send", "https://proxy1-1.aequet2604.repl.co/v1/trades/send", "https://proxy1-2.aequet2604.repl.co/v1/trades/send", "https://proxy1-3.aequet2604.repl.co/v1/trades/send", "https://proxy10.aequet2604.repl.co/v1/trades/send", "https://proxy11.aequet2604.repl.co/v1/trades/send
// if you want to make your own proxies go to "https://replit.com/@aequet2604/proxy10?v=1" and press the fork button, and then run, and enter your proxy/ies in proxies array.

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    client.channels.cache.get(channelId).send('I am ready!');
});

const prefix = "!"

  
// {"offers": [{"userId": 687018056,"userAssetIds": [SendingItems],},{"userId": 2023268272,"userAssetIds": [ReceivingItems],}]}

//async function adscraper() {
//    const ads = await axios("https://TradeAds.aequet2604.repl.co")
//        .then((res) => {
//            return res
//        }
//    )
//    let responce = ads.data.trade_ads
//    return responce
//}

// const ads = await adscraper()

async function main(UserId, SentItems, TargetUserId, ReceivingItems) {

    function random_item(items)
        {
  
            return items[Math.floor(Math.random()*items.length)];
     
        }


    // main

    const firstResponce = await fetch("https://auth.roblox.com", {
        headers: {
            Cookie: `.ROBLOSECURITY=${cookie};`,
            "Content-Length": "0",
        },
        method: "POST",
    });

    const secondResponse = await fetch("https://auth.roblox.com", {
        headers: {
            Cookie: `.ROBLOSECURITY=${cookie};`,
            "x-csrf-token": firstResponce.headers.get("x-csrf-token"),
            "Content-Length": "0",
        },
        method: "POST",
    });

    let xcsrf = firstResponce.headers.get("x-csrf-token")

    
    return fetch(random_item(proxies), {
        method: "POST",    
        headers: {
            Cookie: `.ROBLOSECURITY=${cookie};`,
            "x-csrf-token": xcsrf,
            "Content-Length": "0",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"offers": [{"userId": UserId,"userAssetIds": SentItems, robux: 0},{"userId": TargetUserId,"userAssetIds": ReceivingItems, robux: 0}]})
    })
    .then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((data) => {
        return data
    })
    //Then with the error genereted...
    .catch((error) => {
        console.error('Error:', error);
    });

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


// main(UserId, SentItems, TargetUserId, ReceivingItems)
// main(SelfUserId, [131159036299], 482507428, [130923804090])


// Trash code begins.

async function login() {

    // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
    // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie.
    const currentUser = await noblox.setCookie(cookie) 
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
}

login()

client.on("message", message => {
    client.user.setPresence({
        activities: [{ 
          name: "Mass Send Bot",
          type: "WATCHING"
        }],
        status: "idle"
    })

    const channel = message.channel.id // ID of the channel the message was sent in

    async function getUser(id) {
        let Username = await noblox.getUsernameFromId(id)
        return Username
    }



    let name = getUser(SelfUserId).then((username) => {

    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)



        if (args[0].toLowerCase() === prefix + "mass_send") {
            message.reply("Bot will send for: " + args[1])
            const itemtosendto = args[1]
            message.reply("Now insert UAID by using !uaid uaid")

        client.on("message", message2 => {
            if (!message2.guild) return
            let args2 = message2.content.trim().split(/ +/g)


            if (args2[0].toLowerCase() === prefix + "uaid") {
                message2.reply("Mass sending..")
                const UAID = args2[1]
                // MassSend(itemtosendto, UAID)

                async function getResellers() {
                    let Sellers = await noblox.getResellers(itemtosendto)
                    return Sellers
                }

                let Resselers = getResellers().then((ress) => {
                    var arr1b = []
                    arr1b.push(UAID)

                ress.forEach(x => {
                    var uaid1 = x.userAssetId
                    var uaid2 = []
                    uaid2.push(uaid1)
                    var res = main(SelfUserId, arr1b, x.seller.id, uaid2).then((responce3) => {
                        message.channel.send(JSON.stringify(responce3))
                    })
                })
                })
                


            }
        })
    }})
})

client.login(token)
