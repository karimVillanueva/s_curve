import express from 'express'
import bodyParser from 'body-parser'
import { App }  from './app.mjs' 

const app = express();
const port = 3000 || process.env.PORT;
const jsonParser = bodyParser.json()
// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Welcome text
app.get('/', (req, res) => {
  res.send('curve-s api')
})

// Post 
app.post('/data', jsonParser, function (req, res) {
  let app = App(req.body.monto,req.body.duracion);
  console.log(app)
  res.send({
    "Respuesta": "Json Recibido",
    "acc": app[0],
    "ideal": app[1]
  })
})

app.listen(port, () => {
  console.log(`Api endpoint listening on port ${port}`)
})