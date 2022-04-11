const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    ngayThang:{
        type: String,
        required: [true , 'khong duoc de chong ngaythang'],
        trim: true,
    },
    noiDung:{
        type: String,
        required: [true , 'khong duoc de chong noi dung'],
        trim: true,
    },
    linkAnh: String
})

const Imagees = mongoose.model('Imagees' , schema)
module.exports = Imagees