import getShowContent from './getShowContent';

const displayShow = (show) => {
  const articleItem = document.createElement('article');
  articleItem.className = 'tvShow';
  articleItem.innerHTML = getShowContent(show);
  const container = document.getElementById('showContainer');
  container.appendChild(articleItem);
};

export default displayShow;
