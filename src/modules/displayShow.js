import getShowContent from './getShowContent';

const displayShow = (show, likes) => {
  const articleItem = document.createElement('article');
  articleItem.className = 'tvShow';
  articleItem.innerHTML = getShowContent(show, likes);
  articleItem.id = show.id;
  const container = document.getElementById('showContainer');
  container.appendChild(articleItem);
};

export default displayShow;
