require('dotenv').config()

const app = require('./server')
require('./db')

console.log(process.env.TESTING)

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'))
})