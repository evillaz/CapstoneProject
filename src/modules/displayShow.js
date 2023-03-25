import getShowContent from './getShowContent';

const displayShow = (show, likesContainer) => {
  const articleItem = document.createElement('article');
  articleItem.className = 'tvShow';
  articleItem.id = show.id;
  const matchShow = likesContainer.find((s) => s.item_id === show.id);
  let likes = 0;
  if (matchShow) {
    likes = matchShow.likes;
  }
  articleItem.innerHTML = getShowContent(show, likes);
  const container = document.getElementById('showContainer');
  container.appendChild(articleItem);
};

export default displayShow;
