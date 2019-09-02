function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;  
};

var game = {
    size: 20,
    snake: [],
    food: {},
    direction: {
        row: -1,
        col: 0
    },
    KEY_LEFT: 37,
    KEY_UP: 38,
    KEY_RIGHT: 39,
    KEY_DOWN: 40,
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
    render: function() {
        var elements = document.getElementsByTagName('td');

        for ( var i = 0; i < elements.length; i++ ) {
            elements[i].classList.remove('snake-unit');
            elements[i].classList.remove('food-unit');
        }
        
        for ( var i = 0; i < this.snake.length; i++ ) {
            var cell = this.snake[i];
            var id = 'cell-' + cell.row + '-' + cell.col;
            document.getElementById(id).classList.add('snake-unit');
        }

        if ( this.food.row && this.food.col ) {
            var id =  'cell-' + this.food.row + '-' + this.food.col;
            document.getElementById(id).classList.add('food-unit');
        }
    },
    isSnakeCell: function(row, col) {
        for ( var i = 0; i < this.snake.length; i++ ) {
            var cell = this.snake[i];
            
            if ( cell.row == row && cell.col == col ) {
                return true;
            }
        }

        return false;
    },
    createFood: function() {
        console.log('create food');
        var pool = [];
        for ( var i = 0; i < this.size; i++ ) {
            for ( var j = 0; j < this.size; j++ ) {
                if ( !this.isSnakeCell(i, j) ){
                    pool.push({row: i, col: j});
                }
            }
        }
        
        var index = random(0, pool.length);
        this.food = pool[index];
    },
    setEvents: function() {
        this.intervalId = setInterval(this.move.bind(this), 500);
        document.addEventListener('keydown', this.changeDirection.bind(this));
    },
    changeDirection: function(e) {
        switch ( e.keyCode ) {

            case this.KEY_LEFT:
                // движение влево
                this.direction = {
                    row: 0,
                    col: -1
                };
                break;

            case this.KEY_UP:
                // движение вверх
                this.direction = {
                    row: -1,
                    col: 0
                };
                break;

            case this.KEY_RIGHT:
                // движение вправо
                this.direction = {
                    row: 0,
                    col: 1
                };
                break;

            case this.KEY_DOWN:
                // движение вниз
                this.direction = {
                    row: 1,
                    col: 0
                };
                break;
            default:
                break;
        }
        console.log(e);
        console.log(e.target);
        console.log(this);
    },
    checkCell: function(row, col) {
        if ( row < 0 || row >= this.size || col < 0 || col >= this.size ) {
            return false;
        }

        return true;
    },
    move: function() {
        console.log('move!');
        // смотрим направление движения
        // в зависимости от направления
        // определить голову змеи

        // добавляем элемент в начало змеи - создаём новую голову
        var row = this.snake[0].row + this.direction.row;
        var col = this.snake[0].col + this.direction.col;

        if ( !this.checkCell(row, col) ) {
            return this.over();
        }

        this.snake.unshift({row: row, col: col});

        // удаляем элемент из хвоста змеи - таким образом змея двигается
        if ( !this.food || this.food.row != row || this.food.col != col ) {
            // еды нет
            this.snake.pop();
        } else {
            // еду съели
            this.createFood();
        }

        this.render();
    },
    run: function() {
        console.log('run game!');
        this.createBoard();
        this.createSnake();
        this.createFood();
        this.setEvents();
        this.render();
    },
    over: function() {
        alert('Игра завершена!');
        clearInterval(this.intervalId);
    }
};

window.addEventListener('load', function() {
    game.run();
});