'use strict';

var TILE_WIDTH = 101,
    TILE_HEIGHT = 83,
    COLLIDE = 50;

// The character superclass, Loading the image and Setting the initial location
var Character = function(sprite, x, y) {
	this.sprite = sprite;
	this.x = x;
	this.y = y;
};

// Draw the character on the screen
Character.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// The enemy subclasses of character, Get a random speed
var Enemy = function(x, y) {
	Character.call(this, 'images/enemy-bug.png', x, y);
    this.speed = (Math.random() * 4 + 1) * 100;
};

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // When enemies crossed the width of the canvas, a random update rate
    if(this.x < 505) {
    	this.x += this.speed * dt;
    }
    else {
    	this.x = -TILE_WIDTH;
    	this.speed = (Math.random() * 4 + 1) * 100;
    }
    // If player and Enemies collide, then player reset
    if(player.x <= this.x + COLLIDE &&
    	player.x >= this.x - COLLIDE &&
    	player.y <= this.y + COLLIDE &&
    	player.y >= this.y - COLLIDE) {
    	player.reset();
    }
};

// The player subclasses of character
var Player = function() {
	Character.call(this, 'images/char-boy.png', 202, 402);
};

Player.prototype = Object.create(Character.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
};

// Reset the player on the screen
Player.prototype.reset = function() {
	this.x = 202;
	this.y = 402;
};

// The handleInput method, which should receive user input, allowedKeys (
// the key which was pressed) and move the player according to that input
// The player cannot move off screen
// If the player reaches the waterm, then reset the player
Player.prototype.handleInput = function(keys) {
	switch(keys) {
		case 'left':
		if(this.x === 0) {
			this.x = 0;
		}
		else {
			this.x -= TILE_WIDTH;
		}
		break;
		case 'right':
		if(this.x === 404) {
			this.x = 404;
		}
		else {
			this.x += TILE_WIDTH;
		}
		break;		
		case 'up':
		if(this.y === 70) {
			this.reset();
		}
		else {
			this.y -= TILE_HEIGHT;
		}
		break;
		case 'down':
		if(this.y === 402) {
			this.y = 402;
		}
		else {
			this.y += TILE_HEIGHT;
		}
		break;
	}
};

// Creating a new Player object and several new Enemies.
var player = new Player();
var allEnemies = [new Enemy(0, 63), new Enemy(100, 146), new Enemy(-200, 229)];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});