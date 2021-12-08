const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    content: { 
        type: String,
        require: true 
    },
    image: { 
        type: String,
        require: true
    },
    links: { 
        type: String,
        require: true
    }
  });
  
module.exports = mongoose.model('Item', itemSchema);