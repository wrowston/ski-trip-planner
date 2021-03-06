const express = require('express')
const userRouter = require('./controllers/userRouter.js')
const tripRouter = require('./controllers/tripRouter.js')
const resortRouter = require('./controllers/resortRouter.js')

const methodOverride = require('method-override')

const app = express()

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(express.static(__dirname + "/public"))

app.use('/', userRouter)
app.use('/trip', tripRouter)
app.use('/resort', resortRouter)

app.get('/about', (req, res) => {
    res.render('about/about')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})