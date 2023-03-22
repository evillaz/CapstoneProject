import axios from 'axios';

export default class TvAPI {
  constructor() {
    this.baselink = 'https://api.tvmaze.com/shows';
    this.showList = [];
  }

  async fetchShows() {
    try {
      const response = await axios.get(this.baselink);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  saveShowList(shows) {
    this.showList = shows;
  }

  getShowList() {
    return this.showList;
  }
}
