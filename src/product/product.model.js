import {Schema, model, version} from "mongoose";

const productSchema = new Schema({
    nombre: { 
        type: String, 
        required:[true , "Name is required"],
        maxLength:[25 ,"Name cannot exceed 25 chacarters"]
    },
    descripcion: { 
        type: String, 
        required: true, 
        trim: true 
    },
    precio: { 
        type: Number, 
        required: true,
        min: 0  
    },
    producto: { 
        type: String, 
        required: true, 
        enum: ['Ropa', 'Electrónica', 'Hogar', 'Deportes', 'Alimentos']  
    },
    profilePicture: { 
        type: String, 
    },

    existencias: {  
        type: Number,
        required: true,
        min: 0,  
        default: 0 
    },
    ventas: {  
        type: Number,
        default: 0
    },
    status:{
        type: Boolean,
        default: true
    }

}, {
    timestamps: true,
    versionKey: false
});

export default model("ProductosGestion",productSchema) 