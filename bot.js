require('dotenv').config();
const { Telegraf } = require('telegraf');
const start = require('./res/commands/start');
const shop = require('./res/actions/shop');
const product = require('./res/actions/product');
const shirt_price = require('./res/actions/shirt_price');
const pay = require('./res/actions/pay');
const category = require('./res/actions/category');
const shopping = require('./res/hears/shopping');
const shirt = require('./res/actions/category/shirt');
const sweater = require('./res/actions/category/sweater');
const short = require('./res/actions/category/short');
const skirt = require('./res/actions/category/skirt');
const on = require('./res/middleware/on');
const bot = new Telegraf(process.env.TELE_TOKEN);

//middleware
on(bot);

//command
start(bot);

//actions
shop(bot);
product(bot);
shirt_price(bot);
pay(bot);
category(bot);

//hear
shopping(bot);

//category
shirt(bot);
sweater(bot);
short(bot);
skirt(bot);

bot.launch();
