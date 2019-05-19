/*
Multimédia Beadandó 2019
------------------------
Név: Balazsits Huba
Neptun: KE0ZJP
game: Squarus
*/
//test
/*!!WARNING SPAGHETTI CODE IN HERE!!*/
var gameArea = $('<div id = "game_area"></div>');
var map = 1;


var KEYLEFT = 37;
var KEYUP = 38;
var KEYRIGHT = 39;
var KEYDOWN = 40;
var size = 10;

var blockedBlocks = [];
var boxes = [];
var cannons = [];
var laserBlocks = [];


var player = {x: 0, y: 0};
var playerTemp = {x: 0, y: 0};
var stopped = true;
var speed = 65;
var winBlock = {x: 1, y: 9};
var keys = [];
var blockedLasers = [];


var startTime = new Date().getTime();

var milliSec = startTime;

var score = 0;
var hp = 3;


function buildGameArea() {
    gameArea.appendTo('body');
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var id = '' + i + j;

            $('<div></div>').css({
                    'left': 50 * i,
                    'top': 50 * j,
                }
            ).attr('id', id).addClass('block').appendTo(gameArea);
        }
    }
}
function removeFromBlocked(x, y) {
    var index = blockedBlocks.findIndex(e => e.x == x && e.y ==y);
    if (index > -1) {
        blockedBlocks.splice(index, 1);
    }
}

function setWinBlock(x, y) {
    winBlock = {x: x, y: y};

    var id = '#' + winBlock.x + winBlock.y;

   $(id).addClass('win_block');
}

