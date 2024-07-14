const express =require ("express");
const dbConnection =require ("./database/index");
const { PORT } =require ("./config/index");
const router =require ("./routes/index");
const errorHandler =require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");

const app =express()
app.use(cookieParser())
app.use(express.json())

app.use(router)

dbConnection()

app.use('/storage',express.static('storage'))

app.use(errorHandler)
app.listen(PORT,(req,res)=>{
    console.log(`server running on http://localhost:${PORT}`)
})



