function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;  
};

var game = {
    size: 20,
    createBoard: function() {
        console.log('create board');
        var table = document.createElement('table');

        for ( var i = 0; i < this.size; i++ ) {
            var tr = document.createElement('tr');

            for ( var j = 0; j < this.size; j++ ){
                var td = document.createElement('td');
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        
        document.getElementById('snake-field').appendChild(table);
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