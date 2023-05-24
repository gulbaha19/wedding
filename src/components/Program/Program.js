import "./program.css";
const programArr = [
  {
    time: "09:00",
    title: "Утро невесты",
    description: "Фотосессия в отеле ....",
    adress: "....Petropavlovsk",
  },
  {
    time: "11:30",
    title: "Cырга салу",
    description: "Сарга салу ",
    adress: "дом",
  },
  {
    time: "13:30",
    title: "Свадебная прогулка",
    description: "Свадебная прогулка park",
    adress: "....Petropavlovsk",
  },
  {
    time: "16:00",
    title: "Свадебная церемония",
    description: "Свадебная церемония",
    adress: "Turan",
  },
  {
    time: "23:00",
    title: "Окончание вечера",
    description: "Окончание вечера",
    adress: "....Petropavlovsk",
  },
];
const Program = () => {
  return (
    <div className="programWrap">
      <h3>Программа свадебного дня</h3>
      <img src="https://wedinvent.ru/css/lace/img/ico-hearts-3.png" alt="" />
      <h2>29.06.2023 г.</h2>
      <div>
        {programArr.map((el, i) => (
          <div key={i}>
            <p style={{ fontSize: "24px", color: "#be7096", padding: "2px", margin: 0 }}>
              {el.time}
            </p>
            <p
              style={{
                color: "#4e4e4d",
                fontSize: "20px",
                padding: "2px",
                margin: 0,
                fontWeight: 700,
              }}>
              {el.title}
            </p>
            <p
              style={{
                color: "#4e4e4d",
                fontSize: "22px",
                padding: "2px",
                margin: 0,
                fontWeight: 400,
              }}>
              {el.description}
            </p>
            <p style={{ color: "#84898c", padding: "2px" }}>
              Адрес:
              <a href="/" style={{ borderBottom: "dashed #84898c 1px", color: "#84898c" }}>
                {el.adress}
              </a>
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Program;
