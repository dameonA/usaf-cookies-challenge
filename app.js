var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', (req, res) => {
//Setting a cookie when routed to /login
res.cookie('name', )
console.log ('Cookies: ', req.cookies)

//Cookies that have been signed
console.log('Signed Cookies: ', req.signedCookies)
})


const port = 3007
app.listen(port, () => console.log(`Your app is listening at http://localhost:${port}`))