

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const businessSchema = new Schema({

    name: String,
    services: String,
    address: String,
});

// export default mongoose.model("businessModel", businessSchema);
const BusinessModel = mongoose.models.Business || model('businessModel', businessSchema);
module.exports = BusinessModel;