function buildMap() {
    startTime = new Date().getTime();



    if (map == 1) {
        player = {x: 5, y: 0};
        playerTemp = {x: 5, y: 0};


        setWinBlock(1, 9);

        $('<div></div>').attr('id', 'player').css({
            top: 0,
            left: player.x*50,
        }).appendTo(gameArea);

        var box1 = $('<div></div>').addClass('box').css({
            top: 3*50,
            left: 1*50,
        });
        var box2 = $('<div></div>').addClass('box').css({
            top: 3 * 50,
            left: 4 * 50,
        });
        var box3 = $('<div></div>').addClass('box').css({
            top: 2 * 50,
            left: 5 * 50,
        });

        boxes.push(box1);
        boxes.push(box2);
        boxes.push(box3);


        box1.appendTo(gameArea);
        box2.appendTo(gameArea);
        box3.appendTo(gameArea);


        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {

                blockedBlocks.push({x: i, y: j});
            }
        }
        removeFromBlocked(5,0);
        removeFromBlocked(5,1);

        removeFromBlocked(5,2);
        removeFromBlocked(4,2);
        removeFromBlocked(5,3);
        removeFromBlocked(4,3);
        removeFromBlocked(4,4);

        removeFromBlocked(3,3);
        removeFromBlocked(2,3);
        removeFromBlocked(1,3);
        removeFromBlocked(0,3);
        removeFromBlocked(1,4);
        removeFromBlocked(1,5);
        removeFromBlocked(1,6);
        removeFromBlocked(1,7);
        removeFromBlocked(1,8);
        removeFromBlocked(1,9);


    }
    else if (map == 2) {
        player = {x: 5, y: 0};
        playerTemp = {x: 5, y: 0};


        setWinBlock(2, 8);

        $('<div></div>').attr('id', 'player').css({
            top: 0,
            left: player.x*50,
        }).appendTo(gameArea);

        var box1 = $('<div></div>').addClass('box').css({
            top: 4*50,
            left: 2*50,
        });
        var box2 = $('<div></div>').addClass('box').css({
            top: 3 * 50,
            left: 4 * 50,
        });
        var box3 = $('<div></div>').addClass('box').css({
            top: 2 * 50,
            left: 5 * 50,
        });

        boxes.push(box1);
        boxes.push(box2);
        boxes.push(box3);


        box1.appendTo(gameArea);
        box2.appendTo(gameArea);
        box3.appendTo(gameArea);

        cannons.push({x: 0, y: 6, d: 'r'});
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                if(!(i == 0 && j ==  6)) {
                    blockedBlocks.push({x: i, y: j});
                }

            }
        }
        removeFromBlocked(5,0);
        removeFromBlocked(5,1);

        removeFromBlocked(5,2);
        removeFromBlocked(4,2);
        removeFromBlocked(5,3);
        removeFromBlocked(4,3);
        removeFromBlocked(4,4);

        removeFromBlocked(3,3);
        removeFromBlocked(2,3);
        removeFromBlocked(1,3);

        removeFromBlocked(1,4);
        removeFromBlocked(2,4);
        removeFromBlocked(1,5);
        removeFromBlocked(2,5);
        removeFromBlocked(1,6);
        removeFromBlocked(2,6);
        removeFromBlocked(1,7);
        removeFromBlocked(2,7);
        removeFromBlocked(1,8);
        removeFromBlocked(2,8);

        removeFromBlocked(3,8);
        removeFromBlocked(3,7);
        removeFromBlocked(3,6);
        removeFromBlocked(3,5);
        removeFromBlocked(3,4);

    }
    else if (map == 3) {
        player = {x: 5, y: 0};
        playerTemp = {x: 5, y: 0};


        setWinBlock(2, 8);

        $('<div></div>').attr('id', 'player').css({
            top: 0,
            left: player.x*50,
        }).appendTo(gameArea);

        var box1 = $('<div></div>').addClass('box').css({
            top: 4*50,
            left: 2*50,
        });
        var box2 = $('<div></div>').addClass('box').css({
            top: 3 * 50,
            left: 4 * 50,
        });
        var box3 = $('<div></div>').addClass('box').css({
            top: 2 * 50,
            left: 5 * 50,
        });

        boxes.push(box1);
        boxes.push(box2);
        boxes.push(box3);


        box1.appendTo(gameArea);
        box2.appendTo(gameArea);
        box3.appendTo(gameArea);

        cannons.push({x: 0, y: 5, d: 'r'});
        cannons.push({x: 3, y: 8, d:'u'});
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                if(!(i == 0 && j ==  5)) {
                    blockedBlocks.push({x: i, y: j});
                }

            }
        }
        removeFromBlocked(3,8);
        removeFromBlocked(5,0);
        removeFromBlocked(5,1);

        removeFromBlocked(5,2);
        removeFromBlocked(4,2);
        removeFromBlocked(5,3);
        removeFromBlocked(4,3);
        removeFromBlocked(4,4);

        removeFromBlocked(3,3);
        removeFromBlocked(2,3);
        removeFromBlocked(1,3);

        removeFromBlocked(1,4);
        removeFromBlocked(2,4);
        removeFromBlocked(1,5);
        removeFromBlocked(2,5);
        removeFromBlocked(1,6);
        removeFromBlocked(2,6);
        removeFromBlocked(1,7);
        removeFromBlocked(2,7);
        removeFromBlocked(1,8);
        removeFromBlocked(2,8);

        removeFromBlocked(3,8);
        removeFromBlocked(3,7);
        removeFromBlocked(3,6);
        removeFromBlocked(3,5);
        removeFromBlocked(3,4);
        removeFromBlocked(5,4);
        removeFromBlocked(5,5);
    }

    else if(map == 4) {
        player = {x: 0, y: 0};
        playerTemp = {x: 0, y: 0};


        setWinBlock(0, 9);

        $('<div></div>').attr('id', 'player').appendTo(gameArea);

        var box1 = $('<div></div>').addClass('box').css({
            top: 100,
            left: 150,
        });
        var box2 = $('<div></div>').addClass('box').css({
            top: 3 * 50,
            left: 3 * 50,
        });
        var box3 = $('<div></div>').addClass('box').css({
            top: 2 * 50,
            left: 4 * 50,
        });

        boxes.push(box1);
        boxes.push(box2);
        boxes.push(box3);


        box1.appendTo(gameArea);
        box2.appendTo(gameArea);
        box3.appendTo(gameArea);


        blockedBlocks.push({x: 0, y: 2});
        blockedBlocks.push({x: 0, y: 3});
        blockedBlocks.push({x: 0, y: 3});
        blockedBlocks.push({x: 1, y: 3});
        blockedBlocks.push({x: 1, y: 0});
        blockedBlocks.push({x: 2, y: 0});

        blockedBlocks.push({x: 3, y: 0});
        blockedBlocks.push({x: 4, y: 0});
        blockedBlocks.push({x: 2, y: 3});
        blockedBlocks.push({x: 2, y: 4});
        blockedBlocks.push({x: 4, y: 4});

        cannons.push({x: 0, y: 6, d: 'r'});
        cannons.push({x: 0, y: 8, d: 'r'});


        for (var i = 5; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                blockedBlocks.push({x: i, y: j});
            }
        }

    }
    if(map == 5) {
        $('.block').each(function () {
           var block = $(this);
           block.remove();

        });
        $('#game_area').css({
            'background-image': 'url(shrek.gif)',
            'background-repeat': 'no-repeat',
            'background-size': 'auto'
        });
        $('#game_area').on('click',function () {
            window.alert("Oh hello there!");
        });
        console.log("Winner");
        window.alert("You won! Here's a shrek gif for you!");

    }

    blockedBlocks.forEach(function (block) {
        var id = '' + block.x + block.y;
        $('#' + id).addClass('blocked');
    });
    cannons.forEach(function (cannon) {
        blockedBlocks.push({x: cannon.x, y: cannon.y});
    });

    cannons.forEach(function (cannon) {
        var d = 'l';

        if (cannon.d == 'l') {
            d = 'l';
        }
        if (cannon.d == 'r') {
            d = 'r';
        }
        if (cannon.d == 'u') {
            d = 'u';
        }
        if (cannon.d == 'd') {
            d = 'd';
        }
        var c = $('<div></div>').addClass('cannon_' + d).css({
            top: cannon.y * 50,
            left: cannon.x * 50,
        });
        c.appendTo(gameArea);
        if (cannon.d == 'r') {

            for (var i = cannon.x + 1; i < 10; i++) {

                var id = '' + i + cannon.y;

                if ($('#' + id).hasClass('blocked')) {
                    break;
                }
                var laser = $('<div></div>').addClass('laser_r').css({
                    top: cannon.y * 50 + 15,
                    left: i * 50,
                }).attr('id','L'+cannon.d + id);

                laser.appendTo(gameArea);
                var l = {x: i, y: cannon.y, d: 'r', 'cannon': cannon};

                laserBlocks.push(l);

            }
        }
        if (cannon.d == 'u') {
            console.log('UP');
            for (var i = cannon.y-1; i > 0; i--) {

                var id = '' + cannon.x + i;
                console.log('ID:' + id);
                if ($('#' + id).hasClass('blocked')) {
                    break;
                }
                var laser = $('<div></div>').addClass('laser_u').css({
                    top: i * 50,
                    left: cannon.x * 50+ 15,
                }).attr('id','L'+cannon.d + id);

                laser.appendTo(gameArea);
                var l = {x: cannon.x, y: i, d: 'u', 'cannon': cannon};

                laserBlocks.push(l);

            }
        }
        // TODO Cannon left, up, down
    });

}

