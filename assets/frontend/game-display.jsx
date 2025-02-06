document.addEventListener("DOMContentLoaded", function () {
    //move to sep file when more games added later
    const gameData = {
        "version": "0.2.0",
        "games": [
            {
                "title": "Rabbit Race",
                "img": "../images/thumbnails/rabbit-race.png",
                "url": "games/rabbit-race/rabbit-race.js",
                "desc": "Purple Rabbit: 1, Red Rabbit: 2"
            },
            {
                "title": "Yarn Toss",
                "img": "../images/thumbnails/yarn-toss.png",
                "url": "games/yarn-toss/yarn-toss.js",
                "desc": "Purple Rabbit: 1, Red Rabbit: 2"
            },
            {
                "title": "Trace",
                "img": "../images/thumbnails/trace.png",
                "url": "games/trace/trace.js",
                "desc": "Right: 1, Up: 2"
            },
            {
                "title": "Capybara Orange",
                "img": "../images/thumbnails/capybara-orange.png",
                "url": "games/capybara-orange/capybara-orange.js"
            }
        ]
    };

    const gameGrid = document.getElementById("game-grid")

    //create a grid of game thumbnails on homepage

    gameData.games.forEach(game => {
        //each game has a card
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        //each card is an image/thumbnail
        const img = document.createElement("img");

        img.src = game.img;
        img.alt = game.title;
        img.classList.add("game-thumbnail");

        //when clicked, bring to game page
        gameCard.addEventListener("click", () => {
            const encodedUrl = encodeURIComponent(game.url);
            window.location.href = `game-page.html?game=${encodedUrl}`;
        });

        gameCard.appendChild(img);
        gameGrid.appendChild(gameCard);
    });
});