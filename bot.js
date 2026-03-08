require("dotenv").config()

const { Client, GatewayIntentBits } = require("discord.js")
const fs = require("fs")

const { connectDB } = require("./database/mongo")
const { startWatcher } = require("./watcher")

const client = new Client({
intents:[GatewayIntentBits.Guilds]
})

client.commands = new Map()

const commandFiles = fs.readdirSync("./commands")

for(const file of commandFiles){

const command = require(`./commands/${file}`)

client.commands.set(command.name, command)

}

client.once("clientReady", async ()=>{

console.log("ULTRA Crypto Bot Online")

await connectDB()

startWatcher(client)

})

client.on("interactionCreate", async interaction=>{

if(!interaction.isChatInputCommand()) return

const command = client.commands.get(interaction.commandName)

if(!command) return

command.execute(interaction)

})

client.login(process.env.DISCORD_TOKEN)
