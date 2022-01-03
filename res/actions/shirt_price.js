module.exports = (bot) => {
    bot.action('shirt_price', async (ctx) => {
        bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
        ctx.deleteMessage();
        const products = [
            {
                image: "res/img/t_shirt1.jpeg",
                caption: "Shirt One",
                color: "Gray",
                size: "Median",
                price: 1500
            },
            {
                image: "res/img/t_shirt2.jpeg",
                caption: "Shirt Two",
                color: "White",
                size: "Small",
                price: 1300
            },
            {
                image: "res/img/t_shirt3.jpeg",
                caption: "Shirt Three",
                color: "Black",
                size: "Large",
                price: 1800
            }
        ];

        
        products.forEach(async product => {
            // console.log(product);
            await bot.telegram.sendPhoto(ctx.chat.id,
                {
                    source: product.image,
                },
                {
                    caption: `Name: ${product.caption}\nColor: ${product.color}\nSize: ${product.size}\nPrice: ${product.price} Ks`,
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: `Pay ${product.price} Ks`, callback_data: "pay" }
                            ]
                        ]
                    }
                },
            );
        });
    })
}
