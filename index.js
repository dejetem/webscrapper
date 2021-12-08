const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const indexRouter = require('./routes/index');
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/scrapper', indexRouter);

const CONFIG = { 
    uri : process.env.DATABASE_URl,
    OPTIONS : { 
      useNewUrlParser : true , 
      keepAlive : true , 
      useUnifiedTopology : true , 
      keepAliveInitialDelay : 3e6
    }
}


mongoose.Promise = Promise;  
mongoose.connect(CONFIG.uri, CONFIG.OPTIONS) 
let db = mongoose.connection 
db.on('open' , console.info.bind(console , 'Connection to the database was successful'))


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))