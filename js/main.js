import './utils.js';
import './pristine.js';
import './upload-img.js';
import { setFilter } from './filter.js';
import { disableFilter, disableForm } from './utils.js';
import { getData } from './fetch.js';
import { mapInit, renderMapLayer, markerMovee } from './map.js';
//1.страница в неактивном состоянии
disableFilter();
disableForm();

//2. начинает грузится карта
mapInit()
  .then(() => {
    //3. при успешной загрузке карты - активизируется форма
    disableForm(false);
    markerMovee();
    //4. загружаются данные
    getData()
      .then((data) => {
        console.log(data);
        renderMapLayer(data);

        //5. при успешной загрузке данных - разблокируется фильтр
        disableFilter(false);
        setFilter(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

