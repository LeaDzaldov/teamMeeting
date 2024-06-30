

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const businessSchema = new Schema({
    
    name: { type: String },
    adress: { type: String },
    phone: { type: String },
 
});

// export default mongoose.model("businessModel", businessSchema);
const BusinessModel = mongoose.models.Business || model('businessModel', businessSchema);
module.exports = BusinessModel;