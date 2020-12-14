const express = require('express');
const dotenv = require('dotenv');
const dbController = require('./controllers/dbController.js');

// Initialize Application
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initialize Environment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
else {
    process.env = dotenv.config({ path: `${__dirname + '/.env'}` }).parsed;
}

//Database
dbController(process);

// API Routes
require('./routes/database-api.js')(app, process);
require('./routes/google-books-api.js')(app, process);

// Create Server
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
})

app.listen(process.env.PORT, () => {
    console.log("listening on localhost:" + process.env.PORT);
});