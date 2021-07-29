
import apiUpdate from './api';

class UIUtils {
    leaderboard = document.querySelector('.board__content');
    form = document.querySelector('.form');

    updateScore = () => {
        const name = this.form.name.value;
        const score = this.form.score.value;
        const newScore = document.createElement('li');
        newScore.classList.add('board__item');
        newScore.innerHTML = `${name}: ${score}`;
        this.leaderboard.appendChild(newScore);
        this.form.name.value = '';
        this.form.score.value = '';
    };
}

const uiUtils = new UIUtils();
export { uiUtils as default };