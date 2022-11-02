import express from 'express'
import bodyParser from 'body-parser'
import { App }  from './app.mjs' 

const app = express();
const port = process.env.PORT || 8080;
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
  let app = App(req.body.monto,req.body.duracion,req.body.id);
  console.log(app)
  res.send({
    "Respuesta": "Curva Generada",
    "acc": app[0],
    "ideal": app[1],
    "id": app[2]
  })
})

app.listen(port, () => {
  console.log(`Api endpoint listening on port ${port}`)
})