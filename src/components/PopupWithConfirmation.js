import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector(".popup__form");
  }

  setAction(action) {
    this._handleFormSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      if (this._handleFormSubmit) {
        this._handleFormSubmit();
      }
    });
  }
}
