const adForm = document.querySelector('.ad-form');
const inputs = adForm.querySelectorAll('input');
const mapFilters = document.querySelector('.map__filters');

const disableForm = (isDasabled = true) => {
  if(!isDasabled) {
    adForm.classList.add('ad-form--disabled');
    inputs.forEach((input) => {
      input.disabled = true;
    });
  }
};

const disableFilter = (isDasabled = true) => {
  if(!isDasabled) {
    mapFilters.classList.add('map__filters--disabled');
  }
};

disableFilter(true);
disableForm(true);

export {disableFilter, disableForm, adForm};
