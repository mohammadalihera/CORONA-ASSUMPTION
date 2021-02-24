var mongoose=require("mongoose");


var blogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex:String,
    body_tmeperature:Number,
    sym1: String,
    sym2:String,
    symp3: String,
    sym4: String,
    sym5: String,
    ads1: String,
    ads2: String,
    ads3:String,
    ads4:String,
    ads5: String,
    ads6: String,
    ads7: String,
    ads8: String,
    date: Date,
    result:String,
    score:Number


});

module.exports = mongoose.model("Post",blogSchema);