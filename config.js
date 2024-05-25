const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "https://wa.me/2349045943021";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0627755334651336a58c1.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY YOUNG PABLO" 


global.devs = "2349045943021" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349045943021";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_31_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDczLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMTY4LFxuICAgICAgICA2NixcbiAgICAgICAgMTc4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjksXG4gICAgICAgIDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM0LFxuICAgICAgICA3NSxcbiAgICAgICAgNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDcxLFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDk5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc3LFxuICAgICAgICA0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDg2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY3JkUTVHS090YjFIQ09sOG1yRDNjWU44bGFCSHNCNE01S0N2NFNOd2thWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYTJUbEs3LTJTd3ltZ0lSZEFYRm1DQVwiLFxuICBcInBob25lSWRcIjogXCIwMGIwOThmMC01NjZiLTRkZDctYTJlZC00N2I0ZjQxZGNmMThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgNCxcbiAgICAgIDI2LFxuICAgICAgMjA0LFxuICAgICAgMTc5LFxuICAgICAgMjI1LFxuICAgICAgOTIsXG4gICAgICAyMSxcbiAgICAgIDIzLFxuICAgICAgMTMsXG4gICAgICA2NCxcbiAgICAgIDQ4LFxuICAgICAgMjM5LFxuICAgICAgMjI5LFxuICAgICAgNzEsXG4gICAgICAyNSxcbiAgICAgIDIsXG4gICAgICAyMzIsXG4gICAgICAyMjYsXG4gICAgICA4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMjgsXG4gICAgICAyMDIsXG4gICAgICAyMjEsXG4gICAgICA3NixcbiAgICAgIDQ4LFxuICAgICAgMCxcbiAgICAgIDE1LFxuICAgICAgMjE4LFxuICAgICAgNTQsXG4gICAgICAxMDcsXG4gICAgICA1MyxcbiAgICAgIDExNixcbiAgICAgIDExNixcbiAgICAgIDQ0LFxuICAgICAgMTcyLFxuICAgICAgMjA2LFxuICAgICAgMjQyLFxuICAgICAgMTAzLFxuICAgICAgMjQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzMveVk4REVQUER4cklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIycGtGanBwVHUvQ0hRVWdOQWFSUjZCbzBzMFliNSsxMUloRk10Y0dnQ1Z3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5VNjNCNXJwR0hiNGNrU1F1VEZkOFRhYjlOZ0pLMlA4bGZXMTF6QkhQdTZFaDJZK1F0K21YWkZ1SU9qSlVkeFovVTVDd0dJM2FGSFpHeTlnVXlhWGhRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIit5TDM5VTBYbEFtblBUTXFNTWh4cTRjZmN0TWt5SzVxME5GeXRjUWRNVU9hZXkrREtkNWo3ck9RZFpucFlUZUkwR2ZZcWlzaFM4V3B0WkQ2enNJL2d3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0NTk0MzAyMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjEyNTU5MDI2MDk1ODM6MUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDU5NDMwMjE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY2MjU5MTFcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| Young Pablo"",
  packname: process.env.PACK_NAME || Young Pablo Stickers"",
  botname : process.env.BOT_NAME  || "YOUNG-MD",
  ownername:process.env.OWNER_NAME|| "It's Young Pablo",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "YOUNG"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
