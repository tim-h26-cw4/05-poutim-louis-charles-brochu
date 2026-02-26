import Icons from './utils/Icons.js';
import Chef from './Chef.js';

class Main {
  constructor() {
    this.init();
  }
  init() {
    Icons.load();
    const chef = document.querySelectorAll('.js-chef');
    for (let i = 0; i < chef.length; i++) {
      const element = chef[i];
      new Chef(element);
    }
  }
}

new Main();
