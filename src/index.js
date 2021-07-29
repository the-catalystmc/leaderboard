import './style.css';
import uiUtils from './uiUtils';

const submitBtn = document.querySelector('.form__submit');
const refreshBtn = document.querySelector('.board__refresh');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  uiUtils.newScore();
});

refreshBtn.addEventListener('click', () => {
  uiUtils.clearBoard();
  uiUtils.loadScores();
});

window.addEventListener('load', () => {
  uiUtils.clearBoard();
  uiUtils.loadScores();
})