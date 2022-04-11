const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log(`MONGO DB connected : ${con.connection.host}`)
    }catch(e){
        console.log(e)
        process.exit(1)
    }
}

module.exports = connectDB