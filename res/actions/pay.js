module.exports = (bot) => {
    bot.action('pay', async (ctx) => {
        // console.log(ctx.update.callback_query.message.photo);
        bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
        await bot.telegram.sendPhoto(ctx.chat.id,
            ctx.update.callback_query.message.photo[0].file_id,
            {
                caption: `Your Order-\n${ctx.update.callback_query.message.caption}`,
            },
        );
        await bot.telegram.sendPhoto(ctx.chat.id,
            {
                source: "res/img/sample_qr.png",
            },
            {
                caption: "Scan QR code OR,\nKPay: 093356277865\n\nIf you have been paid, send a payment screenshot.\nWe will confirm your order and reply soon.\n\nThanks for shopping with us 🛍",
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Shopping again", callback_data: "shop" }
                        ]
                    ]
                }
            },
        );
    })
}
