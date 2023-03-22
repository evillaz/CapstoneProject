const getShowContent = ({
  image, name
}) => {
  return `<div class="showImgPlaceholder d-flex" style="background-image: url(${image.original})"></div>
  <div class="showContent d-flex v">
    <div class="showName d-flex h">
      <h3 class="showTitle">${name}</h2>
      <div class="likes d-flex v">
        <button class="likeBtn">
          <i class="fa-regular fa-heart"></i>
        </button>
        <span class="likesCounter">4 Likes</span>
      </div>
    </div>
    <button class="commentsBtn">Comments</button>
    <button class="reservationsBtn">Reservations</button>
  </div>
  `
}

export default getShowContent;