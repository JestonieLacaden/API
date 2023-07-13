const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json)
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: ['http://localhost:3000']
}))

const lists = [{ name: "Jestonie" }]

app.get("/", (req, res) => {
    res.json({ message: "Edi meow" })
})

app.get('/lists', function (req, res) {
    res.json(lists)
})

app.post('/lists', (req, res) => {
    const list = req.body
    lists.push(list)
    res.json(lists)
})

const port = 3002

app.listen(port, () => {
    console.log('Listening port:', port)
})