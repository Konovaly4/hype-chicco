const HEADER_MENU_OPEN_BUTTON = document.querySelector('.header__menu-open');
const HEADER_MENU_CLOSE_BUTTON = document.querySelector('.header__menu-close');
const HEADER_NAV_MENU = document.querySelector('.header__nav-menu');
const WHEEL_FOUR_WHEELS_BUTTON = document.querySelector('#fourwheels');
const WHEEL_THREE_WHEELS_BUTTON = document.querySelector('#threewheels');

const WHEEL_ELEMENTS_ARR = Array.from(
  document.querySelectorAll('.comfort__wheels-value-item_mobile'),
);

export {
  HEADER_MENU_OPEN_BUTTON,
  HEADER_MENU_CLOSE_BUTTON,
  HEADER_NAV_MENU,
  WHEEL_FOUR_WHEELS_BUTTON,
  WHEEL_THREE_WHEELS_BUTTON,
  WHEEL_ELEMENTS_ARR,
};
