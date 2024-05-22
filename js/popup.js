// const mapContainer = document.querySelector('#map-canvas');
const popupTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const generate = (elements) => {
  const popupElement = popupTemplate.cloneNode(true);
  popupElement.querySelector('.popup__title').textContent = elements.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = elements.offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${elements.offer.price}₽/ночь`;
  popupElement.querySelector('.popup__type').value = `${elements.offer.type}`;
  popupElement.querySelector('.popup__text--capacity').textContent = `${(elements.offer.rooms)} комнаты для ${elements.offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${elements.offer.checkin}, выезд до ${elements.offer.checkout}`;
  popupElement.querySelector('.popup__description').textContent = elements.offer.description;
  popupElement.querySelector('.popup__avatar').src = elements.author.avatar;
  const list = popupElement.querySelector('.popup__features');
  const photos = popupElement.querySelector('.popup__photos');

  const OPTIONS = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
  ];

  if (Array.isArray(elements.offer.photos)) {
    photos.innerHTML = elements.offer.photos
      .map((photo) => `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`)
      .join('');
  } else {
    photos.remove();
  }

  if (Array.isArray(elements.offer.features)) {
    list.innerHTML = OPTIONS
      .filter((option) => elements.offer.features.includes(option))
      .map((option) => `<li class="popup__feature popup__feature--${option}"></li>`)
      .join('');
  } else {
    list.remove();
  }
  return popupElement;
};

export { generate };