function reloadMap() {
    gameArea.remove();
    gameArea = $('<div id = "game_area"></div>');
    gameArea.appendTo('body');
    buildGameArea();

    blockedBlocks = [];
    boxes = [];
    cannons = [];
    laserBlocks = [];

    player = {x: 0, y: 0};
    playerTemp = {x: 0, y: 0};
    stopped = true;
    speed = 60;
    winBlock = {x: 0, y: 9};
    keys = [];
    blockedLasers = [];
    buildMap();


}

function movePlayer(e) {
$('#player').clearQueue();
$('.movedBox').clearQueue();

console.log('move',stopped);
    var key;
    var cool;
    var back ={x: 0, y: 0};
if (stopped) {
    player.x = playerTemp.x;
    player.y = playerTemp.y;
    key = e.which;
    cool = true;
    back = {x: 0, y: 0};

}
    switch (key) {
        case KEYDOWN:
            keys[KEYDOWN] = true;
            break;
        case KEYUP:
            keys[KEYUP] = true;
            break;
        case KEYRIGHT:
            keys[KEYRIGHT] = true;
            break;
        case KEYLEFT:
            keys[KEYLEFT] = true;
            break;
        case 82:

            stopped = true;
            cool=true;
            reloadMap();

            break;
    }
    if (keys[KEYDOWN]) {
        player.y++;
        back.y--;
        /*$('#player').css({
            'background-image': 'url("player_d.png")',
        });*/
            $('#player').css({
                'transform': 'rotate(360deg)',
            });
        }
        if (keys[KEYUP]) {
            player.y--;
            back.y++;
            /*$('#player').css({
                'background-image': 'url("player_u.png")',
            });*/
            $('#player').css({
                'transform': 'rotate(-180deg)',
            });
        }
        if (keys[KEYRIGHT]) {
            player.x++;
            back.x--;
            /*$('#player').css({
                'background-image': 'url("player_r.png")',
            });*/
            $('#player').css({
                'transform': 'rotate(-90deg)',
            });


        }
        if (keys[KEYLEFT]) {
            player.x--;
            back.x++;
            /*$('#player').css({
                'background-image': 'url("player_l.png")',

            });*/
            $('#player').css({
                'transform': 'rotate(90deg)',
            });

        }


        $('.movedBox').removeClass('movedBox');

        boxes.forEach(function (box) {
            var x = parseInt(box.css('left')) / 50;
            var y = parseInt(box.css('top')) / 50;


            if (player.x == x && player.y == y) {

                box.addClass('movedBox');
                console.log("HIT");

                var mx = parseInt($('.movedBox').css('left')) / 50;
                var my = parseInt($('.movedBox').css('top')) / 50;

                var index = blockedBlocks.findIndex(e => e.x == mx && e.y == my);
                if (index > -1) {
                    blockedBlocks.splice(index, 1);
                }

            }


        });

        blockedBlocks.forEach(function (block) {

            if (player.x == block.x && player.y == block.y) {
                cool = false;

                player.x += back.x;
                player.y += back.y;
            }
        });

       if(key!= 82) {
           stopped = false;
       }

        if (cool) {

            if (player.x < 0) {
                player.x = 0;
            } else if (player.x > size - 1) {
                player.x = size - 1;
            } else if (player.y < 0) {
                player.y = 0;
            } else if (player.y > size - 1) {
                player.y = size - 1;
            } else {

                animatePlayer(back);
            }
        }

}

