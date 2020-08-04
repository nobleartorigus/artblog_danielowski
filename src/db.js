const mongoose = require('mongoose')

const { DANIELOWSKI_MONGODB_HOST, DANIELOWSKI_MONGODB_DATABASE } = process.env
const MONGODB_URI = `mongodb://${DANIELOWSKI_MONGODB_HOST}/${DANIELOWSKI_MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useCreateIndex: true
})
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err))
