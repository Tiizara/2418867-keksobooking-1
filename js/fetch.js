import { renderMap } from './generating-elements.js';
import { disabled } from './utils.js';

fetch('https://28.javascript.htmlacademy.pro/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      disabled();
    }
  })
  .then((data) => {
    console.log(data);
    renderMap(data);
  })
  .catch(() => {
    disabled();
  });

const sending = (formData) => {
  fetch(
    'https://28.javascript.htmlacademy.pro/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok){
        console.log('ok');
      }
      // } else {
      //   document.removeEventListener('keydown', onImgUploadEsc);
      //   showAlertError(addEscListener);
      // }
    // })
    // .catch(() => {
    //   document.removeEventListener('keydown', onImgUploadEsc);
    //   showAlertError(addEscListener);
    // })
    // .finally(() => {
    //   blockButton();
    });
};
export {sending};
