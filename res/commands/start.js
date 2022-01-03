module.exports = (bot) => {
    bot.command(['start'], (ctx) => {
        bot.telegram.sendChatAction(ctx.chat.id, "typing");
        const message = `Hi, ${ctx.message.from.first_name}\n\nWelcome from tele shoping bot.\nYou can order what do you want to buy.`;
        bot.telegram.sendMessage(ctx.chat.id, message,
            {
                reply_markup: {
                    keyboard: [
                        [
                            { text: 'Shop Now' }
                        ]
                    ],
                    resize_keyboard: true,
                    // one_time_keyboard: true
                }
            },

        );
    });
}
