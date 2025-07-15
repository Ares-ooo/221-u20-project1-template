// client/public/js/feed.js

function goToLocation(path) {
  window.location.href = path;
}

// Add a single feed item to the page
function addFeedItemToPage(item, index) {
  const feedContainer = document.getElementById('newsfeed');
  if (!feedContainer) return;

  const itemDiv = document.createElement('div');
  itemDiv.className = 'feed-item';

  const title = document.createElement('h3');
  title.textContent = item.title;

  const body = document.createElement('p');
  body.textContent = item.body;

  const link = document.createElement('a');
  link.href = item.linkUrl;
  link.textContent = 'Read more';
  link.target = '_blank';

  const image = document.createElement('img');
  image.src = item.imageUrl;
  image.alt = item.title;
  image.style.maxWidth = '200px';

  // Delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = () => deleteFeedItem(index);

  // Append all to item div
  itemDiv.appendChild(title);
  itemDiv.appendChild(body);
  itemDiv.appendChild(link);
  itemDiv.appendChild(image);
  itemDiv.appendChild(deleteButton);

  feedContainer.appendChild(itemDiv);
}

// Fetch all feed items from server and render them
function getCurrentFeed() {
  fetch('/api/feed')
    .then(res => res.json())
    .then(data => {
      const feedContainer = document.getElementById('newsfeed');
      if (!feedContainer) return;

      feedContainer.innerHTML = ''; // Clear existing feed

      data.forEach((item, index) => {
        addFeedItemToPage(item, index);
      });
    })
    .catch(err => console.error('Error fetching feed:', err));
}

// Delete a feed item by id and refresh feed
function deleteFeedItem(id) {
  fetch(`/api/feed/${id}`, {
    method: 'DELETE',
  })
    .then(res => {
      if (!res.ok) throw new Error('Failed to delete feed item');
      return res.json();
    })
    .then(() => {
      getCurrentFeed(); // Refresh feed after deletion
    })
    .catch(err => console.error('Error deleting feed item:', err));
}

// Optional: Add a new feed item via POST
function addNewFeedItem(newItem) {
  fetch('/api/feed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newItem)
  })
  .then(res => {
    if (!res.ok) throw new Error('Failed to add new feed item');
    return res.json();
  })
  .then(() => {
    getCurrentFeed(); // Refresh feed after adding
  })
  .catch(err => console.error('Error adding new feed item:', err));
}

// On window load, set up event listeners and load feed
window.onload = function () {
  document.body.setAttribute('tabindex', '0');
  document.body.focus();

  const clickTarget = document.getElementById('portal_button');
  if (clickTarget) {
    clickTarget.style.cursor = 'pointer';
    clickTarget.addEventListener('click', () => {
      goToLocation('https://gachiakuta.fandom.com/wiki/Gachiakuta_Wiki');
    });
  }

  getCurrentFeed(); // Load feed on page load
};
