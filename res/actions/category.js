module.exports = (bot) => {
    bot.action('category', async (ctx) => {
        bot.telegram.sendChatAction(ctx.chat.id, "typing");
        const message = "Categories List"
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.chat.id, message,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Shirt", callback_data: "shirt" },
                            { text: "Sweater", callback_data: "sweater" }
                        ],
                        [
                            { text: "Short", callback_data: "short" },
                            { text: "Skirt", callback_data: "skirt" }
                        ],
                        [
                            { text: "Back", callback_data: "shop" }
                        ],
                    ]
                }
            }
        )
    })
}
