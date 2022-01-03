module.exports = (bot) => {
    bot.action('shop', (ctx) => {
        const shop_now = require('../common/shop_now');
        shop_now(bot,ctx);
    })
}
