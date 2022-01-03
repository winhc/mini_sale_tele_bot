module.exports = async (bot) => {
    await bot.action('product', async (ctx) => {
        bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
        ctx.deleteMessage();
        const shirts = ["res/img/t_shirt1.jpeg", "res/img/t_shirt2.jpeg", "res/img/t_shirt3.jpeg"];
        const result = shirts.map(shirt => {
            return {
                type: "photo",
                media: {
                    source: shirt
                }
            }
        });
        await bot.telegram.sendMediaGroup(ctx.chat.id, result);

        const message = "Avaiable products";

        await bot.telegram.sendMessage(ctx.chat.id, message,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Detail Price", callback_data: "shirt_price" }
                        ],
                        [
                            { text: "Back", callback_data: "shop" }
                        ]
                    ]
                }
            }
        )
    })
}
