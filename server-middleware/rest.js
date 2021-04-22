const bodyParser = require('body-parser')
const app = require('express')()
const productDetails = require('./productDetails')

app.use(bodyParser.json())
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/productDetails', (req, res) => {
  res.status(200).json(productDetails)
})
app.get('/navlinks', (req, res) => {
  const navlinks = ['Shop', 'Read', 'Stories', 'Search']
  res.status(200).json({ navlinks })
})
module.exports = app
