import { generate } from './popup.js';

async function mapInit (data) {
  const map = await L.map('map-canvas')
    .setView({
      lat: 35.6894875,
      lng: 139.6917064,
    }, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);


  const icon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  data.forEach((element) => {
    console.log(element);
    const {lat, lng} = element.location;
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );
    marker
      .addTo(map)
      .bindPopup(generate(element));
  });
}

export{mapInit};

