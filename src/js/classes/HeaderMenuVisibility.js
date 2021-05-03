export default class HeaderMenuVisibility {
  constructor(
    menuElem,
    openButton,
    closeButton,
    menuShowClass,
    openButtonShowClass,
    closeButtonShowClass,
  ) {
    this.menuElem = menuElem;
    this.openButton = openButton;
    this.closeButton = closeButton;
    this.menuShowClass = menuShowClass;
    this.openButtonShowClass = openButtonShowClass;
    this.closeButtonShowClass = closeButtonShowClass;
    this._menuOpen = this._menuOpen.bind(this);
    this._menuClose = this._menuClose.bind(this);
    this.setMenuState = this.setMenuState.bind(this);
  }

  _menuOpen() {
    this.menuElem.classList.add(`${this.menuShowClass}`);
    this.openButton.classList.remove(`${this.openButtonShowClass}`);
    this.closeButton.classList.add(`${this.closeButtonShowClass}`);
  }

  _menuClose() {
    this.menuElem.classList.remove(`${this.menuShowClass}`);
    this.openButton.classList.add(`${this.openButtonShowClass}`);
    this.closeButton.classList.remove(`${this.closeButtonShowClass}`);
  }

  setMenuState() {
    this._menuClose();
    this.openButton.addEventListener('click', this._menuOpen);
    this.closeButton.addEventListener('click', this._menuClose);
  }
}
