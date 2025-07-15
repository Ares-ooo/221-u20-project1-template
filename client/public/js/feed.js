function goToLocation(path) {
  window.location.href = path;
}

window.onload = function () {
  document.body.setAttribute("tabindex", "0");
  document.body.focus();
  const clickTarget = document.getElementById('portal_button');
  if (clickTarget) {
    clickTarget.style.cursor = 'pointer';
    clickTarget.addEventListener('click', () => {
      goToLocation('https://gachiakuta.fandom.com/wiki/Gachiakuta_Wiki');
    });
  }

  // Load feed items from the backend when page loads
  getCurrentFeed();
};

// Fetch and display current feed items
function getCurrentFeed() {
  const feedContainer = document.getElementById('newsfeed');
  feedContainer.innerHTML = '';

  fetch('/api/feed')
    .then(response => response.json())
    .then(feedItems => {
      feedItems.forEach((item, index) => {
        addFeedItemToPage(item, index);
      });
    })
    .catch(error => {
      console.error('Error fetching feed:', error);
    });
}

// Helper: add one feed item to the page
function addFeedItemToPage(item, index) {
  const feedContainer = document.getElementById('newsfeed');

  const itemDiv = document.createElement('div');
  itemDiv.className = 'feed-item';

  const title = document.createElement('h3');
  title.textContent = item.title;
  itemDiv.appendChild(title);

  const body = document.createElement('p');
  body.textContent = item.body;
  itemDiv.appendChild(body);

  if (item.linkUrl) {
    const link = document.createElement('a');
    link.href = item.linkUrl;
    link.textContent = 'Read more';
    link.target = '_blank';
    itemDiv.appendChild(link);
  }

  if (item.imageUrl) {
    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = item.title;
    itemDiv.appendChild(img);
  }

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function () {
    deleteFeedItem(index);
  };
  itemDiv.appendChild(deleteButton);

  feedContainer.appendChild(itemDiv);
}
