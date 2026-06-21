import Card from "../components/Card.js";
import { initialCards } from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  errorClass: "popup__error_visible",
  inactiveButtonClass: "popup__button_disabled",
};

const editProfileForm = document.querySelector("#edit-profile-form");
const newCardForm = document.querySelector("#new-card-form");

const editFormValidator = new FormValidator(validationConfig, editProfileForm);
const addCardFormValidator = new FormValidator(validationConfig, newCardForm);

// Activamos la validación desde el arranque
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(
  ".popup__input_type_description",
);

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#card-template", (name, link) => {
        imagePopup.open(name, link);
      });

      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  ".cards__list",
);

cardList.renderItems();

const editProfilePopup = new PopupWithForm("#edit-popup", (inputValues) => {
  userInfo.setUserInfo({
    name: inputValues.name,
    job: inputValues.description,
  });
  editProfilePopup.close();
});
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm("#new-card-popup", (inputValues) => {
  const card = new Card(
    { name: inputValues["place-name"], link: inputValues.link },
    "#card-template",
    (name, link) => {
      imagePopup.open(name, link);
    },
  );

  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
  addCardPopup.close();
});

addCardPopup.setEventListeners();

editButton.addEventListener("click", () => {
  const currentData = userInfo.getUserInfo();

  nameInput.value = currentData.name;
  descriptionInput.value = currentData.job;

  editFormValidator.resetValidation();
  editProfilePopup.open();
});

addButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardPopup.open();
});
