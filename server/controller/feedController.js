const{FeedItem, FeedItems} = require('../model/feedItem');


exports.getAllFeedItems = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(FeedItems);
    
};
exports.saveFeedItem = function(req, res) {
    let newItem = new FeedItem(
        req.body.title, 
        req.body.body, 
        req.body.linkUrl, 
        req.body.imageUrl
    );
    FeedItems.push(newItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(FeedItems);
};
exports.getFeedItemById = function(req, res) {
    const id = req.params.id;
    const item = FeedItems.find(item => item.id === id);
    
    if (!item) {
        res.status(404).json({ error: 'FeedItem not found' });
        return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(item);
};
exports.deleteFeedItemById = function(req, res) {
    const id = req.params.id;
    const index = FeedItems.findIndex(item => item.id === id);
    if (index === -1) {
        res.status(404).json({ error: 'FeedItem not found' });
        return;
    }
    FeedItems.splice(index, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(FeedItems);
};
exports.updateFeedItemById = function(req, res) {
    const id = req.params.id;
    const item = FeedItems.find(item => item.id === id);
    if (!item) {
        res.status(404).json({ error: 'FeedItem not found' });
        return;
    }
    if (req.body.title !== undefined) item.title = req.body.title;
    if (req.body.body !== undefined) item.body = req.body.body;
    if (req.body.imageUrl !== undefined) item.imageUrl = req.body.imageUrl;
    if (req.body.linkUrl !== undefined) item.linkUrl = req.body.linkUrl;
    res.setHeader('Content-Type', 'application/json');
    res.send(item);
};