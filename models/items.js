const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Item = new Schema({
    id: ObjectId,
    itemText: { type: String, required:false, unique:false, trim: true}
});

module.exports = mongoose.model('Item', Item);