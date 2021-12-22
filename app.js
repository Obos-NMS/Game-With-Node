if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}

// const cors = require(`cors`)
const express = require(`express`)
const routes = require(`./routes`)
const app = express()
const port = process.env.PORT || 3000

console.log(process.env.PASSWORD, process.env.EMAIL)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)

app.listen(port, () => {
    console.log(`Game_Node ${port}`)
})

module.exports = app