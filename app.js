const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
const port = 3009

app.engine('hbs', exphbs({ defaultLayout: 'main' , extname: '.hbs'}))

app.set('view engine','hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results}) //伺服器得到browser的請求而回應
})

app.get('/search', (req, res) =>{
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(item => { 
    return item.name.toLowerCase().includes(keyword.toLowerCase()) }
  )
  res.render('index', { restaurants: restaurants , keyword: keyword })
})

app.get('/restaurants/:restaurant', (req, res) =>{
  let id = req.params.restaurant
  let restaurant = restaurantList.results.find(
    item => item.id.toString() === id
  )
  console.log(restaurant)
  res.render('show', { restaurant: restaurant })
})

app.listen(port, () =>{
  console.log(`Express is listening on localhost:${port}`)
})