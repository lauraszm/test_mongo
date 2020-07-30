const productosModel = require("../models/productosModels")

module.exports={
    getAll: async function(req, res, next) {
        console.log(req.query)
        console.log("UserToken",req.body.userToken)
        try{
            let productos =  await productosModel.paginate({},{
                populate: 'category',
                limit: 4,
                sort:{name:1},
                page:(req.query.page?req.query.page:1)
            })
            res.json(productos)

        }catch(e){
        next(e)
    }
},

    getById: async function(req, res, next) {
        try{
            let productos =  await productosModel.findById(req.params.id)
            res.json(productos)

        }catch(e){
        next(e)
    }
},

    create: async function(req, res, next){
        console.log(req.body)
        try{
            let producto = new productosModel({
                titulo:req.body.titulo,
                sku:req.body.sku,
                descripcion:req.body.descripcion,
                contacto:req.body.contacto,
                precio:req.body.precio,
                ciudad:req.body.ciudad,
                foto:req.body.foto,
                categoria:req.body.categoria
            })
            let documento = await producto.save()
            res.json(documento)


        }catch(e){
            next(e)
        }
     
    },

    change: async function(req, res, next){
       try{
           let producto = await productosModel.update({_id:req.params.id},req.body,{multi:false})
           res.json(producto)
       }catch(e){
           next(e)
       }
     
    },

    delete: async function(req, res, next){
        try{
            let producto = await productosModel.deleteOne({_id:req.params.id})
            res.json(producto)
        }catch(e){
            next(e)
        }
      
    }

}