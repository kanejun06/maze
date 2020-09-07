namespace SpriteKind {
    export const key = SpriteKind.create()
    export const door = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    if (keyGetFlag == 1) {
        music.magicWand.play()
        door2.destroy()
        tiles.setWallAt(tiles.getTileLocation(4, 12), false)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    keyGetFlag = 1
    key2.destroy(effects.halo, 100)
    music.powerUp.play()
})
let keyGetFlag = 0
let door2: Sprite = null
let key2: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 . 
    . d d d b b d 5 5 4 4 4 4 4 b . 
    . b d 5 5 5 b 5 5 5 5 5 5 b . . 
    . d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    . b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass3)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
key2 = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . . f f 1 5 5 5 5 4 f f . . . 
    . . f f 1 1 5 5 5 5 4 4 f . . . 
    . . f 1 1 5 f f f f 5 4 f f . . 
    . . f 5 5 f f . . f f 4 e f . . 
    . . f 5 5 5 f f f f 5 e e f . . 
    . . f f 5 5 5 5 5 5 4 e f f . . 
    . . . f f 5 5 5 5 4 4 f f . . . 
    . . . . f f f 5 4 f f f . . . . 
    . . . . . . f 5 4 f . . . . . . 
    . . . . f f f 5 4 f . . . . . . 
    . . . . f 5 5 5 e f . . . . . . 
    . . . . f 5 5 5 e f . . . . . . 
    . . . . f f f 5 e f . . . . . . 
    . . . . . . f 4 e f . . . . . . 
    . . . . . . f f f f . . . . . . 
    `, SpriteKind.key)
tiles.placeOnRandomTile(key2, sprites.castle.tileDarkGrass2)
door2 = sprites.create(img`
    . . . . . f f f f f f f . . . . 
    . . . f f e e e e e e f f f . . 
    . . f f e e f f f f e e e f f . 
    . f f e e f f e e f f f e e f f 
    . f e e f f e e e e e f f e e f 
    f f e f f e e 4 4 4 e e f f e f 
    f f e f e e 4 f f f 4 e e f e f 
    f f e f e e e 4 4 4 e e e f e f 
    f f e f e e e e e e e e e f e f 
    . f e f e e e e e e e e e f e f 
    . f e f e e e e e e e e e f e f 
    f f e f e e e e e e e e e f e f 
    f f e f e e e e e e e e e f e f 
    f f e f f f f f f f f f f f e f 
    f f e e e e e e e e e e e e e f 
    . f f f f f f f f f f f f f f f 
    `, SpriteKind.door)
door2.setPosition(74, 200)
tiles.setWallAt(tiles.getTileLocation(4, 12), true)
keyGetFlag = 0
forever(function () {
    if (keyGetFlag == 1) {
        mySprite.setImage(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 b c 5 5 d 4 c . . 
            . b b b b 5 5 5 b f d d 4 4 4 b 
            . b d 5 b 5 5 b c b 4 4 4 4 b . 
            . . b 5 5 b 5 5 5 4 4 4 4 b . . 
            . . b d 5 5 b 5 5 5 5 5 5 b . . 
            . b d b 5 5 5 d 5 5 5 5 5 5 b . 
            b d d c d 5 5 b 5 5 5 5 5 5 b . 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `)
        pause(100)
    }
})
