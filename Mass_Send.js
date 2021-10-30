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

    
    fetch("https://trades.roblox.com/v1/trades/send", {
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
        var retdata = data
        console.log('Success:', data);
    })
    //Then with the error genereted...
    .catch((error) => {
        console.error('Error:', error);
    });

}

const resdata = await main()
console.log(resdata)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


// main(UserId, SentItems, TargetUserId, ReceivingItems)
// main(SelfUserId, [131159036299], 482507428, [130923804090])


// Trash code begins.

async function MassSend(ITEMID, SendingOffer) {

    // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
    // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie.
    const currentUser = await noblox.setCookie(cookie) 
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)

    // Do everything else, calling functions and the like.
    const Resselers = await noblox.getResellers(ITEMID)
    const amount = Resselers.length
    var arr1b = []
    arr1b.push(SendingOffer)
    if (amount > 1) {

        let r1 = Resselers[0]
        var arr1 = []
        const x =+ 1
        arr1.push(r1.userAssetId)
        main(SelfUserId, arr1b, r1.seller.id, arr1)
        sleep(2000)

        if (amount > 2) {
            let r2 = Resselers[1]
            var arr2 = []
            const x =+ 1
            arr2.push(r2.userAssetId)
            main(SelfUserId, arr1b, r2.seller.id, arr2)

            if (amount > 3) {
                let r3 = Resselers[2]
                const x =+ 1
                var arr3 = []
                arr3.push(r3.userAssetId)
                main(SelfUserId, arr1b, r3.seller.id, arr3)

                if (amount > 4) {
                    let r4 = Resselers[3]
                    const x =+ 1
                    var arr4 = []
                    arr4.push(r4.userAssetId)
                    main(SelfUserId, arr1b, r4.seller.id, arr4)

                    if (amount > 5) {
                        let r5 = Resselers[4]
                        const x =+ 1
                        var arr5 = []
                        arr5.push(r5.userAssetId)
                        main(SelfUserId, arr1b, r5.seller.id, arr5)
                        
                        sleep(1000)
                        if (amount > 6) {
                            let r6 = Resselers[5]
                            const x =+ 1
                            var arr6 = []
                            arr6.push(r6.userAssetId)
                            main(SelfUserId, arr1b, r6.seller.id, arr6)

                        }
                        if (amount > x) {
                            let r7 = Resselers[6]
                            const x =+ 1
                            var arr7 = []
                            arr7.push(r7.userAssetId)
                            main(SelfUserId, arr1b, r7.seller.id, arr7)

                        }
                        if (amount > x) {
                            let r8 = Resselers[7]
                            const x =+ 1
                            var arr8 = []
                            arr8.push(r8.userAssetId)
                            main(SelfUserId, arr1b, r8.seller.id, arr8)

                        }
                        if (amount > x) {
                            let r9 = Resselers[8]
                            const x =+ 1
                            var arr9 = []
                            arr9.push(r9.userAssetId)
                            main(SelfUserId, arr1b, r9.seller.id, arr9)
                            sleep(1000)

                        }
                        if (amount > x) {
                            let r10 = Resselers[9]
                            const x =+ 1
                            var arr10 = []
                            arr10.push(r10.userAssetId)
                            main(SelfUserId, arr1b, r10.seller.id, arr10)

                        }
                        if (amount > x) {
                            let r11 = Resselers[10]
                            const x =+ 1
                            var arr11 = []
                            arr11.push(r11.userAssetId)
                            main(SelfUserId, arr1b, r11.seller.id, arr11)

                        }
                        if (amount > x) {
                            let r12 = Resselers[11]
                            const x =+ 1
                            var arr12 = []
                            arr12.push(r12.userAssetId)
                            main(SelfUserId, arr1b, r12.seller.id, arr12)

                        }
                        if (amount > x) {
                            let r13 = Resselers[12]
                            const x =+ 1
                            var arr13 = []
                            arr13.push(r13.userAssetId)
                            main(SelfUserId, arr1b, r13.seller.id, arr13)
                            sleep(1000)

                        }
                        if (amount > x) {
                            let r14 = Resselers[13]
                            const x =+ 1
                            var arr14 = []
                            arr14.push(r14.userAssetId)
                            main(SelfUserId, arr1b, r14.seller.id, arr14)

                        }
                        if (amount > x) {
                            let r15 = Resselers[14]
                            const x =+ 1
                            var arr15 = []
                            arr15.push(r15.userAssetId)
                            main(SelfUserId, arr1b, r15.seller.id, arr15)

                        }
                        if (amount > x) {
                            let r16 = Resselers[15]
                            const x =+ 1
                            var arr16 = []
                            arr16.push(r16.userAssetId)
                            main(SelfUserId, arr1b, r16.seller.id, arr16)

                        }
                        if (amount > x) {
                            let r17 = Resselers[16]
                            const x =+ 1
                            var arr17 = []
                            arr17.push(r17.userAssetId)
                            main(SelfUserId, arr1b, r17.seller.id, arr17)
                            sleep(1000)

                        }
                        if (amount > x) {
                            let r18 = Resselers[17]
                            const x =+ 1
                            var arr18 = []
                            arr18.push(r18.userAssetId)
                            main(SelfUserId, arr1b, r18.seller.id, arr18)

                        }
                        if (amount > x) {
                            let r19 = Resselers[18]
                            const x =+ 1
                            var arr19 = []
                            arr19.push(r19.userAssetId)
                            main(SelfUserId, arr1b, r19.seller.id, arr19)

                        }
                        if (amount > x) {
                            let r20 = Resselers[19]
                            const x =+ 1
                            var arr20 = []
                            arr20.push(r20.userAssetId)
                            main(SelfUserId, arr1b, r20.seller.id, arr20)

                            if (amount > 21) {
                            let r21 = Resselers[20]
                            const x =+ 1
                            var arr21 = []
                            arr21.push(r21.userAssetId)
                            main(SelfUserId, arr1b, r21.seller.id, arr21)
                            sleep(1000)

                            if (amount > 22) {
                                let r22 = Resselers[21]
                                const x =+ 1
                                var arr22 = []
                                arr22.push(r21.userAssetId)
                                main(SelfUserId, arr1b, r22.seller.id, arr22)

                                if (amount > 23) {
                                    let r23 = Resselers[22]
                                    const x =+ 1
                                    var arr23 = []
                                    arr23.push(r23.userAssetId)
                                    main(SelfUserId, arr1b, r23.seller.id, arr23)

                                    if (amount > 24) {
                                        let r24 = Resselers[23]
                                        const x =+ 1
                                        var arr24 = []
                                        arr24.push(r24.userAssetId)
                                        main(SelfUserId, arr1b, r24.seller.id, arr24)
                                        
                                        if (amount > 25) {
                                            let r25 = Resselers[24]
                                            const x =+ 1
                                            var arr25 = []
                                            arr25.push(r25.userAssetId)
                                            main(SelfUserId, arr1b, r25.seller.id, arr25)
                                            sleep(1000)

                                            if (amount > 26) {
                                                let r26 = Resselers[25]
                                                const x =+ 1
                                                var arr26 = []
                                                arr26.push(r26.userAssetId)
                                                main(SelfUserId, arr1b, r26.seller.id, arr26)

                                                if (amount > 27) {
                                                    let r27 = Resselers[26]
                                                    const x =+ 1
                                                    var arr27 = []
                                                    arr27.push(r27.userAssetId)
                                                    main(SelfUserId, arr1b, r27.seller.id, arr27)

                                                    if (amount > 28) {
                                                        let r28 = Resselers[27]
                                                        const x =+ 1
                                                        var arr28 = []
                                                        arr28.push(r28.userAssetId)
                                                        main(SelfUserId, arr1b, r28.seller.id, arr28)
                                                        
                                                        if (amount > 29) {
                                                            let r29 = Resselers[28]
                                                            const x =+ 1
                                                            var arr29 = []
                                                            arr29.push(r29.userAssetId)
                                                            main(SelfUserId, arr1b, r29.seller.id, arr29)
                                                            sleep(2000)

                                                            if (amount > 30) {
                                                                let r30 = Resselers[29]
                                                                const x =+ 1
                                                                var arr30 = []
                                                                arr30.push(r30.userAssetId)
                                                                main(SelfUserId, arr1b, r30.seller.id, arr30)
                                                                
                                                                if (amount > 31) {
                                                                    let r31 = Resselers[30]
                                                                    const x =+ 1
                                                                    var arr31 = []
                                                                    arr31.push(r31.userAssetId)
                                                                    main(SelfUserId, arr1b, r31.seller.id, arr31)
                                                                    
                                                                    if (amount > 32) {
                                                                        let r32 = Resselers[31]
                                                                        const x =+ 1
                                                                        var arr32 = []
                                                                        arr32.push(r31.userAssetId)
                                                                        main(SelfUserId, arr1b, r32.seller.id, arr32)

                                                                        if (amount > 33) {
                                                                            let r33 = Resselers[32]
                                                                            const x =+ 1
                                                                            var arr33 = []
                                                                            arr33.push(r33.userAssetId)
                                                                            main(SelfUserId, arr1b, r33.seller.id, arr33)
                                                                            
                                                                            if (amount > 34) {
                                                                                let r34 = Resselers[33]
                                                                                const x =+ 1
                                                                                var arr34 = []
                                                                                arr34.push(r34.userAssetId)
                                                                                main(SelfUserId, arr1b, r34.seller.id, arr34)
                                                                                
                                                                                if (amount > 35) {
                                                                                    let r35 = Resselers[34]
                                                                                    const x =+ 1
                                                                                    var arr35 = []
                                                                                    arr35.push(r35.userAssetId)
                                                                                    main(SelfUserId, arr1b, r35.seller.id, arr35)
                                                                                    
                                                                                    if (amount > 36) {
                                                                                        let r36 = Resselers[35]
                                                                                        const x =+ 1
                                                                                        var arr36 = []
                                                                                        arr36.push(r36.userAssetId)
                                                                                        main(SelfUserId, arr1b, r36.seller.id, arr36)

                                                                                        if (amount > 37) {
                                                                                            let r37 = Resselers[36]
                                                                                            const x =+ 1
                                                                                            var arr37 = []
                                                                                            arr37.push(r37.userAssetId)
                                                                                            main(SelfUserId, arr1b, r37.seller.id, arr37)
                                                        
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
            
                                            }
                                        }
                                    }
                                }}}


                        }
                    }



                }
            }
        }
    }


}


client.on("message", message => {
    client.user.setPresence({
        activities: [{ 
          name: "Mass Send Bot",
          type: "WATCHING"
        }],
        status: "idle"
    })
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
                MassSend(itemtosendto, UAID)

            }
        })
    }})
})

client.login(token)