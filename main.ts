enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const follower = SpriteKind.create()
    export const enviroment_1 = SpriteKind.create()
    export const text_block = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`walking up`,
    200,
    true
    )
    animation.runImageAnimation(
    mySprite,
    assets.animation`darkness walking up`,
    200,
    true
    )
    animation.runImageAnimation(
    mySprite3,
    assets.animation`aqua walking up`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`sigh down`, function (sprite, location) {
    tiles.createSpritesOnTiles(assets.tile`sigh down`, SpriteKind.text_block)
    game.splash("to the evil castle ")
    pause(100)
    story.clearAllText()
    tiles.placeOnTile(mySprite, tiles.getTileLocation(132, 13))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite3, otherSprite) {
    if (true) {
        enemy_1.destroy(effects.fire, 1000)
    }
})
statusbars.onZero(StatusBarKind.Health, function (status2) {
    game.over(false, effects.splatter)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (enemy_1.x == mySprite2.x) {
        mySprite.sayText("expulsion ", 500, true)
        animation.runImageAnimation(
        mySprite2,
        assets.animation`explotion`,
        500,
        false
        )
        if (true) {
            projectile2 = sprites.createProjectileFromSprite(assets.image`explshon`, enemy_1, 0, 0)
            animation.runImageAnimation(
            projectile2,
            assets.animation`boom`,
            500,
            false
            )
            music.bigCrash.play()
        }
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    music.wawawawaa.play()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`walking west`,
    200,
    true
    )
    animation.runImageAnimation(
    mySprite,
    assets.animation`waking left`,
    200,
    true
    )
    animation.runImageAnimation(
    mySprite3,
    assets.animation`aqua walking left`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite2) {
    enemy_1.follow(mySprite, 40)
    animation.runImageAnimation(
    enemy_1,
    [img`
        ........................
        ....ffffff..............
        ..ffeeeef2f.............
        .ffeeeef222f............
        .feeeffeeeef...cc.......
        .ffffee2222ef.cdc.......
        .fe222ffffe2fcddc.......
        fffffffeeeffcddc........
        ffe44ebf44ecddc.........
        fee4d41fddecdc..........
        .feee4dddedccc..........
        ..ffee44e4dde...........
        ...f222244ee............
        ...f2222e2f.............
        ...f444455f.............
        ....ffffff..............
        .....fff................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        .......fff..............
        ....fffff2f.............
        ..ffeeeee22ff...........
        .ffeeeeee222ff..........
        .feeeefffeeeef..........
        .fffffeee2222ef.........
        fffe222fffffe2f.........
        fffffffffeeefff.....cc..
        fefe44ebbf44eef...ccdc..
        .fee4d4bbfddef..ccddcc..
        ..feee4dddddfeecdddc....
        ...f2222222eeddcdcc.....
        ...f444445e44ddccc......
        ...ffffffffeeee.........
        ...fff...ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        .......ff...............
        ....ffff2ff.............
        ..ffeeeef2ff............
        .ffeeeeef22ff...........
        .feeeeffeeeef...........
        .fffffee2222ef..........
        fffe222ffffe2f..........
        ffffffffeeefff..........
        fefe44ebf44eef..........
        .fee4d4bfddef...........
        ..feee4dddee.c..........
        ...f2222eeddeccccccc....
        ...f444e44ddecddddd.....
        ...fffffeeee.ccccc......
        ..ffffffff...c..........
        ..fff..ff...............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ....ffffff..............
        ..ffeeeef2f.............
        .ffeeeef222f............
        .feeeffeeeef............
        .ffffee2222ef...........
        .fe222ffffe2f...........
        fffffffeeefff...........
        ffe44ebf44eef...........
        fee4d41fddef............
        .feee4ddddf.............
        ..fdde444ef.............
        ..fdde22ccc.............
        ...eef22cdc.............
        ...f4444cddc............
        ....fffffcddc...........
        .....fff..cddc..........
        ...........cdc..........
        ............cc..........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    false
    )
    statusbar.value += -5
    music.smallCrash.play()
    pause(1000)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`walking east`,
    200,
    true
    )
    animation.runImageAnimation(
    mySprite,
    assets.animation`walking right`,
    200,
    true
    )
    animation.runImageAnimation(
    mySprite3,
    assets.animation`aqua walking right`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`triger`, function (sprite, location) {
    story.startCutscene(function () {
        story.cancelSpriteMovement(sprite)
        enemy_1 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(enemy_1, tiles.getTileLocation(56, 5))
        scene.cameraShake(4, 500)
        scene.cameraFollowSprite(enemy_1)
        pause(1000)
        scene.cameraFollowSprite(mySprite)
        music.spooky.play()
    })
    story.cancelCurrentCutscene()
    tiles.replaceAllTiles(assets.tile`triger`, sprites.castle.tilePath5)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`migamii walking down`,
    200,
    true
    )
    animation.runImageAnimation(
    mySprite,
    assets.animation`darkness walking down`,
    200,
    true
    )
    animation.runImageAnimation(
    mySprite3,
    assets.animation`aqua walking down 1`,
    200,
    true
    )
})
let projectile2: Sprite = null
let statusbar: StatusBarSprite = null
let enemy_1: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`darkness0`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`migamii`, SpriteKind.follower)
mySprite3 = sprites.create(assets.image`aqua`, SpriteKind.follower)
enemy_1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Enemy)
enemy_1.setPosition(13, 123)
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(7)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
mySprite2.follow(mySprite, 85)
mySprite3.follow(mySprite, 80)
mySprite2.x += -1
mySprite3.x += 1
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.setBarBorder(1, 12)
statusbar.setLabel("HP")
statusbar.setColor(7, 2, 3)
statusbar.attachToSprite(mySprite)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
tiles.createSpritesOnTiles(sprites.builtin.forestTiles0, SpriteKind.enviroment_1)
tiles.coverAllTiles(assets.tile`transparency16`, sprites.castle.tileGrass1)
tiles.coverAllTiles(sprites.builtin.forestTiles4, sprites.castle.tileGrass3)
