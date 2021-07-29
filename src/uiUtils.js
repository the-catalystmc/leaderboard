
import apiUpdate from './api';

class UIUtils {
    leaderboard = document.querySelector('.board__content');
    form = document.querySelector('.form');

    newScore = () => {
        const name = this.form.name.value;
        const score = this.form.score.value;
        apiUpdate.setScores(name, score);
        this.form.name.value = '';
        this.form.score.value = '';
    };

    createScore = (data) => {
        const name = data.user;
        const score = data.score;
        const newScore = document.createElement('li');
        newScore.classList.add('board__item');
        newScore.innerHTML = `${name}: ${score}`;
        this.leaderboard.appendChild(newScore);
    }

    loadScores = async () => {
        let scoreData = [];
        scoreData = await apiUpdate.getScores();
        this.sortScores(scoreData);
        scoreData.forEach(score => {
            this.createScore(score)
        });
    }

    clearBoard = () => {
        this.leaderboard.innerHTML = '';
    }

    sortScores = (array) => array.sort((a, b) => b.score - a.score);
}

const uiUtils = new UIUtils();
export { uiUtils as default };