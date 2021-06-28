const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3009

app.engine('hbs', exphbs({ defaultLayout: 'main' , extname: '.hbs'}))

app.set('view engine','hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index') //伺服器得到browser的請求而回應
})

app.listen(port, () =>{
  console.log(`Express is listening on localhost:${port}`)
})