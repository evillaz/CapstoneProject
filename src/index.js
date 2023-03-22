import './style.css';
import tvapi from './modules/tvAPI';
import '@fortawesome/fontawesome-free/css/all.css';
import getShowContent from './modules/getShowContent';
const fetchAllTvShows = async () => {
  const shows = await tvapi.fetchShows();
  tvapi.saveShowList(shows);
  const showprev = tvapi.showList[0];
  const showprev1 = tvapi.showList[1];
  const articleItem = document.createElement('article');
  const articleItem1 = document.createElement('article');
  articleItem.className = 'tvShow';
  articleItem.innerHTML = getShowContent(showprev);
  articleItem1.className = 'tvShow';
  articleItem1.innerHTML = getShowContent(showprev1);
  const container = document.getElementById('showContainer');
  container.appendChild(articleItem);
  container.appendChild(articleItem1);
}

fetchAllTvShows();
