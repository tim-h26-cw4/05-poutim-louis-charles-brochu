export default class Poutine {
  constructor(element) {
    this.element = element;
    this.type = element.querySelectorAll('.js-button');
    this.selectedType = '';
    this.init();
    console.log(this.type);
  }

  init() {
    console.log('poutine');
    for (let i = 0; i < this.type.length; i++) {
      const button = this.type[i];
      button.addEventListener('click', this.selectType);
    }
  }

  selectType() {
    console.log('poutine choisis');
    for (let i = 0; i < this.type.length; i++) {
      const button = this.type[i];

      if (button.classList.contains('is-active')) {
        button.classList.remove('is-active');
      }
    }
    this.classList.add('is-active');
    this.selectType = this.textContent;
    this.updatePhoto();
  }

  updatePhoto() {
    image = element.querySelector('.js-image');
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectType}.png`;
  }
}
