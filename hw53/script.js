document.getElementById('btn').addEventListener('click', () => {
  const postId = document.getElementById('input').value;

  if (postId < 1 || postId > 100) {
    alert('Введіть номер від 1 до 100');
    
    return;
  }

  getPost(postId);
});

function getPost(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(resp => {
      if (resp.status < 200 || resp.status >= 300) {
        throw new Error('Пост не знайдено');
      }
      
      return resp.json();
    })
    .then(post => showPost(post))
    .catch(error => {
      console.error('Error:', error);
    });
}

function showPost(post) {
  const postDisplay = document.getElementById('post');

  postDisplay.innerHTML = `
      <div id="post-${post.id}" data-type="post">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
          <button onclick="getComments(${post.id})">Показати коментарі</button>
          <div id="comments-${post.id}" data-type="comments"></div>
      </div>
  `;
}

function getComments(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(resp => {
      if (resp.status < 200 || resp.status >= 300) {
        throw new Error('Немає коментарів');
      }

      return resp.json();
    })
    .then(comments => showComments(postId, comments))
    .catch(error => {
      console.error('Error:', error);
    });
}

function showComments(postId, comments) {
  const commentsDisplay = document.getElementById(`comments-${postId}`);

  commentsDisplay.innerHTML = comments.map(comment => `
      <div>
          <h4>${comment.name}</h4>
          <p class="comment-body">${comment.body}</p>
          <a class="comment-email" href="">By: ${comment.email}</a>
      </div>
  `).join('');
}