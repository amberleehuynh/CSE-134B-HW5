// Define a global variable to store the blog posts
let posts = [];

// Function to display all the blog posts in the HTML list
function displayPosts() {
  const postList = document.getElementById('post-list');
  postList.innerHTML = ''; // clear the list before re-adding all posts
  if (posts.length === 0) {
    const emptyListNotice = document.getElementById('emptyListNotice');
    emptyListNotice.innerHTML = 'No posts available.';
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
  const id = Date.now(); // generate a unique id based on the current timestamp
  const post = { id, title, date, summary };
  posts.push(post);
  displayPosts();
}

// Delete a blog post
function deletePost(id) {
  const index = posts.findIndex(post => post.id === id);
  if (index >= 0) {
    posts.splice(index, 1);
    displayPosts();
  }
}

// Edit a blog post
function editPost(id, title, date, summary) {
  const index = posts.findIndex(post => post.id === id);
  if (index >= 0) {
    posts[index].title = title;
    posts[index].date = date;
    posts[index].summary = summary;
    displayPosts();
  }
}

// Function to handle "Add Post" button when user clicks it
const addPostButton = document.getElementById('add-post-button');
addPostButton.addEventListener('click', () => {
  document.getElementById('create-blog-post').showModal();
});

// Function to handle "Create Post" button when user clicks it
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

// Function to handle "Edit Post" button when user clicks it
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

// Function to handle the "Delete Post" button click event
const deleteButton = document.querySelector('#delete-blog-post button[value="ok"]');
deleteButton.addEventListener('click', (event) => {
  // Prevent form submission
  event.preventDefault();
  
  const id = window.currentPostId;
  deletePost(id);
  document.getElementById('delete-blog-post').close();
})