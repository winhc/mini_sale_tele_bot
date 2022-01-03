module.exports = (bot) => {
    bot.command(['start'], (ctx) => {
        bot.telegram.sendChatAction(ctx.chat.id, "typing");
        const message = `Hi, ${ctx.message.from.first_name}\n\nWelcome from tele shoping bot.\nYou can order what do you want to buy.`;
        bot.telegram.sendMessage(ctx.chat.id, message,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "Shop now", callback_data: "shop" }
                        ]
                    ]
                }
            }

        );
        const commandList = [
            {
                command: '/start',
                description: 'Start'
            },
            {
                command: '/shop',
                description: 'Shop now'
            },
        ];
        bot.telegram.setMyCommands(commandList);
        
    });
}
