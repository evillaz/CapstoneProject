import getCommentPopUpContent from './getCommentPopUpContent';
import insertGenres from './insertGenres';
import InvolvementAPI from './involvementAPI';
import refreshComments from './refreshComments';

const displayCommentPopUp = async (show) => {
  const involvementAPI = new InvolvementAPI();
  const comments = await involvementAPI.getComments(parseInt(show.id, 10));
  const popupItem = document.createElement('div');
  popupItem.className = 'showPopup d-flex v';
  popupItem.id = `showPopUp${show.id}`;
  popupItem.innerHTML = getCommentPopUpContent(show);
  const popUpContainer = document.getElementById('popupSection');
  popUpContainer.innerHTML = '';
  popUpContainer.appendChild(popupItem);
  insertGenres(show);
  refreshComments(comments);
  document.querySelector('#popupSection').style.display = 'flex';
};

export default displayCommentPopUp;
