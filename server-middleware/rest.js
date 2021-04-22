const bodyParser = require('body-parser')
const app = require('express')()
const productDetails = require('./productDetails')

app.use(bodyParser.json())
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/productDetails', (req, res) => {
  res.status(200).json(productDetails)
})
module.exports = app
