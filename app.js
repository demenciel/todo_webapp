
// Import the modules
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// Create the Express app
const app = express();
var items = [];
var workItems = [];
var weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Sets the view to use EJS
app.set('view engine', 'ejs');
// Initializing the body parser module
app.use(bodyParser.urlencoded({extended: true}));
// Lets express access the public folders
app.use(express.static("public"));
// Define a route for handling GET to the root path
app.get("/", function(req, res) {
    res.render("list", {
      listTitle: date.getDate(),
      newListItems: items,
      dayDate: date.getDateNumber(),
      weekdays: date.getWeekdays(),
    });
});

// Define a route for handling POST action /add
app.post("/", function(req, res) {
    // req.body goes in the html body to search for name: newItem;
    var item = req.body.newItem;

    items.push(item);
    res.redirect("/");
})

// Start the server and listen to port 3000
app.listen(3000, function() {
    console.log("Server started on port 3000");
})
