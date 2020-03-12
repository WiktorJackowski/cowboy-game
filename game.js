var game = new Phaser.Game(1000, 800, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });
let player;
let clonesGroup;
let ball;
let cursors;
let bg;

function preload() {
    game.load.spritesheet('background' , 'assets/background.png', 1000 , 800);
    game.load.spritesheet('kowboj' , 'assets/kowboj.png', 766, 468);
    game.load.spritesheet('pilka', 'assets/pilka.png', 100, 100);
    game.load.image('clone-trooper', 'assets/clone-trooper.png');
}

function create() {
    clonesGroup = game.add.group();
    for (var i = 0; i < 16; i++)
    {
        //  This creates a new Phaser.Sprite instance within the group
        //  It will be randomly placed within the world and use the 'baddie' image to display
        clonesGroup.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'clone-trooper', 200);
    }

    //bg = game.add.sprite(0,0,'background');
    ball = game.add.sprite(800,0, 'pilka');
    player = game.add.sprite(0,600,'kowboj');
    player.scale.setTo(0.4,0.4);


    game.physics.arcade.enable([player, ball]);

    game.physics.arcade.gravity.y = 200;

    player.body.collideWorldBounds = true;
    player.body.allowGravity = false;
    player.body.immovable = true;

    ball.body.bounce.y = 0.95;

    ball.body.bounce.x = 0.95;
    ball.body.collideWorldBounds = true;
    ball.body.velocity.setTo(200,200);
    cursors = game.input.keyboard.createCursorKeys();



    clonesGroup.setAll('body.collideWorldBounds', true);
    clonesGroup.setAll('body.bounce.x', 1);
    clonesGroup.setAll('body.bounce.y', 1);
}

function update() {
    game.physics.arcade.collide(player, ball);
    game.physics.arcade.collide(clonesGroup);



    if (cursors.left.isDown)
    {
        player.scale.x = -0.4;
        player.body.velocity.x -= 4;
    }
    else if (cursors.right.isDown)
    {
        player.scale.x = 0.4;
        player.body.velocity.x += 4;
    }

    if (cursors.up.isDown)
    {
        player.body.velocity.y -= 4;
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y += 4;
    }
}

function render() {

}
