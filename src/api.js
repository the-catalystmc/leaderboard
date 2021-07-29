
//-----FUNCTION THAT CREATES GAME ID-----
const asyncRequest = async () => {
    const game = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
        method: 'POST',
        body: JSON.stringify({
            'name': 'Trializma'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const token = await game.json();
    console.log(token);
}


class APIUpdate {
//-----FUNCTION THAT POSTS NEW SCORES-----
setScores = async (name, points) => {
    let score = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uGidfxD7uXav77djQKgn/scores', {
        method: 'POST',
        body: JSON.stringify({
            user: name,
            score: points,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const board = await score.json();
    console.log(board);
    return board;
}

getScores = async () => {
    let scores = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uGidfxD7uXav77djQKgn/scores');
    const scoreboard = await scores.json();
    return scoreboard.result;
}

}

const apiUpdate = new APIUpdate();
export { apiUpdate as default };