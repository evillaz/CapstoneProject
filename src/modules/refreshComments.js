import insertComments from './insertComments';
import commentCounter from './commentCounter';

const refreshComments = (comments) => {
  insertComments(comments);
  const counterPlaceholder = document.querySelector('.commentsCounter');
  const counter = commentCounter();
  counterPlaceholder.innerHTML = counter;
};

export default refreshComments;
