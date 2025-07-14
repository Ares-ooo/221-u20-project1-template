const FeedItem = require('../model/feedItem');
let allFeedItems = [];
exports.getAllFeedItems = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(allFeedItems);
};
exports.saveFeedItem = function(req, res) {
    let newItem = new FeedItem(
        req.body.title, 
        req.body.body, 
        req.body.linkUrl, 
        req.body.imageUrl
    );
    allFeedItems.push(newItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(allFeedItems);
};
exports.getFeedItemById = function(req, res) {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= allFeedItems.length) {
        res.status(404).json({ error: 'FeedItem not found' });
        return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(allFeedItems[id]);
};
exports.deleteFeedItemById = function(req, res) {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= allFeedItems.length) {
        res.status(404).json({ error: 'FeedItem not found' });
        return;
    }
    allFeedItems.splice(id, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(allFeedItems);
};
exports.updateFeedItemById = function(req, res) {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= allFeedItems.length) {
        res.status(404).json({ error: 'FeedItem not found' });
        return;
    }
    let item = allFeedItems[id];
    if (req.body.title !== undefined) item.title = req.body.title;
    if (req.body.body !== undefined) item.body = req.body.body;
    if (req.body.linkUrl !== undefined) item.linkUrl = req.body.linkUrl;
    if (req.body.imageUrl !== undefined) item.imageUrl = req.body.imageUrl;
    res.setHeader('Content-Type', 'application/json');
    res.send(item);
};