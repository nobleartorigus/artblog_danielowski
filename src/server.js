const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

//Initializers
const app = express()

//Middlewares
app.use(express.urlencoded({ extended: false }))

//Global Variables

//Settings 
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

//Routes
app.use(require('./routers/index.routers'))

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app