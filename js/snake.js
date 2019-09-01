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
                td.setAttribute('id', 'cell-' + i + '-' + j);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        document.getElementById('snake-field').appendChild(table);
    },
    createSnake: function() {
        console.log('create snake');
        this.snake.push({row: 10, col: 10});
        this.snake.push({row: 11, col: 10});
    },
    renderSnake: function() {
        var elements = document.getElementsByTagName('td');
        console.log(elements);
        for ( var i = 0; i < this.snake.length; i++ ) {
            var cell = this.snake[i];
            var id = 'cell-' + cell.row + '-' + cell.col;
            document.getElementById(id).classList.add('snake-unit');
        }
    },
    createFood: function() {
        console.log('create food');
    },
    setEvents: function() {
        setInterval(this.move.bind(this), 500);
    },
    move: function() {
        console.log('move!');
        // смотрим направление движения
        // в зависимости от направления
        // определить голову змеи
        // добавляем элемент в начало змеи - создаём новую голову
        // удаляем элемент из хвоста змеи - таким образом змея двигается
    },
    run: function() {
        console.log('run game!');
        this.createBoard();
        this.createSnake();
        this.renderSnake();
        this.createFood();
        this.setEvents();
    }
};

window.addEventListener('load', function() {
    game.run();
});