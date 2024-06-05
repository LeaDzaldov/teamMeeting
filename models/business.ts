import mongoose from '../service/accessdb';
import { Schema } from "mongoose";

const businessSchema = new Schema({
    
    name: { type: String },
    adress: { type: String },
    phone: { type: String },
 
});

export default mongoose.model("businessModel", businessSchema);