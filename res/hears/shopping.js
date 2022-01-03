module.exports = (bot) => {
    bot.hears('Shop Now', (ctx) => {
        const shop_now = require('../common/shop_now');
        shop_now(bot,ctx);
    })
}
