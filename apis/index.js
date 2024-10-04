const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

// cors
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

const UserRoutes = require('./routes/UserRoutes')

app.use('/', UserRoutes)

app.listen(5000)