function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;  
};

var game = {
    size: 20,
    snake: [],
    createBoard: function() {
        console.log('create board');
        var table = document.createElement('table');
        table.classList.add('game-table');

        for ( var i = 0; i < this.size; i++ ) {
            var tr = document.createElement('tr');

            for ( var j = 0; j < this.size; j++ ) {
                var td = document.createElement('td');
                td.classList.add('game-table-cell');
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        document.getElementById('snake-field').appendChild(table);
    },
    createSnake: function() {
        console.log('create snake');
        this.snake.push({row: 10, col: 10});
        this.snake.push({row: 11, col: 11});
    },
    createFood: function() {
        console.log('create food');
    },
    run: function() {
        console.log('run game!');
        this.createBoard();
        this.createSnake();
        this.renderSnake();
        this.createFood();
        
    }
};

window.addEventListener('load', function() {
    game.run();
});