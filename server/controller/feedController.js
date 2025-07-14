const FeedItem = require('../model/feedItem');

// In-memory data store (temporary, will replace with DB later)
let feedItems = [];

// Controller methods

// Get all feed items
function getAllFeedItems(req, res) {
  res.json(feedItems);
}

// Add a new feed item
function addFeedItem(req, res) {
  const { title, content, imageUrl } = req.body;
  const id = feedItems.length + 1;
  const newItem = new FeedItem(id, title, content, imageUrl);
  feedItems.push(newItem);
  res.status(201).json(newItem);
}

// Get a single feed item by id
function getFeedItemById(req, res) {
  const id = parseInt(req.params.id);
  const item = feedItems.find(f => f.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Feed item not found' });
  }
}

// Export controller functions
module.exports = {
  getAllFeedItems,
  addFeedItem,
  getFeedItemById
};