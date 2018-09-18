function preload() {
  console.log('GameScene Preloader...')
}

function create() {
  console.log('GameScene Create...');

  const map = this.make.tilemap({key: 'map'});
  const tiles = map.addTilesetImage('tiles', 'tiles');
  map.createStaticLayer(0, tiles, 0, 0);
  map.createStaticLayer(1, tiles, 0, 0);

  this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

  const cursors = this.input.keyboard.createCursorKeys();

  const controlConfig = {
    camera: this.cameras.main,
    left: cursors.left,
    right: cursors.right,
    up: cursors.up,
    down: cursors.down,
    speed: 0.5
  };

  this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);

}

function update(time, delta) {
  console.log('Game started...');
  this.controls.update(delta)
}

export default {
  key: 'GameScene',
  active: false,
  visible: false,
  preload: preload,
  create: create,
  update: update
}
