function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;  
};

var game = {
    createBoard: function() {
        console.log('create board');
    },
    createSnake: function() {
        console.log('create snake');
    },
    createFood: function() {
        console.log('create food');
    },
    run: function() {
        console.log('run game!');
        this.createBoard();
        this.createSnake();
        this.createFood();
        
    }
};

window.addEventListener('load', function() {
    game.run();
});