const chalk = require("chalk")
const fs = require("fs")


// DATA OWNER / ADMIN 
  global.ownerNumber = "6285235530621@s.whatsapp.net"  // Nomor WA owner (format: 62xxx@s.whatsapp.net) � JANGAN hapus "@s.whatsapp.net"
  global.kontakOwner = "6285235530621"                  
  global.ownerName   = "Dika"                        
  global.namaStore = "D Store"  
  global.botName   = "D Bot"    


  global.apikeyRama = "rg_d1da9cb1c129a24a628403c4c6413b"
  // Cara mendapatkan API Key:
  //  1. Buka browser, kunjungi https://ramashop.my.id
  //  2. Daftar / Login menggunakan akun kamu
  //  3. Masuk ke menu "API Key" atau "Profil"
  //  4. Salin API Key kamu, lalu tempel di sini (ganti tulisan "Apikeymu")


//==================TIDAK PERLU DI EDIT=========================
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
