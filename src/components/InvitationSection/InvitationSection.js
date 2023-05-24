import "./invitation.css";
import arman from "../../assets/arman.webp";
import kamila from "../../assets/kamila.webp";

const InvitationSection = () => {
  return (
    <div className="invitationWrap">
      <img src="https://wedinvent.ru/css/lace/img/pic-newlyweds.png" alt="" />
      <h1 className="names">
        Arman <span>&</span> Kamila
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p className="invitationTxt">
          Дорогие друзья! <br />
          Жить, любить, чувствовать. Однажды мы поняли, что нет ничего важнее этого. И что идти
          дальше мы хотим только вместе. А теперь мечтаем, чтобы день нашей свадьбы стал красивым и
          ярким событием на этом увлекательном пути. Мы будем очень рады, если вы разделите этот
          счастливый день с нами. Увидимся на нашей свадьбе!
        </p>
      </div>
      <div className="hearts">
        <img src={arman} alt="" className="photo" />
        <img src={kamila} alt="" className="photo" />
      </div>
    </div>
  );
};
export default InvitationSection;
