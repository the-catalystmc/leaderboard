import './style.css';
import uiUtils from './uiUtils';
import apiUpdate from './api';


const submitBtn = document.querySelector('.form__submit');
const refreshBtn = document.querySelector('.board__refresh');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  uiUtils.updateScore();
  apiUpdate.setScores();
});

refreshBtn.addEventListener('click', () => {
  apiUpdate.getScores();
});
