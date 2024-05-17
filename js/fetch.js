export const getData = () =>
  fetch('https://28.javascript.htmlacademy.pro/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Sorry! Try again later');
      }
    })
    .catch(() => {
      throw new Error('Server temporaty broken');
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
      if (response.ok) {
        // console.log('ok');
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
export { sending };
