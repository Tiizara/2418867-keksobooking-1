const adForm = document.querySelector('.ad-form');
const inputs = adForm.querySelectorAll('input');
const mapFilters = document.querySelector('.map__filters');

const disabled = () => {
  adForm.classList.add('ad-form--disabled');
  inputs.forEach((input) => {
    input.disabled = true;
  });
  mapFilters.classList.add('map__filters--disabled');
};

export {disabled, adForm};
