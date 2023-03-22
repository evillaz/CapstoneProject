import TvAPI from './tvAPI';

const fetchAllTvShows = async () => {
  const tvapi = new TvAPI();
  const shows = await tvapi.fetchShows();
  tvapi.saveShowList(shows);
  return tvapi;
}

export default fetchAllTvShows;