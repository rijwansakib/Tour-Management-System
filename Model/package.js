const mongoose = require("mongoose")
//schema Desgin

const packegeSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "name required."],
    },
    description: {
        type: String,
        require: true

    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    viewCount:{
        type:Number,
        default:0
    },
    // unit: {
    //     type: String,
    //     required: true,
    //     enum: {
    //         values: ['kg', 'liter', 'pcs'],
    //         message: "unit cont't be {value} must be kg/liter/pcs"
    //     }
    // },
    // quantity: {
    //     type: Number,
    //     required: true,
    //     min: [0, "quantity can't be negative"],
    //     validate: {
    //         validator: (value) => {
    //             const isIntiger = Number.isInteger(value);
    //             if (isIntiger) {
    //                 return true
    //             } else {
    //                 return false
    //             }
    //         }
    //     },
    //     message: "quntity must be an integer"

    // },
    // status: {
    //     type: String,
    //     required: true,
    //     enum: {
    //         values: ["in-stock", "out-of-stock", "discontinude"],
    //         message: "unit cont't be {value} must be in-stock/out-of-stock/discontinude"
    //     }
    // },
    // supplire:{
    //   type:mongoose.Schema.Types.ObjectId,
    //   ref:'supplire'

    // },

    // catagorires:[{
    //   name:{
    //    type:String,
    //   required:true,
    //   },
    //   _id:mongoose.Schema.Types.ObjectId,


    // }], 
}, {
    timestamps: true
})

//model


const packege = mongoose.model('Product', packegeSchema)


module.exports = packege;