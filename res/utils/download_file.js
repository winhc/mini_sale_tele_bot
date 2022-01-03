module.exports = async (file) => {
    const Fs = require('fs')
    const Path = require('path')
    const Axios = require('axios')
    const { currentDate } = require('./date_format');

    const fileName = 'order-' + currentDate() + '.jpg';
    const path = Path.resolve(__dirname, '../download', fileName);
    // console.log("file==>", file);
    // axios image download with response type "stream"
    const response = await Axios({
        method: 'GET',
        url: file.href,
        responseType: 'stream'
    })

    // pipe the result stream into a file on disc
    response.data.pipe(Fs.createWriteStream(path))

    // return a promise and resolve when download finishes
    return new Promise((resolve, reject) => {
        response.data.on('end', () => {
            resolve()
        })

        response.data.on('error', () => {
            reject()
        })
    })
}
