// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
console.log(req.query) // => "{ term: hey" }[/bold]
    res.render('home')
})

// Start Server

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});

