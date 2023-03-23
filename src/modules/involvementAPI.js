import axios from 'axios';

export default class InvolvementAPI {
  constructor() {
    this.apiLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.appId = '6saI6XCmaHZtVNcT2I16';
  }

  async saveLike(showId) {
    try {
      const response = await axios.post(
        `${this.apiLink}apps/${this.appId}/likes`,
        {
          item_id: showId,
        },
      );
      return response;
    } catch (error) {
      return error;
    }
  }

  async getShowsLikes() {
    try {
      const response = await axios.get(
        `${this.apiLink}apps/${this.appId}/likes`,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getLikesByShowID(showid) {
    try {
      const response = await axios.get(
        `${this.apiLink}apps/${this.appId}/likes?item_id=${showid}`,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
