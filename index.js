import express from 'express'
import mongoose from 'mongoose'
import { userRouter } from './routes/user.js'


const server = express()
const port = 9000
const URL= "mongodb://127.0.0.1:27017/notes"

server.use(express.json())
server.use('/users',userRouter)

mongoose.connect(URL).then(() => {
  console.log("Database connected")
}).catch((err) => {
  console.log(err)
})


server.listen(port, () => {
  console.log("server connected")
})