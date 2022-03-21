const mongoose = require('mongoose') 

let NoteSchema = new mongoose.Schema({ 
     
     title: String,
     body : String
})  
module.exports = mongoose.model('notes',NoteSchema)