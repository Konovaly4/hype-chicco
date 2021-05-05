import './style.scss';
import smoothscroll from 'smoothscroll-polyfill';

// import constants
import {
  HEADER_MENU_OPEN_BUTTON,
  HEADER_MENU_CLOSE_BUTTON,
  HEADER_NAV_MENU,
  WHEEL_FOUR_WHEELS_BUTTON,
  WHEEL_THREE_WHEELS_BUTTON,
  WHEEL_ELEMENTS_ARR,
} from './js/constants/domElements';

import {
  HEADER_MENU_SHOW_CLASS,
  HEADER_OPEN_BUTTON_SHOW_CLASS,
  HEADER_CLOSE_BUTTON_SHOW_CLASS,
  WHEELS_BUTTON_ACTIVE_CLASS,
} from './js/constants/addClasses';

import { WHEEL_ELEMENTS_CONTENT } from './js/constants/wheelElementsContent';

// import classes
import HeaderMenuVisibility from './js/classes/HeaderMenuVisibility';
import WheelsButtonToggle from './js/classes/WheelsButtonToggle';

// constants declaration
const headerMenuVisibility = new HeaderMenuVisibility(
  HEADER_NAV_MENU,
  HEADER_MENU_OPEN_BUTTON,
  HEADER_MENU_CLOSE_BUTTON,
  HEADER_MENU_SHOW_CLASS,
  HEADER_OPEN_BUTTON_SHOW_CLASS,
  HEADER_CLOSE_BUTTON_SHOW_CLASS,
  WHEELS_BUTTON_ACTIVE_CLASS,
);

const wheelsButtonToggle = new WheelsButtonToggle(
  WHEEL_FOUR_WHEELS_BUTTON,
  WHEEL_THREE_WHEELS_BUTTON,
  WHEELS_BUTTON_ACTIVE_CLASS,
  WHEEL_ELEMENTS_ARR,
  WHEEL_ELEMENTS_CONTENT,
);

headerMenuVisibility.setMenuState();
wheelsButtonToggle.initialButtonState();
wheelsButtonToggle.setEventListeners();

smoothscroll.polyfill();
