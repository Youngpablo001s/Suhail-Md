const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "https://graph.org/file/21e984a94def2215b0215.jpg" ;  
global.video= "https://graph.org/file/21e984a94def2215b0215.jpg" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="wallyjay123@gmail.com"
global.location="Lagos,Nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Wallyjaytechh/WALLYJAYTECH-MD";
global.gurl  =process.env.GURL  || "hhttps://chat.whatsapp.com/FTuAbXCgwPLDt96BK7bm5P";
global.website=process.env.GURL || "https://chat.whatsapp.com/FTuAbXCgwPLDt96BK7bm5P" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://graph.org/file/21e984a94def2215b0215.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝕎𝔸𝕃𝕃𝕐 𝕁𝔸𝕐 𝕋𝔼ℂℍ" 


global.devs = "2349159868548" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348144317152";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349159868548";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_34_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQzLFxuICAgICAgICA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcxLFxuICAgICAgICA5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM0LFxuICAgICAgICA3LFxuICAgICAgICA4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDk5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMixcbiAgICAgICAgMjM4LFxuICAgICAgICA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc0LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc2LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY1LFxuICAgICAgICA0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1LFxuICAgICAgICAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPVEJqa3B2S25CUXFLQjdVWVlYVmNYZWJmOXRFV1VYYTExMURCVUh3eG5RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4WUktU2JsaFNaeWpPTkVlRXd4UEZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA1NjAzOTAxLTNjNjgtNDMwYy05OTQ0LTFlMTk3Zjc0ZDI3ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAyMTUsXG4gICAgICAyMTcsXG4gICAgICAyNCxcbiAgICAgIDUxLFxuICAgICAgMTUwLFxuICAgICAgMTM0LFxuICAgICAgMzMsXG4gICAgICA2NixcbiAgICAgIDAsXG4gICAgICA2NSxcbiAgICAgIDIwLFxuICAgICAgMTcyLFxuICAgICAgNixcbiAgICAgIDkzLFxuICAgICAgMTc2LFxuICAgICAgMTcwLFxuICAgICAgMTksXG4gICAgICAxMzUsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICAxODMsXG4gICAgICAxMixcbiAgICAgIDU4LFxuICAgICAgMjMyLFxuICAgICAgMTgzLFxuICAgICAgNjcsXG4gICAgICAyMTIsXG4gICAgICAyMjQsXG4gICAgICAxNyxcbiAgICAgIDIxMCxcbiAgICAgIDE1MCxcbiAgICAgIDI0NCxcbiAgICAgIDIyMCxcbiAgICAgIDIwOCxcbiAgICAgIDIwNSxcbiAgICAgIDMwLFxuICAgICAgMzYsXG4gICAgICAyMTYsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSSEVOTEhNVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1OTg2ODU0ODo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODIyMzYwNDA4MTg3OTA6ODJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkhFL0lrQ0VLcllqN1VHR0E0Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJidDVrQk9YNHdKanRBdnNIUW9IeWF3NkpWL3RCNkNFWEhxUnNlNmRuN1NnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZ5aTRyZTlXMEM2S2w0cHkwOG8rb3RKYjExRG5adVV4QmtLbkw3dEZ3T28xYUFoaVRZeWJvaGhQQUx0djNheXdEYVNqU08yQ28wNGdHNzlhUzZ6S0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpCNkRFZXBFUVo2Wkllb09QUXVlSkUrckRENTlOcjJ2WVNaaGYzWHV1ZjljQ0ZOY0xPVEc1TStMSGZ6Rk1DVlg5eXMwZlZ0cFRIMEt4VlgwTENRSWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTk4Njg1NDg6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDE4ODYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnpvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKem8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKNFZEZDV3UUZPQkx3djVVYkZjblc2cVBkL0xwQldGMzlJd01JWksvUkdjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU1Nzc4NTYxNyxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝕎𝔸𝕃𝕃𝕐 𝕁𝔸𝕐 𝕋𝔼ℂℍ" , // ```
 
  author : process.env.PACK_AUTHER|| "YWALLY JAY TECH",
  packname: process.env.PACK_NAME || "WALLY JAY TECH STICKER",
  botname : process.env.BOT_NAME  || "WALLYJAYTECH-MD",
  ownername:process.env.OWNER_NAME|| "WALLY JAY TECH",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "WALLYJAYTECH"  ).toUpperCase(),



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
