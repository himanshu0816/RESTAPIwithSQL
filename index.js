const express =require('express')
const app= express()
const controllers=require('./controllers/empolyeeController')



app.use(express.json())
app.use(controllers)
const PORT=process.env.PORT||3000
app.listen(PORT,()=>console.log(`server is running at port ${PORT}`))