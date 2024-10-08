const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

// cors - permitir múltiplos domínios
app.use(cors({
  credentials: true,
  origin: ['http://127.0.0.1:3000', 'http://localhost']
}))

const UserRoutes = require('./routes/UserRoutes')

app.use('/', UserRoutes)

app.listen(5000, () => {
  console.log('Server running on http://127.0.0.1:5000')
})
