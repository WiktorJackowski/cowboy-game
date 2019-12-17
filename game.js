var game = new Phaser.Game(1000, 800, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
let player;
let ball;

function preload() {
    game.load.spritesheet('background' , 'assets/background.png', 1000 , 800);
    game.load.spritesheet('kowboj' , 'assets/kowboj.png', 766, 468);
    game.load.spritesheet('pilka', 'assets/pilka.png', 100, 100);
}

function create() {
    game.add.tileSprite(0,0,1000,800,'background');
    ball = game.add.sprite(200,0, 'pilka');
    player = game.add.sprite(0,600,'kowboj');

    game.physics.arcade.enable([player, ball]) ;
    game.physics.arcade.gravity.y = 200;
    //player.body.bounce.y = 0.95;
    player.body.collideWorldBounds = true;
    player.body.allowGravity = false;
    player.body.immovable = true;



    ball.body.bounce.y = 0.95;
    ball.body.collideWorldBounds = true;

    // game.stage.backgroundColor = '#124184';
    //
    // sprite = game.add.sprite(300, 0, 'gameboy', 2);
    // sprite2 = game.add.sprite(300, 400, 'gameboy', 3);
    //
    // game.physics.arcade.enable([sprite, sprite2]);
    //
    // game.physics.arcade.gravity.y = 200;
    //
    // sprite.body.bounce.y = 0.95;
    // sprite.body.collideWorldBounds = true;
    //
    // sprite2.body.allowGravity = false;
    // sprite2.body.immovable = true;
    //
    // game.input.onDown.add(toggleBody, this)

}

function toggleBody() {

    //	Here we simply disable the body entirely
    //	This stops all motion and collision checks against it
    //	without actually destroying the body object itself.

    if (sprite2.body.enable)
    {
        sprite2.body.enable = false;
    }
    else
    {
        sprite2.body.enable = true;
    }

}

function update() {
    game.physics.arcade.collide(player, ball);
}

function render() {

}
