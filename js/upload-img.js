const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooserMap = document.querySelector('.ad-form__field input[type=file]');
const fileChooserHous = document.querySelector('.ad-form__upload input[type=file]');
const previewMapPhoto = document.querySelector('.ad-form-header__preview img');
const previewHousePhoto = document.querySelector('.ad-form__photo');


fileChooserMap.addEventListener('change', () => {
  const file = fileChooserMap.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewMapPhoto.src = URL.createObjectURL(file);
  }

});

fileChooserHous.addEventListener('change', () => {
  const file = fileChooserHous.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const photo = document.createElement('img');
    photo.style.width = '40px';
    photo.style.height = '40px';
    photo.style.transform = 'translate(14px, 14px)';
    photo.setAttribute('src', '');
    previewHousePhoto.append(photo);
    photo.src = URL.createObjectURL(file);
  }
});
