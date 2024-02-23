let readMoreState = true;

const readMoreToggler = document.getElementById('readmore-toggler');
const expandable = document.getElementById('expandable-content');

readMoreToggler.addEventListener('click', () => {
  readMoreState = !readMoreState;
  if (readMoreState) {
    expandable.style.display = 'none';
    readMoreToggler.innerText = '...Read More';
    return;
  }
  expandable.style.display = 'block';
  readMoreToggler.innerText = '...Show Less';
});
