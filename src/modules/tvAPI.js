import axios from 'axios';

export default class TvAPI {
  constructor() {
    this.apiLink = 'https://api.tvmaze.com/shows';
    this.showList = [];
  }

  async fetchShows() {
    try {
      const response = await axios.get(this.apiLink);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  saveShowList(shows) {
    this.showList = shows;
  }
}
