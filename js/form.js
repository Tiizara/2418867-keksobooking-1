import { adForm } from './utils.js';
import { sending } from './fetch.js';

const setUserFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    sending(formData);
  });
};

setUserFormSubmit();
