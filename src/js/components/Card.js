import { isAuth } from '../utils/helpers';

export default class Card {
  constructor(cardMarkup, api, isAuth) {
    this.cardMarkup = cardMarkup,
    this.api = api;
  }

  setSection(markup) {
    document.querySelector('.intro-container').insertAdjacentHTML('afterEnd', markup);
    this.cardsSection = document.querySelector('.cards');
    this.gridContainer = this.cardsSection.querySelector('.cards__grid');
  }

  addCardsLine(hiddenCards, cardsArray) {
    const startIndex = cardsArray.length - hiddenCards;
    let endIndex;

    if (hiddenCards < 4) {
      this.setButtonMore(false); // отключаем кнопку
      endIndex = startIndex + hiddenCards;
      hiddenCards = 0;
    } else {
      this.setButtonMore(true);
      endIndex = startIndex + 3;
      hiddenCards -= 3;
    }
    for (let i = startIndex; i < endIndex; i++) { this._addCard(cardsArray[i], this.cardMarkup, this.gridContainer); } // отрисовываем три карточки
    return hiddenCards;
  }

  setButtonMore(statement) {
    const moreBtn = this.cardsSection.querySelector('.cards__button');
    if (statement) {
      moreBtn.classList.remove('cards__button_visible_no');
    } else { moreBtn.classList.add('cards__button_visible_no'); }
  }

  getCardId(bookmark) {
    return bookmark.parentNode.parentNode.querySelector('.cards__id').textcontent;
  }

  setCardId(value, bookmark) {
    bookmark.parentNode.parentNode.querySelector('.cards__id').textcontent = value;
  }

  _renderCard(cardData) {
    const cardContainer = document.createElement('div'); // создали в DOM контейнер для карточки
    cardContainer.classList.add('cards__item');
    cardContainer.insertAdjacentHTML('beforeend', this.cardMarkup); // поставили в контейнер разметку
    cardContainer.querySelector('.cards__photo').src = cardData.cardImageUrl;
    cardContainer.querySelector('.cards__item-date').textContent = cardData.cardDate;
    cardContainer.querySelector('.cards__item-title').textContent = cardData.cardTitle;
    cardContainer.querySelector('.cards__item-article').textContent = cardData.cardText;
    cardContainer.querySelector('.cards__sign').textContent = cardData.cardSign;
    const icon = cardContainer.querySelector('.cards__bookmark');
    if (!isAuth()) {
      icon.classList.add('cards__bookmark_active_no');
    } else {
      icon.classList.add('cards__bookmark_clicked_off');
      icon.addEventListener('click', (event) => this._clickedCard(cardContainer, cardData, event.target));
    }
    return cardContainer;
  }

  _addCard(cardData) {
    const newCard = this._renderCard(cardData, this.cardMarkup);
    this.gridContainer.appendChild(newCard);
  }

  _clickedCard(cardContainer, cardData, bookmark) {
    cardContainer.querySelector('.cards__bookmark').classList.toggle('cards__bookmark_clicked_on');
    cardContainer.querySelector('.cards__bookmark').classList.toggle('cards__bookmark_clicked_off');
    if (bookmark.className.includes('cards__bookmark_clicked_on')) {
      this.api.createArticle(cardData)
        .then((res) => (cardData.id = res.data._id))
        .catch((err) => console.log(err));
    } else {
      this.api.removeArticle(cardData.id)
        .catch((err) => (console.log(err)));
    }
  }

  removeSection() {
    if (this.cardsSection) {
      this.cardsSection.remove();
    }
  }
}
