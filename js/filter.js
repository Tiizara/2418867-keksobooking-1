const formFilter = document.querySelector('.map__filters');
import { renderMapLayer } from './map.js';

const localData = [];
const formState = {
  features: []
};

const updateFormState = (key, value) => {
  if (key === 'features'){
    const checkedFeatures = document.querySelectorAll('[name="features"]:checked');
    formState.features.length = 0;
    formState.features.push(...Array.from(checkedFeatures).map((item) => item.value));
  } else {
    formState[key] = value;
  }

};

const LOW_PRICE = 10000;
const MIDDLE_PRICE = 50000;

const PRICE_SET = {
  'middle': (price) => price >= LOW_PRICE && price < MIDDLE_PRICE,
  'low': (price) => price < LOW_PRICE,
  'high': (price) => price > MIDDLE_PRICE
};

const FILTERS_SET = {
  'housing-type': (value, data) => data.filter((item) => item.offer.type === value),
  'housing-price': (value, data) => data.filter((item) => PRICE_SET[value](item.offer.price)),
  'housing-rooms': (value, data) => data.filter((item) => item.offer.rooms === +value),
  'housing-guests': (value, data) => data.filter((item) => item.offer.guests === +value),
  'features': (value, data) => data.filter((item) =>{
    if(Array.isArray(item.offer.features)){
      return value.every((feature)=>item.offer.features.includes(feature));
    }
  })
};

const filterData = () => {
  const keysArray = Object.keys(formState);
  return keysArray.reduce((acc, filter) => {
    if (formState[filter] === 'any') {
      return acc;
    } else {
      return FILTERS_SET[filter](formState[filter], acc);
    }

  }, localData);
};


formFilter.addEventListener('change', ({ target }) => {

  updateFormState(target.name, target.value);
  const filteredData = filterData();
  renderMapLayer(filteredData);
});

export const setFilter = (data) => {
  localData.length = 0;
  localData.push(...data.slice());
};
