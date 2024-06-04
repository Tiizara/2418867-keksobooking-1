const orderForm = document.querySelector('.ad-form');

const pristine = new Pristine(orderForm, {
  classTo: 'ad-form__element',
  successClass: 'ad-form__item--valid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error',
});


function validateAd (value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(
  orderForm.querySelector('#title'),
  validateAd,
  'От 30 до 100 символов'
);


export const movee = (value) => {
  orderForm.querySelector('#address').value = value;

  pristine.addValidator(
    orderForm.querySelector('#address'),
    value,
    'Укажите ползунком координаты'
  );
};

const priceField = orderForm.querySelector('#price');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace':10000
};


function validatePrice (value) {
  const unit = orderForm.querySelector('[name="type"]');
  return +(value) >= minPrice[unit.value];
}

function getPriceErrorMessage () {
  const unit = orderForm.querySelector('[name="type"]');
  return `минимальная цена за ночь ${minPrice[unit.value]}`;
}

pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);

function onTypeChange () {
  priceField.placeholder = minPrice[this.value];
  pristine.validate(priceField);
}

orderForm
  .querySelectorAll('[name="type"]')
  .forEach((item) => item.addEventListener('change', onTypeChange));

orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
