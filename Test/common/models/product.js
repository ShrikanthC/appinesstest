'use strict';

module.exports = function(product) {

    // Create or add Product Details.
    product.saveOrUpdate = function(data,callback){
        if(data.id){
            product.upsertWithWhere({"id":data.id},data,callback)
        }else{
            product.create(data)
                return callback(null,{"message": "product Added successfully"})
        }
    }
};
