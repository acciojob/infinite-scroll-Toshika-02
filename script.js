//your code here!
const list = document.getElementById('infi-list');

// Add initial list items
for (let i = 1; i <= 10; i++) {
  list.innerHTML += `<li>Item ${i}</li>`;
}

// Function to add more items when reaching the end of the list
function loadMoreItems() {
  for (let i = 1; i <= 2; i++) {
    const lastItem = list.lastElementChild;
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${list.children.length + i}`;
    list.insertBefore(newItem, lastItem.nextElementSibling);
  }
}

// Listen for scroll events on the list
list.addEventListener('scroll', () => {
  const isNearBottom = list.scrollTop + list.clientHeight >= list.scrollHeight - 50; // Adjust 50 for desired threshold
  if (isNearBottom) {
    loadMoreItems();
  }
});


