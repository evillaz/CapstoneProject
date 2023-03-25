const commentCounter = () => {
  const commentsNumber = document.querySelectorAll('.comment').length;
  return commentsNumber;
};

export default commentCounter;
