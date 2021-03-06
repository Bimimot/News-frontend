import '../css/articles.css';

import MainApi from './api/MainApi';
import Header from './components/Header';

import { menuContainer } from './constants/elements'; // импорт контейнера попапа и классов кнопок

import { loggedMenuArticlesMarkup } from './constants/markups'; // импорт разметки

const mainApi = new MainApi();
const header = new Header(menuContainer);

mainApi.getMe()
  .then((data) => { if (data) {header.setMenu(loggedMenuArticlesMarkup, data.name)} })
  .catch((err) => console.log(err)); // ставим хедер если есть токен и может получить имя


// import FormValidator from './FormValidator.js';
// import Popup from './Popup.js';

// // dom-элементы, для работы с методами классов

// const popupLoginContainer = document.querySelector('.popup_type_login');
// const popupSignupContainer = document.querySelector('.popup_type_signup');
// const popupMenuContainer = document.querySelector('.popup_type_menu');

// // тексты ошибок
// const errorsMessages = {
//   validateNameL: 'Имя должно быть от 2 до 30 символов',
//   validateEmail: 'Неправильный формат email',
//   validatePasswordL: 'Пароль должен быть не менее 8 символов',
// };

// const validator = new FormValidator(errorsMessages); // создаем валидатор, передаем тексты ошибок
// const loginPopup = new Popup(popupLoginContainer, '.button_type_login', validator); // создаем попап для авторизации
// const signupPopup = new Popup(popupSignupContainer, '.button_type_signup', validator); // создаем попап для регистрации
// const menuPopup = new Popup(popupMenuContainer, '.button_type_menu'); // создаем попап для выпадающего меню
