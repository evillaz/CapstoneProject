const getCommentPopUpContent = ({ image, name, summary }) => `
          <div class="show-details d-flex v">
            <span class="close-button">
              <i class="fas fa-times-circle x-button"></i>
            </span>
            <div class="popup-image" style="background-image: url(${image.medium})">
            </div>
            <span class="showSummary d-flex v">
              <h3 class="show-name">${name}</h3>
              ${summary}
            </span>
            <ul class="genres d-flex h"></ul>
          </div>
          <hr>
            <div class="comments-container d-flex v">
              <div class="commentsTitle">
                <h3>Comments(<span class="commentsCounter"></span>)</h3>
              </div>
              <ul class="comments"></ul>
            </div>
            <hr>
            <form class="submit-comment d-flex v" >
              <h4>Submit your comment</h4>
              <label for="commenter-name"></label>
              <input class="commenter-name" type="text" id="commenter-name" name="commenter-name" placeholder="Your name" required />
              <label for="comment-content"></label>
              <textarea class="comment-content" id="comment-content" name="comment" placeholder="Your insight" required></textarea>
              
              <button class="submit-button">Comment</button>
            </form>
      `;

export default getCommentPopUpContent;
