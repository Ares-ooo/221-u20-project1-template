const FeedItem = require('../model/feedItem');

// In-memory storage of feed items
const feedItems = [];

// Example function to get all feed items
function getAllFeedItems(req, res) {
  res.json(feedItems);
}

// Example function to add a new feed item
function addFeedItem(req, res) {
  const { id, title, content, imageUrl } = req.body;
  const newItem = new FeedItem(id, title, content, imageUrl);
  feedItems.push(newItem);
  res.status(201).json(newItem);
}

// Example function to get a single item by ID
function getFeedItemById(req, res) {
  const id = req.params.id;
  const item = feedItems.find(item => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
}

// Export the functions so they can be used in routes
module.exports = {
  getAllFeedItems,
  addFeedItem,
  getFeedItemById
};