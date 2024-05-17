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

  // popupElement.querySelectorAll('.popup__feature').forEach((featureListItem) => {
  //   const isNecessary = elements.offer.features.some(
  //     (feature) => featureListItem.classList.contains(`.popup__feature--${feature}`),
  //   );

  //   if (!isNecessary) {
  //     featureListItem.remove();
  //   }
  // });

  // for(const result of elements.offer.photos) {
  //   popupElement.querySelector('.popup__photos').src = result;
  // }


  return popupElement;
};


// const renderPopup = (data) => {
//   const dataFragment = document.createDocumentFragment();
//   data.splice(0,1).forEach((element) => {
//     dataFragment.append(generate(element));
//   });
//   mapContainer.append(dataFragment);
// };

export {generate};
