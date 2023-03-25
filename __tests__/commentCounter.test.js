import insertComments from "../src/modules/insertComments";
import commentCounter from "../src/modules/commentCounter";

describe('comments counter tests', () => {
 - beforeEach(() => {
    document.body.innerHTML = '<section class="comments"><span class="commentsCounter">0</span></section>';
    const comments = [
      {
        "comment": "Great Show",
        "creation_date": "2023-03-23",
        "username": "Eduardo"
      },
      {
        "comment": "Great Show",
        "creation_date": "2023-03-23",
        "username": "Eduardo"
      },
      {
        "comment": "Great Show !",
        "creation_date": "2023-03-24",
        "username": "Alonso"
      }
    ];
  insertComments(comments);  
  });
  test('expected counter to be 3', () => {
    let counter = commentCounter();
    expect(counter).toBe(3);
  });
  test('reducing comments by 1 new counter expected to be 2', () => {
    const comments = document.querySelector('.comments');
    const comment = comments.firstChild;
    comments.removeChild(comment);
    let counter = commentCounter();
    expect(counter).toBe(2);
  })
});
