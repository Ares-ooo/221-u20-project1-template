const express = require('express');
const app = express();
const feedController = require('./controller/feedController');
const bodyParser = require('body-parser');
app.use(express.static('client/public'));
app.use(express.json());
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: './client/views' });
});
app.get('/feed', function (req, res) {
    res.sendFile('feed.html', { root: './client/views' });
});
app.get('/1', function (req, res) {
    res.sendFile('1.html', { root: './client/views' });
});
app.get('/2', function (req, res) {
    res.sendFile('2.html', { root: './client/views' });
});
app.get('/3', function (req, res) {
    res.sendFile('3.html', { root: './client/views' });
});
app.get('/4', function (req, res) {
    res.sendFile('4.html', { root: './client/views' });
});
app.get('/5', function (req, res) {
    res.sendFile('5.html', { root: './client/views' });
});
app.route('/api/feed')
    .get(feedController.getAllFeedItems)
    .post(feedController.saveFeedItem);
app.route('/api/feed/:id')
    .get(feedController.getFeedItemById)
    .delete(feedController.deleteFeedItemById)
    .patch(feedController.updateFeedItemById);
app.listen(1400, () => console.log('Listening on port 1400'));
