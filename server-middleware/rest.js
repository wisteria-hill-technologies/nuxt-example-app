const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' })
})
module.exports = app
