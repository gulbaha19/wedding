import Counter from "./Counter/Counter";
import "./mainSection.css";
const MainSection = () => {
  return (
    <div className="wrap">
      <div className="mainSectionTitle">
        <img src="https://wedinvent.ru/css/lace/img/pic-we-are-married.png" alt="" />
        <h1 className="names">
          Arman <span>&</span> Kamila
        </h1>
        <p>30 Июня 2023 года</p>
        <img
          src="https://wedinvent.ru/css/lace/img/pic-we-are-married-right-newlyweds.png"
          alt=""
        />
      </div>
      <Counter />
    </div>
  );
};
export default MainSection;
