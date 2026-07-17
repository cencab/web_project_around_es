export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    handleTrashClick,
    handleLikeClick,
    userId,
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._ownerId = data.owner;
    this._userId = userId;

    this._isLiked = data.isLiked;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
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

    this._likeButton = this._element.querySelector(".card__like-button");

    this._setEventListeners();

    const cardImage = this._element.querySelector(".card__image");
    const cardTitle = this._element.querySelector(".card__title");
    const deleteButton = this._element.querySelector(".card__delete-button");

    cardTitle.textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    if (this._ownerId !== this._userId) {
      deleteButton.remove();
    }

    this.renderLikes(this._isLiked);

    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });

    const deleteBtn = this._element.querySelector(".card__delete-button");
    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        this._handleTrashClick(this);
      });
    }

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
  }

  isLiked() {
    return this._isLiked;
  }

  renderLikes(isLiked) {
    this._isLiked = isLiked;
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_is-active");
    } else {
      this._likeButton.classList.remove("card__like-button_is-active");
    }
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }
}
