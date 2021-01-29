let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Saweria [saweria.co/NathanAlfano]
│ • Telkomsel [085293702327]
│ • Gopay [085293702327]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/628293702327
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
