const express = require('express')
const bodyPaser = require('body-parser')
const Producer = require('./procucer')
const procucer = new Producer()
const app = express()

app.use(express.json())

app.post('/sendLog', async (req, res, next) => {
    await procucer.publishMessage(req.body.logType, req.body.message);
    res.sendStatus(200)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server started on port ${3000}`)
})