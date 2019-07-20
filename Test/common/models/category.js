'use strict';
let app = require('../../server/server');
const _ = require('lodash');
module.exports = function (category) {

    // create or add category details.
    category.saveOrUpdate = function (data, callback) {
        if (data.id) {
            category.upsertWithWhere({ "id": data.id }, data, callback)
        } else {
            category.create(data)
            return callback(null, { "message": "Category Added successfully" })
        }
    }

    //get all category list with associated products.
    category.list = function (callback) {
        var response = {};
        category.find((err, data) => {
            if (err) return callback(err)
            app.models.product.find({ "where": { "categoryId": { "inq": _.map(data, 'id') } } }, (err, productList) => {
                if (err) return callback(err)
                data.forEach(categories => {
                    _.set(categories, 'products', _.size(_.where(productList, { "categoryId": categories.id })))
                })
                _.set(response, 'category', data)
                return callback(null, response)
            })
        })
    }

};
