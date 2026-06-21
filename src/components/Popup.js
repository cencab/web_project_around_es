export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  open() {
    this._popupElement.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup_is-opened") ||
        evt.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }
}
