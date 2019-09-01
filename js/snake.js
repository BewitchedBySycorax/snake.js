function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;  
};

var game = {
    run: function() {
        console.log('run game!');
    }
};

window.addEventListener('load', function() {
    game.run();
});