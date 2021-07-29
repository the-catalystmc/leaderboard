import './style.css';
import uiUtils from './uiUtils';
import apiUpdate from './api';


const submitBtn = document.querySelector('.form__submit');
const refreshBtn = document.querySelector('.board__refresh');
const form = document.querySelector('.form');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  apiUpdate.setScores(form.name.value, form.score.value);
  uiUtils.updateScore();
});

refreshBtn.addEventListener('click', () => {
  apiUpdate.getScores();
});
