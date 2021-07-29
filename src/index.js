import './style.css';
import uiUtils from './uiUtils';
import apiUpdate from './api';


const submitBtn = document.querySelector('.form__submit');
const refreshBtn = document.querySelector('.board__refresh');
const form = document.querySelector('.form');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  uiUtils.newScore();
});

refreshBtn.addEventListener('click', () => {
  uiUtils.clearBoard();
  uiUtils.loadScores();
});
