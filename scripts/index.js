let showPopupButton = document.querySelector('#show-popup');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');

let profileInfo = document.querySelector('.profile__info');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');

let popupUserInfo = document.querySelector('.namer');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let submitButton = document.querySelector('.popup__done');

function showPopup() {
  popup.classList.add('popup_is-opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
}

showPopupButton.addEventListener('click', showPopup);

function closePopup() {
  popup.classList.remove('popup_is-opened');
}

closePopupButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  closePopup();
}

popupUserInfo.addEventListener('submit', formSubmitHandler);
