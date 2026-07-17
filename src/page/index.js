import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "d04db97f-1182-4f24-bc6a-2ebb403ec091",
    "Content-Type": "application/json",
  },
});

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

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(
  ".popup__input_type_description",
);

const cardList = new Section(
  {
    renderer: (item) => {
      const cardElement = createCard(item);
      cardList.addItem(cardElement);
    },
  },
  ".cards__list",
);

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
  avatarSelector: ".profile__image",
});

const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

const createCard = (item) => {
  const card = new Card(
    item,
    "#card-template",
    (name, link) => {
      imagePopup.open(name, link);
    },
    (cardInstance) => {
      confirmPopup.setAction(() => {
        api
          .deleteCard(cardInstance._id)
          .then(() => {
            cardInstance.removeCard();
            confirmPopup.close();
          })
          .catch((err) => {
            console.log(`Error al eliminar la tarjeta: ${err}`);
          });
      });
      confirmPopup.open();
    },
    (cardInstance) => {
      if (cardInstance.isLiked()) {
        api
          .removeLike(cardInstance._id)
          .then((updatedCardData) => {
            cardInstance.renderLikes(updatedCardData.isLiked);
          })
          .catch((err) => {
            console.log(`Error al quitar el me gusta: ${err}`);
          });
      } else {
        api
          .addLike(cardInstance._id)
          .then((updatedCardData) => {
            cardInstance.renderLikes(updatedCardData.isLiked);
          })
          .catch((err) => {
            console.log(`Error al dar me gusta: ${err}`);
          });
      }
    },
    userInfo.getUserId(),
  );
  return card.generateCard();
};

const editProfilePopup = new PopupWithForm("#edit-popup", (inputValues) => {
  editProfilePopup.renderLoading(true);

  api
    .updateUserInfo(inputValues.name, inputValues.description)
    .then((userData) => {
      userInfo.setUserInfo({
        name: userData.name,
        job: userData.about,
        avatar: userData.avatar,
      });
      editProfilePopup.close();
    })
    .catch((err) => {
      console.log(`Error al actualizar el perfil: ${err}`);
    })
    .finally(() => {
      editProfilePopup.renderLoading(false);
    });
});
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm("#new-card-popup", (inputValues) => {
  addCardPopup.renderLoading(true, "Creando...");
  api
    .addNewCard(inputValues["place-name"], inputValues.link)
    .then((cardData) => {
      const cardElement = createCard(cardData);
      cardList.addItem(cardElement);
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(`Error al añadir una nueva tarjeta: ${err}`);
    })
    .finally(() => {
      addCardPopup.renderLoading(false);
    });
});
addCardPopup.setEventListeners();

const confirmPopup = new PopupWithConfirmation("#popup-confirm");
confirmPopup.setEventListeners();

const avatarForm = document.querySelector("#popup-avatar .popup__form");
const avatarFormValidator = new FormValidator(validationConfig, avatarForm);
avatarFormValidator.enableValidation();

const avatarPopup = new PopupWithForm("#popup-avatar", (inputValues) => {
  avatarPopup.renderLoading(true);

  api
    .updateAvatar(inputValues.avatar)
    .then((userData) => {
      userInfo.setUserInfo({
        name: userData.name,
        job: userData.about,
        avatar: userData.avatar,
      });
      avatarPopup.close();
    })
    .catch((err) => {
      console.log(`Error al actualizar el avatar: ${err}`);
    })
    .finally(() => {
      avatarPopup.renderLoading(false);
    });
});
avatarPopup.setEventListeners();

const avatarElement = document.querySelector(".profile__image");
avatarElement.addEventListener("click", () => {
  avatarFormValidator.resetValidation();
  avatarPopup.open();
});

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

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo({
      name: userData.name,
      job: userData.about,
      avatar: userData.avatar,
      id: userData._id,
    });

    cardsData.forEach((cardItem) => {
      const cardElement = createCard(cardItem);
      cardList.addItem(cardElement);
    });
  })
  .catch((err) => {
    console.log(`Error al cargar los datos iniciales: ${err}`);
  });
