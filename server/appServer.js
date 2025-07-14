const express = require('express');
const app = express();
const feedController = require('./server/controller/feedController');

app.use(express.static('client/public'));
app.use(express.json());  // Important to parse JSON bodies for POST/PATCH

// Routes serving your HTML pages (keep these as they are)
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './client/views' });
});
app.get('/feed', (req, res) => {
    res.sendFile('feed.html', { root: './client/views' });
});
app.get('/1', (req, res) => {
    res.sendFile('1.html', { root: './client/views' });
});
app.get('/2', (req, res) => {
    res.sendFile('2.html', { root: './client/views' });
});
app.get('/3', (req, res) => {
    res.sendFile('3.html', { root: './client/views' });
});
app.get('/4', (req, res) => {
    res.sendFile('4.html', { root: './client/views' });
});
app.get('/5', (req, res) => {
    res.sendFile('5.html', { root: './client/views' });
});

// Add your API routes **after** your page routes
app.route('/api/feed')
   .get(feedController.getAllFeedItems)
   .post(feedController.saveFeedItem);

app.route('/api/feed/:id')
   .get(feedController.getFeedItemById)
   .delete(feedController.deleteFeedItemById)
   .patch(feedController.updateFeedItemById);

app.listen(1337, () => console.log('Listening on port 1337.'));
