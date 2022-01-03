const moment = require('moment');

module.exports = {
    currentDate: () => {
        return moment(new Date()).format('YYYY-MM-DD h:mm:ss a');
    },

    formatYearMonthDay: (date) => {
        return moment(new Date(date)).format('YYYY-MM-DD');
    },

    formatMonthDay: (date) => {
        return moment(new Date(date)).format('MMM DD');
    }
}
