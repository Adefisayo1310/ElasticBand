const express = require('express')
const app = express()

app.get('/', (req,res)=>{
   res.send("It worked")
})

app.get('/new', (req,res)=>{
   res.send("New also worked")
})

app.listen(process.env.PORT || 8000)

module.exports = app