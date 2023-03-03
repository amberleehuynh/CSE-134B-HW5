// Store the blog posts
let posts = [];

// Show all the blog posts in the HTML list
function showPostsList() {
  const postList = document.getElementById('post-list');
  postList.innerHTML = ''; 
  const emptyList = document.getElementById('empty-list');

  if (posts.length === 0) {
    emptyList.innerHTML = 'There are no posts';
    return;
  } 
  else {
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="post-title">${post.title}</div>
        <div class="post-date">${post.date}</div>
        <div class="post-summary">${post.summary}</div>
        <div class="post-buttons">
          <button class="edit-button" onclick="editPost(${post.id}, '${post.summary}', '${post.title}', '${post.date}')">✏️</button>
          <button class="delete-button" onclick="deletePost(${post.id})">🗑️</button>
        </div>
      `;
      postList.appendChild(li);
    }
  }
}

// Add a blog post
function addPost(title, date, summary) {
  const id = Date.now(); 
  const post = { id, title, date, summary };
  posts.push(post);
  showPostsList();
}

// Delete a blog post
function deletePost(id) {
  const index = posts.findIndex(post => post.id === id);
  if (index >= 0) {
    posts.splice(index, 1);
    showPostsList();
  }
}

// Edit a blog post
function editPost(id, title, date, summary) {
  const index = posts.findIndex(post => post.id === id);
  if (index >= 0) {
    posts[index].title = title;
    posts[index].date = date;
    posts[index].summary = summary;
    showPostsList();
  }
}

// Handle Add Post button when user clicks on it
const addPostButton = document.getElementById('add-post-button');
addPostButton.addEventListener('click', () => {
  document.getElementById('create-blog-post').showModal();
});

// Handle Create Post button when user clicks on it
const createPostButton = document.querySelector('#create-blog-post button[value="ok"]');
createPostButton.addEventListener('click', (event) => {
  // Prevent form submission
  event.preventDefault(); 

  const title = document.getElementById('post-title').value;
  const date = document.getElementById('post-date').value;
  const summary = document.getElementById('post-summary').value;
  addPost(title, date, summary);
  document.getElementById('create-blog-post').close();

  // Reset the form
  document.getElementById('post-title').value = '';
  document.getElementById('post-date').value = '';
  document.getElementById('post-summary').value = '';
});

// Handle Edit Post button when user clicks on it
const editPostButton = document.querySelector('#edit-blog-post button[value="ok"]');
editPostButton.addEventListener('click', (event) => {
  // Prevent form submission
  event.preventDefault(); 

  const id = window.currentPostId;
  const title = document.getElementById('edit-title').value;
  const date = document.getElementById('edit-date').value;
  const summary = document.getElementById('edit-summary').value;
  editPost(id, title, date, summary);
  document.getElementById('edit-blog-post').close();
  
  // Reset the form
  document.getElementById('edit-title').value = '';
  document.getElementById('edit-date').value = '';
  document.getElementById('edit-summary').value = '';
});

// Handle Delete Post button when user clicks on it
const deleteButton = document.querySelector('#delete-blog-post button[value="ok"]');
deleteButton.addEventListener('click', (event) => {
  // Prevent form submission
  event.preventDefault();
  
  const id = window.currentPostId;
  deletePost(id);
  document.getElementById('delete-blog-post').close();
})