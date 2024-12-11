// player count filter
const playerFilter = document.getElementById('player-filter');
const playerFilterLabel = document.getElementById('player-filter-label');

    function updatePlayerFilterLabel() {
        if (playerFilter.value > 0) { // 0 = no filter
            playerFilterLabel.textContent = playerFilter.value;
        } else {
            playerFilterLabel.textContent = '#';
        }
    };

    updatePlayerFilterLabel(); // show label when the page loads
    playerFilter.addEventListener('input', updatePlayerFilterLabel);