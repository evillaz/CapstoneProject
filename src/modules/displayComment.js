const displayComment = (commentInput) => {
  const commentItem = document.createElement('li');
  commentItem.className = 'comment d-flex h';
  commentItem.innerHTML = `
    <span class="comment-time">${commentInput.creation_date} by</span>
    <span class="commenter">${commentInput.username}:</span>
    <span class="comment-body">"${commentInput.comment}"</span>
    `;
  return commentItem;
};

export default displayComment;
