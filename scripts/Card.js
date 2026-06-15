import { openModal } from "./utils.js";

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector(".card__image");
    const cardTitle = this._element.querySelector(".card__title");

    cardTitle.textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", (evt) => {
        this._handleLikeIcon(evt);
      });

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleOpenPopup();
      });
  }

  _handleLikeIcon(evt) {
    evt.target.classList.toggle("card__like-button_is-active");
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleOpenPopup() {
    const imagePopup = document.querySelector("#image-popup");
    const imagePopupPhoto = imagePopup.querySelector(".popup__image");
    const imagePopupCaption = imagePopup.querySelector(".popup__caption");

    imagePopupPhoto.src = this._link;
    imagePopupPhoto.alt = this._name;
    imagePopupCaption.textContent = this._name;

    openModal(imagePopup);
  }
}
