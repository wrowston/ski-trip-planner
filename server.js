const express = require('express')
const userRouter = require('./controllers/userRouter.js')

const app = express()

app.use(express.json())

app.use('/user', userRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})