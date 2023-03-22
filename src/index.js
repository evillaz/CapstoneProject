import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import displayShow from './modules/displayShow';
import TvAPI from './modules/tvAPI';

const tvapi = new TvAPI();

const fetchAllTvShows = async (tvAPI) => {
  const shows = await tvAPI.fetchShows();
  tvAPI.saveShowList(shows);
  tvapi.showList.forEach((show) => {
    displayShow(show);
  });
};

fetchAllTvShows(tvapi);
