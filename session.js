//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUs1UjNTdzdsMk5zUDcvK2pRZFpZc1o5R0ZvaTRFREtmVjE3N0dVMmRVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMU5iNXU1bTNJb0NjNURmU1UvTFhQOTh3bTQxbXRSL2dPbW80YmZ5NU5FOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TWZ1ZGFORHNTU3JOUG44TXUyVVEwV0wxZjFWbnhSOEdIVjFYenZOOFVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvMXE4ek5pRGZYWmVpb3FJNVMraFdIbEkwNS81cHhFc2FKVVIweUdrdkN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllJWVYxTyt1Zm0ranUxYzdtd0ZIMHdWbW1xSFhKdmJ4YjhpSzhDUThsVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh1SVkyUDkxcy9abFNheVU3enpyc25xQ1RWV282WVdwMG14ZkY4QUZVQjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdLNmUrb3FSSXFsR2htWjI3UE0xUkN5QU9LZDF3bXMzclU1QnRTbUJuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGV0d0JrVDBTWWdHdWtBSFZSK2Ywd1ptaEZIY1U4ckFHbWNRZEY5RGtCVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp0OUZDeVRzcUthckFNT0Q4Z3h6UUVBeVQ1a1dWbDlobGpudGVRSHlCb0g2TFd6UWVzVERJOURPOE1HQ0w1R1Zyd2hTL0wxejJTdlYrcXY2VGFSYUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJCWm5aSk8zaTJpQUxmSEw1b3dYSkZ3UUtGeTF1QjhNUjBHVUc3c1J6bmFrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDc1hXWERHelIwaWpyaXRTTGg4TTdBIiwicGhvbmVJZCI6ImJhMmI3Y2VmLWJkMzItNGE4Mi1iN2RiLTdkNmE3NTZjMzk2OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4K0ZtN2pRR0M1R3cxUVYwTXJYR0RSRERvWWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2s2dXI1NjU0QkYxY2xwdWtlUi9zNytsdFdnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlM5UlZYRVY2IiwibWUiOnsiaWQiOiI5NDc4NDMzMTE4MDozN0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE4OTY1MzQ5MTY1ODk5NDozN0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05lbmo4VURFUGphLzhJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikg2SDd6blNOYWNESXdFdDk1T1EwUGExbEttZGRxSVpvaGo5dldURXNVajQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBLa1VuWmsvVjIxT0NrVUU4anBDeUdUWWNzYnB5ak9pNGtINkZmbTg5L2xoaHl2VEUyQ3lRUmpUaXZPODMzeEovVWg5dkNaTUpobGNOc0tOUWIvWEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrcGgzQzNXMnBob3BTR2ZRNGN5WGljWUwybHRIUTBRU2U4ZXo4QzNWQzdxeG5ULytvTjJPNEVBaVZsd0V2cFVWekIrdDdsN1RJb2VmeGdPTkVUSVdEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg0MzMxMTgwOjM3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlIraCs4NTBqV25BeU1CTGZlVGtORDJ0WlNwblhhaUdhSVkvYjFreExGSSsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTExNzE5MCwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCRUoifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94784331180",
  PASSWORD: 
    process.env.PASSWORD || "sasilu123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
