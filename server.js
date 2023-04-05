const express = require('express');
const app = express();
const port = 1337;

// Set the path to the "public" directory
const publicPath = __dirname + '/public';

// Specify "file types" as a root directory from which to serve static files
app.use('/css', express.static(publicPath + '/css'));
app.use('/images', express.static(publicPath + '/images'));
app.use('/js', express.static(publicPath + '/js'));


// Serve each web page based on the path that a user has navigated to
app.get('/', function(req, res) {
  res.sendFile(publicPath + '/index.html');
});

app.get('/about', function(req, res) {
  res.sendFile(publicPath + '/about.html');
});

app.get('/login', function(req, res) {
  res.sendFile(publicPath + '/login.html');
});

app.get('/projects', function(req, res) {
  res.sendFile(publicPath + '/projects.html');
});

// Add a wildcard for any route not defined and respond by serving the HTML file for the 404 page
app.use(function(req, res) {
  res.sendFile(publicPath + '/404.html');
});

// Make the app listen on the port and output the URL to access the server to the console
app.listen(port, function() {
    console.log(`Express server listening on port ${port}`);
  });