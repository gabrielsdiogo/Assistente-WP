import express from 'express'
import {router} from '../routes/main.route.js'


const port = process.env.PORT || 3333
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/msg", router)


app.listen(port,()=>{
    console.log("Server started at http://localhost:" + port)
})



