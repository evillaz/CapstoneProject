import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import displayShow from './modules/displayShow';
import fetchAllTvShows from './modules/fetchAllTvShows';

let tvapi = await fetchAllTvShows();

tvapi.showList.forEach(show => {
  displayShow(show);
});

console.log(tvapi);