function animatePlayer(back) {
    //console.log("animated!");
    var blocked = false;
    var x = parseInt($('.movedBox').css('left')) / 50;
    var y = parseInt($('.movedBox').css('top')) / 50;
    $('#player').stop();
    $('.movedBox').stop();
    boxes.forEach(function (box) {
        var index = blockedBlocks.findIndex(e => e.x == parseInt($(box).css('left')) / 50 && e.y == parseInt($(box).css('top')) / 50);
        var mx = parseInt($('.movedBox').css('left')) / 50;
        var my = parseInt($('.movedBox').css('left')) / 50;

        var cx = parseInt($(box).css('left')) / 50;
        var cy = parseInt($(box).css('top')) / 50;

        if (index == -1 && (cx != mx && cy != my)) {
            blockedBlocks.push({x: cx, y: cy});
        }
    });

    blockedBlocks.forEach(function (block) {
        x = parseInt($('.movedBox').css('left')) / 50;
        y = parseInt($('.movedBox').css('top')) / 50;
        if (x - back.x == block.x && y - back.y == block.y) {
            console.log('Hit');
            blocked = true;

            if (player.x == x && player.y == y) {
                player.x += back.x;
                player.y += back.y;
            }
        }
    });


    if (!isNaN(x)) {

        if (x - back.x >= 0 && y - back.y >= 0 && x - back.x <= 9 && y - back.y <= 9) {

        } else {
            blocked = true;
        }
    }

    if (!blocked) {


        $('#player').animate({
            top: player.y * 50,
            left: player.x * 50,
        }, {
            duration: speed, step: function () {
                //console.log("func");
            },
            complete: function () {
                playerTemp.x = parseInt($('#player').css('left')) / 50;
                playerTemp.y = parseInt($('#player').css('top')) / 50;
                if (player.x == winBlock.x && player.y == winBlock.y) {

                    var endTime = new Date().getTime();
                    ;

                    milliSec = endTime - startTime;
                    $('audio')[0].src = "audio/win.mp3";
                    $('audio')[0].volume = 1;
                    $('audio')[0].play();

                    window.alert("You have completed this level! Your time:" + milliSec / 1000 + "sec");
                    score+=5;
                    $('#score').html('Your score: '+score);
                    map++;
                    reloadMap();
                }
                laserBlocks.forEach(function (laser) {
                    var id = '#L'+laser.d + laser.x + laser.y;
                    if (laser.x == player.x && laser.y == player.y && !($('' + id).is(":hidden"))) {
                        $('#audio')[0].src="audio/laser.mp3";
                        $('#audio')[0].volume=0.5;
                        $('#audio')[0].play();

                        if(hp >1) {
                            $('#h'+hp).hide();
                            hp--;
                            score-=2;
                            $('#score').html('Your score: '+score);
                            reloadMap();
                        }else {
                            map = 1;
                            score = 0;
                            hp = 3;
                            $('#h1').show();
                            $('#h2').show();
                            $('#h3').show();
                            $('#score').html('Your score: '+score);
                            reloadMap();

                        }


                    }
                });
            }
        });

        $('.movedBox').animate({
                'top': player.y * 50 - back.y * 50,
                'left': player.x * 50 - back.x * 50,
            }, {
                duration: speed,start: function(){
                $('#audio')[0].src="audio/box.mp3";
                $('#audio')[0].currentTime=0.5;
                $('#audio')[0].volume=0.5;
                $('#audio')[0].play();
                /*setTimeout(
                    function()
                    {
                        $('#audio')[0].currentTime=0;
                        $('#audio')[0].pause();

                    }, 800);*/
            }, complete: function () {

                    blockedLasers.forEach(function (l) {

                        var x = parseInt($(l.box).css('left')) / 50;
                        var y = parseInt($(l.box).css('top')) / 50;

                        var id = '' + l.laser.x + l.laser.y;

                        if (l.laser.x == x && l.laser.y == y) {



                            console.log('if');

                        } else {

                            console.log('else');

                            var index = blockedLasers.findIndex(e => e.laser.x == l.laser.x && e.laser.y == l.laser.y);


                            laserBlocks.forEach(function (ls) {
                                if (ls.y == l.laser.y && ls.cannon.x == l.laser.cannon.x && ls.cannon.y == l.laser.cannon.y) {
                                    var id = '' + ls.x + ls.y;

                                    $('#L'+ls.d + id).show();
                                    if (index > -1) {
                                        console.log('cool');
                                        blockedLasers.splice(index, 1);

                                    }
                                }

                            });

                        }
                    });

                    boxes.forEach(function (box, index) {
                        if (index < boxes.length) {

                            if (parseInt($(box).css('left')) / 50 == parseInt($(boxes[index + 1]).css('left')) / 50
                                && parseInt($(box).css('top')) / 50 == parseInt($(boxes[index + 1]).css('top')) / 50) {
                                //console.log('Hittt',back);
                                $('.movedBox').css({
                                    top: $('.movedBox').css('top') + back.y,
                                    left: $('.movedBox').css('top') + back.x,
                                });


                            }

                        }

                        laserBlocks.forEach(function (laser) {

                            if (laser.x == parseInt($(box).css('left')) / 50 && laser.y == parseInt($(box).css('top')) / 50) {


                                for (var i = laser.x; i < 10; i++) {
                                    //var id = ''+i+laser.y;
                                    var id = '' + i + parseInt($(box).css('top')) / 50;

                                    $('#L'+laser.d + id).hide();
                                }
                                blockedLasers.push({'laser': laser, 'box': box});
                                for (var i = laser.y; i > 0; i--) {
                                    //var id = ''+i+laser.y;
                                    var id = ''  + parseInt($(box).css('left')) / 50 + i;
                                    if(laser.d=='u') {
                                        $('#L'+laser.d + id).hide();
                                    }



                                }
                                blockedLasers.push({'laser': laser, 'box': box});


                            } else {

                            }

                        });

                    });
                    laserBlocks.forEach(function (laser) {
                        var id = '#L'+laser.d + laser.x + laser.y;

                        if (laser.x == player.x && laser.y == player.y && !($('' + id).is(":hidden"))) {
                            $('#audio')[0].src="audio/laser.mp3";
                            $('#audio')[0].volume=0.5;
                            $('#audio')[0].play();
                            if(hp >1) {
                                $('#h'+hp).hide();
                                hp--;
                                score-=2;
                                $('#score').html('Your score: '+score);
                                reloadMap();
                            }else {
                                map = 1;
                                score = 0;
                                hp = 3;
                                $('#h1').show();
                                $('#h2').show();
                                $('#h3').show();
                                $('#score').html('Your score: '+score);
                                reloadMap();
                            }
                            reloadMap();

                            console.log("player hit");

                        }
                    });

                }
            }
        );
    }
}



function stopPlayer(e) {
    var key = e.which;
    keys[e.which] = false;

    if (key == KEYDOWN || key == KEYLEFT || key == KEYUP || key == KEYRIGHT) {

        $('#player').clearQueue();
        $('.movedBox').clearQueue();
        /*$('#player').stop();
        $('.movedBox').stop();*/
        stopped = true;
    }
}

$(function () {
    buildGameArea();
    buildMap();

    $('<div></div>').attr('id','h1').addClass('heart').appendTo($('#score_box'));
    $('<div></div>').attr('id','h2').addClass('heart').appendTo($('#score_box'));
    $('<div></div>').attr('id','h3').addClass('heart').appendTo($('#score_box'));

    $(window).on('keydown', movePlayer);
    $(window).on('keyup', stopPlayer);
    $('.hint_box').click(function (e) {
        $(this).hide();
    });

});
