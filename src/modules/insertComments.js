import displayComment from './displayComment';

const insertComments = (comments) => {
  let commentsContainer = [];
  commentsContainer = document.querySelector('.comments');
  commentsContainer.innerHTML = '';
  if (comments.length) {
    comments.forEach((comment) => {
      commentsContainer.appendChild(displayComment(comment));
    });
  }
};

export default insertComments;
