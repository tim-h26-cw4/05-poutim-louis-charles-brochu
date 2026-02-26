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
      button.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    console.log('poutine choisis');
    for (let i = 0; i < this.type.length; i++) {
      const button = this.type[i];

      if (button.classList.contains('is-active')) {
        button.classList.remove('is-active');
      }
    }
    event.currentTarget.classList.add('is-active');
    this.selectedType = event.currentTarget.textContent;
    this.updatePhoto();
  }

  updatePhoto() {
    const image = this.element.querySelector('.js-image');
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
