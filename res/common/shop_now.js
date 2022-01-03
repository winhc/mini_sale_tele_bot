module.exports = (bot,ctx) => {
    bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
    bot.telegram.sendPhoto(ctx.chat.id,
        {
            source: 'res/img/avator.png',
        },
        {
            caption: 'Shooping with Tele Tshirt bot 👕',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Category", callback_data: "category" }
                    ],
                    [
                        { text: "Available Products", callback_data: "product" }
                    ]
                ]
            }
        },
    );
}
