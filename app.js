// Require Libraries
const express = require('express');

// Require tenorjs near the top of the file
const Tenor = require("tenorjs").client({
  // Replace with your own key
  "Key": "REPLACE API KEY",
  "Filter": "high", // "off", "low", "medium", "high", not case sensitive
  "Locale": "en_US", // Your locale here, case-sensitivity depends on input
});

// App Setup
const app = express();
app.use(express.static('public'));

// Middleware
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
    // Handle the home page when we haven't queried yet
    term = ""
    if (req.query.term) {
        term = req.query.term
    }
    // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
    Tenor.Search.Query(term, "10")
        .then(response => {
            // store the gifs we get back from the search
            const gifs = response;
            console.log(gifs); // Debug line
            // pass the gifs as an object into the home page
            res.render('home', { gifs })
        }).catch(console.error);
})


// Start Server
app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});

