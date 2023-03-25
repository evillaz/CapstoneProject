import displayShow from "../src/modules/displayShow";
import totalShowCounter from "../src/modules/totalShowCounter"

describe('shows counter tests', () => {
  beforeEach(() => {
    document.body.innerHTML = '<section id="showContainer"></section>';
    const likesContainer = [
      {
        item_id: 1,
        likes: 20
      },
      {
        item_id: 2,
        likes: 20
      },
    ]
    const shows = [
      {
        id: 1,
        image: "ha",
        name: "show 1"
      },
      {
        id: 2,
        image: "ha",
        name: "show 2"
      }
    ]
    shows.forEach((show) => {
      displayShow(show, likesContainer);
    });
  });
    test('expected counter of shows to be 2', () => {
      let counter = totalShowCounter();
      expect(counter).toBe(2);
    });
    test('reducing tv shows by 1 new expected value of counter should be 1', () => {
      const showContainer = document.querySelector('#showContainer');
      const show = showContainer.firstChild;
      showContainer.removeChild(show);
      let counter = totalShowCounter();
      expect(counter).toBe(1);
    });
  });
