'use strict';
const _ = require('lodash');
module.exports = function (user) {

    // user registration
    user.register = function (data, callback) {
        user.find({ "fields": ['id'] }, (err, role) => {
            if (err) return callback(err)
            if (_.isEmpty(role)) {
                _.set(data, 'userRole', 1)
                user.create(data)
            } else {
                _.set(data, 'userRole', data.userRole)
                user.create(data)
            }
            return callback(null, { "message": " Registered successfully" })
        })
    }
};
