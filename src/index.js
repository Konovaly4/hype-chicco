import './style.scss';

// import constants
import {
  HEADER_MENU_OPEN_BUTTON,
  HEADER_MENU_CLOSE_BUTTON,
  HEADER_NAV_MENU,
} from './js/constants/domElements';

import {
  HEADER_MENU_SHOW_CLASS,
  HEADER_OPEN_BUTTON_SHOW_CLASS,
  HEADER_CLOSE_BUTTON_SHOW_CLASS,
} from './js/constants/addClasses';

// import classes
import HeaderMenuVisibility from './js/classes/HeaderMenuVisibility';

// constants declaration
const headerMenuVisibility = new HeaderMenuVisibility(
  HEADER_NAV_MENU,
  HEADER_MENU_OPEN_BUTTON,
  HEADER_MENU_CLOSE_BUTTON,
  HEADER_MENU_SHOW_CLASS,
  HEADER_OPEN_BUTTON_SHOW_CLASS,
  HEADER_CLOSE_BUTTON_SHOW_CLASS,
);

headerMenuVisibility.setMenuState();
