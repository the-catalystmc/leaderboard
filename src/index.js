import './style.css';

const leaderboard = document.querySelector('.board__content');
const form = document.querySelector('.form');
const submitBtn = document.querySelector('.form__submit');

const updateScore = () => {
  const name = form.name.value;
  const score = form.score.value;
  const newScore = document.createElement('li');
  newScore.classList.add('board__item');
  newScore.innerHTML = `${name}: ${score}`;
  leaderboard.appendChild(newScore);
  form.name.value = '';
  form.score.value = '';
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  updateScore();
});
