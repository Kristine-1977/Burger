const orm = require('../config/orm.js');

const hamburgers = {
    selectAll: function (cb) {
        orm.selectAll('hamburgers', (res) => {
            cb(res)
        });
    },
    insertOne: function (colName, colValue, cb) {
        orm.insertOne('hamburgers', colName, colValue, (res) => {
            cb(res)
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne('hamburgers', objColVals, condition, (res) => {
            cb(res)
        });
    }
}
// Export the database functions for the controller (hamburgers_controller.js).
module.exports = hamburgers;