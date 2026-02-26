import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    this.menu = [];
    this.count = 0;
    this.container = document.querySelector('.chef__order');
    this.commander = document.querySelectorAll('.js-commander');
    this.element = element;
    this.init();
  }

  init() {
    console.log('Chef');
    for (let i = 0; i < this.commander.length; i++) {
      const button = this.commander[i];
      button.addEventListener('click', this.sendOrder.bind(this));
    }

    const poutine = document.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutine.length; i++) {
      const element = poutine[i];
      new Poutine(element);
    }
  }

  sendOrder() {
    const button = element.querySelectorAll('.js-button');
    for (let i = 0; i < button.length; i++) {
      const element = button[i];
      if (button.classList.contains('is-active')) {
        this.count = this.count++;
      }
    }
    console.log(`commander`);
    this.container.innerHTML = '';
    const commande = document.createElement('p');
    commande.textContent = `total de poutines(s): ${this.count}`;
    commande.appendChild(this.container);
  }
}
