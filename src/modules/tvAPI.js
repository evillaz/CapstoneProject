import axios from "axios";

class TvAPI {
  baselink;
  showList;

  constructor() {
    this.baselink = 'https://api.tvmaze.com/shows';
    this.showList = [];
  }

  fetchShows = async () => {
    try {
      const response = await axios.get(this.baselink);
      return response.data;
    } catch(error) {
      return error;
    }
  }

  saveShowList = (shows) => {
    this.showList = shows;
  }
  getShowList = () => this.showList;
}

export default TvAPI;