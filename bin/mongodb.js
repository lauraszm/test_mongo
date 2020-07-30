var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');

mongoose.connect('mongodb://localhost/productos', { useNewUrlParser: true }, function(error){
    if(error){
        throw error;
    }else{
        console.log('Conectado a MongoDB')
    }
});

mongoosePaginate.paginate.options = {
    lean: true,
    limit: 1
};
mongoose.mongoosePaginate = mongoosePaginate
module.exports = mongoose;