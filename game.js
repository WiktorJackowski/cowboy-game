var game = new Phaser.Game(1000, 800, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
let player;
let ball;

function preload() {
    game.load.spritesheet('background' , 'assets/background.png', 1000 , 800);
    game.load.spritesheet('kowboj' , 'assets/kowboj.png', 766, 468);
    game.load.spritesheet('pilka', 'assets/pilka.png', 100, 100);
}

function create() {
    prepareSprites();

    game.physics.arcade.enable([player, ball]) ;
    game.physics.arcade.gravity.y = 200;

    player.body.collideWorldBounds = true;
    player.body.allowGravity = false;
    player.body.immovable = true;

    ball.body.bounce.y = 0.95;
    ball.body.bounce.x = 0.95;
    ball.body.collideWorldBounds = true;
    ball.body.velocity.setTo(200,200);
}

function update() {
    game.physics.arcade.collide(player, ball);
}

function render() {

}

function prepareSprites(){
    game.add.tileSprite(0,0,1000,800,'background');
    ball = game.add.sprite(800,0, 'pilka');
    player = game.add.sprite(0,600,'kowboj');
    player.scale.setTo(0.8,0.8);
}
