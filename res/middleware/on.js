module.exports = (bot) => {
    const downloadFile = require("../utils/download_file");
    bot.on("photo", async (ctx, next) => {
        console.log(ctx.message.photo);
        const index = ctx.message.photo.length - 1;
        const imageLink = await bot.telegram.getFileLink(ctx.message.photo[index].file_id);
        await downloadFile(imageLink);
        next();
    });
}
