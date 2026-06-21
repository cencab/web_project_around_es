import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    super.open();
    const popupImage = this._popupElement.querySelector(".popup__image");
    const popupCaption = this._popupElement.querySelector(".popup__caption");

    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;
  }
}
