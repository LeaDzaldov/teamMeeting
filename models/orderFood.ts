
import mongoose from '../service/accessdb';
import { Schema } from "mongoose";

const businessSchema = new Schema({
    
    nameClient: { type: String },
    adressClient: { type: String },
    phoneClient: { type: String },
    orderFood:{ type:[String]},
    time:{type:Number}
 
});

export default mongoose.model("businessModel", businessSchema);