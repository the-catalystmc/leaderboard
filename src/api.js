
//-----FUNCTION THAT CREATES GAME ID-----
let asyncRequest = async () => {
    let game = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
        method: 'POST',
        body: JSON.stringify({
            'name': 'trial game'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    const token = await game.json();
    console.log(token);
}