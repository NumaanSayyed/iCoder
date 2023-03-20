const connecToMongo = require('./db')
const express = require('express')


connecToMongo()
const app = express()
const port = 5000
app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Available Routes 
const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
name:String,
email:String,
subject: String,
message: String
})
  const cons = mongoose.model("NEWCOL",ContactSchema)
  app.post("/post",async(req,res)=>{
    

    const data = new cons ({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
      
    })
    const val = await data.save()
    res.json(val)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ${port}`)
}) 
