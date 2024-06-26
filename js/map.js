import { generate } from './popup.js';
import { movee } from './pristine.js';

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

let map;
let markerGroup;
let markerMoveend;

async function mapInit() {
  map = await L.map('map-canvas')
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

  markerGroup = L.layerGroup().addTo(map);
  markerMoveend = L.layerGroup().addTo(map);
}

const renderMapLayer = (data) => {
  markerGroup.clearLayers();
  data.forEach((element) => {
    const { lat, lng } = element.location;
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
      .addTo(markerGroup)
      .bindPopup(generate(element));
  });
};

const markerMovee = () => {
  markerMoveend.clearLayers();
  const marker = L.marker(
    {
      lat: 35.6894875,
      lng: 139.6917064,
    },
    {
      draggable: true,
    },
  );

  marker.addTo(map);

  marker.on('moveend', (evt) => {
    console.log(evt.target.getLatLng());
    movee(evt.target.getLatLng());
  });
};


export { mapInit, renderMapLayer, markerMovee};

