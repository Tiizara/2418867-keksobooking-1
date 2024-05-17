import './utils.js';
import './pristine.js';
import {disableFilter, disableForm } from './utils.js';
import { getData } from './fetch.js';
import { mapInit } from './map.js';
//1.страница в неактивном состоянии
//2. начинает грузится карта

// mapInit()
//   .then(() => {
//     console.log('ok');
//     //3. при успешной загрузке карты - активизируется форма
//     //4. загружаются данные
getData()
  .then((data) => {
    mapInit(data);
    disableForm(true);
    disableFilter(true);
    //5. при успешной загрузке данных - разблокируется фильтр
  })
  .catch((err) => {
    console.log(err);
  });
// });

