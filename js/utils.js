const adForm = document.querySelector('.ad-form');
const inputs = adForm.querySelectorAll('input');
const mapFilters = document.querySelector('.map__filters');

const disableForm = (isDisabled = true) => {
  if (isDisabled) {
    adForm.classList.add('ad-form--disabled');
  } else {
    adForm.classList.remove('ad-form--disabled');
  }
  inputs.forEach((input) => {
    input.disabled = isDisabled;
  });
};

const disableFilter = (isDasabled = true) => {
  if (isDasabled) {
    mapFilters.classList.add('map__filters--disabled');
  }else {
    mapFilters.classList.remove('map__filters--disabled');
  }
};


export { disableFilter, disableForm, adForm };
