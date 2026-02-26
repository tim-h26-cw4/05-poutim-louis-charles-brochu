import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    this.container = element.querySelector('.chef__order');
    this.commander = element.querySelector('.js-commande');
    this.element = element;
    this.init();
  }

  init() {
    this.commander.addEventListener('click', this.sendOrder.bind(this));

    const poutine = document.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutine.length; i++) {
      const element = poutine[i];
      new Poutine(element);
    }
  }

  sendOrder() {
    let count = 0;
    const button = this.element.querySelectorAll('.js-button');
    for (let i = 0; i < button.length; i++) {
      const element = button[i];
      if (element.classList.contains('is-active')) {
        count++;
      }
    }
    console.log(`commander ${count}`);
    this.container.innerHTML = '';
    const commande = document.createElement('p');
    commande.textContent = `total de poutines(s): ${count}`;
    this.container.appendChild(commande);
  }
}
