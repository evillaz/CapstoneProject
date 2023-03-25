import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import displayShow from './modules/displayShow';
import TvAPI from './modules/tvAPI';
import InvolvementAPI from './modules/involvementAPI';
import displayCommentPopUp from './modules/displayCommentPopUp';
import totalShowCounter from './modules/totalShowCounter';
import refreshComments from './modules/refreshComments';

const tvapi = new TvAPI();
const involvementAPI = new InvolvementAPI();

const fetchAllTvShows = async (tvAPI) => {
  const container = document.getElementById('showContainer');
  container.innerHTML = '';
  const shows = await tvAPI.fetchShows();
  tvAPI.saveShowList(shows);
  const showLikesContainer = await involvementAPI.getShowsLikes();
  tvAPI.showList.forEach((show) => {
    displayShow(show, showLikesContainer);
  });
  const counter = totalShowCounter();
  const showsCounter = document.querySelector('#showsCounter');
  showsCounter.innerHTML = counter;
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
  if (e.target.matches('.commentsBtn')) {
    const id = parseInt(e.target.closest('.tvShow').id, 10);
    const show = tvapi.showList.find((s) => s.id === id);
    displayCommentPopUp(show);
  }
  if (e.target.matches('.x-button')) {
    const popUp = document.querySelector('.showPopup ');
    popUp.parentNode.removeChild(popUp);
    document.querySelector('#popupSection').style.display = 'none';
  }
  if (e.target.matches('.submit-button')) {
    e.preventDefault();
    const popupId = parseInt((e.target.closest('.showPopup').id).substr(9), 10);
    const name = document.querySelector('.commenter-name').value;
    const comment = document.querySelector('.comment-content').value;
    const form = document.querySelector('.submit-comment');
    form.reset();
    const saveAndDisplayComment = async () => {
      await involvementAPI.saveComment(popupId, name, comment);
      const comments = await involvementAPI.getComments(popupId);
      refreshComments(comments);
    };
    saveAndDisplayComment();
  }

  const popupSection = document.querySelector('#popupSection');
  if (popupSection.hasChildNodes()) {
    const popup = popupSection.querySelector('.showPopup');
    if (!popup.contains(e.target)) {
      popupSection.removeChild(popup);
      document.querySelector('#popupSection').style.display = 'none';
    }
  }
});
