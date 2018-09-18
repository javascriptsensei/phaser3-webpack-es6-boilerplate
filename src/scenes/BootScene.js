function preload() {
  this.load.tilemapTiledJSON('map', 'assets/level-1.json');
  this.load.image('tiles', 'assets/basictiles.png');
  console.log('BootScene Preloader...');
}

function create() {
  console.log('BootScene Create...');
  this.scene.launch('GameScene');
}

export default {
  key: 'BootScene',
  active: true,
  preload: preload,
  create: create
}
