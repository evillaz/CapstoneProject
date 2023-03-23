import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import displayShow from './modules/displayShow';
import TvAPI from './modules/tvAPI';
import InvolvementAPI from './modules/involvementAPI';

const tvapi = new TvAPI();
const involvementAPI = new InvolvementAPI();

const fetchAllTvShows = async (tvAPI) => {
  const container = document.getElementById('showContainer');
  container.innerHTML = '';
  const shows = await tvAPI.fetchShows();
  tvAPI.saveShowList(shows);
  const showLikesContainer = await involvementAPI.getShowsLikes();
  tvapi.showList.forEach((show) => {
    const matchShow = showLikesContainer.find((s) => s.item_id === show.id);
    let likes = 0;
    if (matchShow) {
      likes = matchShow.likes;
    }
    displayShow(show, likes);
  });
};

fetchAllTvShows(tvapi);

const saveLikeAndRefresh = async (id) => {
  await involvementAPI.saveLike(id);
  fetchAllTvShows(tvapi);
};

document.addEventListener('click', (e) => {
  if (e.target.matches('.likeBtn') || e.target.closest('.likeBtn')) {
    const showid = parseInt(e.target.closest('article').id, 10);
    saveLikeAndRefresh(showid);
  }
});
