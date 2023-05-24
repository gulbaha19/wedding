import "./map.css";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";

const MapSection = () => {
  const mapState = {
    center: [54.861001, 69.176281],
    zoom: 15,
  };

  return (
    <div className="wrapMap">
      <img src="https://wedinvent.ru/css/lace/img/ico-places-rest.png" alt="" />

      <h2>Свадебный ужин</h2>
      <p>Ресторан</p>
      <p style={{ color: "#4e4e4d" }}>Петропавловск, ул. батыра Баяна, 107 , Ресторан: "Туран"</p>
      <p style={{ color: "#4e4e4d" }}>
        2GIS:
        <a href="https://2gis.kz/petropavlovsk/geo/70000001041110828" style={{ color: "#4e4e4d" }}>
          Петропавловск, ул. батыра Баяна, 107 , Ресторан: "Туран"
        </a>
      </p>
      <section className="bank_balance_ymap">
        <YMaps>
          <Map
            state={mapState}
            id="map"
            className="contact_map"
            instanceRef={(ref) => {
              ref && ref.behaviors.disable("scrollZoom");
            }}>
            <Placemark defaultGeometry={[54.861001, 69.176281]} geometry={[54.861001, 69.176281]} />
            <ZoomControl />
          </Map>
        </YMaps>
      </section>
    </div>
  );
};
export default MapSection;
