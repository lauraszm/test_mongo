const mongoose = require('../bin/mongodb')

const productosSchema = new mongoose.Schema({
    titulo:{
        type:String,
        uppercase:true
    },
    sku:String,
    descripcion:String,
    contacto:String,
    precio:Number,
    ciudad:String,
    foto:String,
    categoria:String
})

productosSchema.virtual('price_currency').get(function(){
    return "$ "+this.precio
})
productosSchema.plugin(mongoose.mongoosePaginate)
productosSchema.set('toJSON',{getters:true,virtuals:true})
module.exports = mongoose.model("productos", productosSchema);
