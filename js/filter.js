const mapFilters = document.querySelectorAll('.map__filters');

let filterElements = [];

const filterMap = (data) => {
  console.log(data);
  mapFilters.forEach((filter) => {
    filter.addEventListener('click', (e) => {
      console.log(e.target.value);
      const filters = data.map((element) => element.offer);
      const filtersType = filters.filter((element) => element.type === e.target.value);
      const filtersPrice = filters.filter((element) => {
        if (e.target.value === 'middle') {
          return (+element.price <= 50000 && +element.price >= 10000);
        }
        if (e.target.value === 'low') {
          return (+element.price <= 10000);
        }
        if (e.target.value === 'high') {
          return (+element.price >= 50000);
        }
      });

      const filtersRooms = filters.filter((element) => {
        if (+e.target.value < 2) {
          return (element.rooms === 1);
        }
        if (+e.target.value < 3) {
          return (element.rooms === 2);
        }
        if (e.target.value === '3') {
          return (element.rooms === 3);
        }
        // element.rooms === +e.target.value);
      });
      const filtersGuests = filters.filter((element) => element.guests === +e.target.value);

      filterElements = [
        ...(filtersType.length > 0 ? filtersType : []),
        ...(filtersPrice.length > 0 ? filtersPrice : []),
        ...(filtersRooms.length > 0 ? filtersRooms : []),
        ...(filtersGuests.length > 0 ? filtersGuests : []),
      ];

      console.log(filterElements);
      //   const result = [];

      //   if (filtersType.length > 0) {
      //     console.log('ok');
      //     result.push(filtersType);
      //   }

      //   if (filtersPrice.length > 0) {
      //     result.push(filtersPrice);
      //   }

    //   if (filtersRooms.length) {
    //     result.push(filtersRooms);
    //   }
    //   console.log(result);
    });
  });
};
export {filterMap, filterElements};
