export default class WheelsButtonToggle {
  constructor(firstButton, secondButton, activeClass, elements, content) {
    this.firstButton = firstButton;
    this.secondButton = secondButton;
    this.activeClass = activeClass;
    this.elements = elements;
    this.content = content;
    this._firstButtonActive = this._firstButtonActive.bind(this);
    this._secondButtonActive = this._secondButtonActive.bind(this);
  }

  _firstButtonActive() {
    if (!this.firstButton.classList.contains(`${this.activeClass}`)) {
      this.firstButton.classList.add(`${this.activeClass}`);
      this.elements.forEach((item, num) => {
        item.textContent = `${this.content.firstButton[num]}`;
      });
      this.secondButton.classList.remove(`${this.activeClass}`);
    }
  }

  _secondButtonActive() {
    if (!this.secondButton.classList.contains(`${this.activeClass}`)) {
      this.secondButton.classList.add(`${this.activeClass}`);
      this.elements.forEach((item, num) => {
        item.textContent = `${this.content.secondButton[num]}`;
      });
      this.firstButton.classList.remove(`${this.activeClass}`);
    }
  }

  initialButtonState() {
    this._firstButtonActive();
  }

  setEventListeners() {
    this.firstButton.addEventListener('click', this._firstButtonActive);
    this.secondButton.addEventListener('click', this._secondButtonActive);
  }
}
