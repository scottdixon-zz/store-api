const mongoose = require('mongoose')

// Use the promise functionality built into Node
mongoose.Promise = global.Promise

mongoose.connect(process.env.MLAB, { useMongoClient: true })
  .then(() => {
    console.log('Successfully connected to database!')
  })
  .catch(error => {
    // Something went wrong!
    console.log('Error connecting to MongoDB database', error)
  })

module.exports = mongoose
