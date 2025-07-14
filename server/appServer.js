const express = require('express');
const app = express();

// ✅ Require the feedController
const feedController = require('./controller/feedController');

// ✅ Middleware to serve static files & parse JSON bodies
app.use(express.static('client/public'));
app.use(express.json());

// 🌐 Existing HTML routes (keep as is)
app.get('/', function(req, res) {
    res.sendFile('index.html', { root: './client/views' });
});
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', { root: './client/views' });
});
app.get('/1', function(req, res) {
    res.sendFile('1.html', { root: './client/views' });
});
app.get('/2', function(req, res) {
    res.sendFile('2.html', { root: './client/views' });
});
app.get('/3', function(req, res) {
    res.sendFile('3.html', { root: './client/views' });
});
app.get('/4', function(req, res) {
    res.sendFile('4.html', { root: './client/views' });
});
app.get('/5', function(req, res) {
    res.sendFile('5.html', { root: './client/views' });
});

// ✅ RESTful API routes
app.route('/api/feed')
  .get(feedController.getAllFeedItems)        // get all feed items
  .post(feedController.saveFeedItem);         // create new feed item

app.route('/api/feed/:id')
  .get(feedController.getFeedItemById)        // get item by id
  .delete(feedController.deleteFeedItemById)  // delete item by id
  .patch(feedController.updateFeedItemById);  // update item by id

// ✅ Start server
app.listen(1337, () => console.log('Listening on port 1337.'));
