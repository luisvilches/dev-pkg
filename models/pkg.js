const mongoose = require('mongoose')
let Schema = mongoose.Schema;

let pkg = new Schema({
	// schema del modelo
    name: String,
    description: String,
    wget:String,
    script1: String,
    script2: String,
    script3: String,
    script4: String,
    script5: String,
    version: String,
    date: Date
})

module.exports = mongoose.model('pkg',pkg);
