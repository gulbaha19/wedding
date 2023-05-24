import "./approveSection.css";
const ApproveSection = () => {
  return (
    <div className="approveWrap">
      <img
        src="https://wedinvent.ru/css/lace/img/pic-guest-flowers-1.png"
        alt=""
        className="flowers"
      />
      <div>
        <p className="approveText">
          Приглашаем вас на нашу свадьбу! <br />
          Мы будем очень рады, если вы проведете вместе с нами этот особенный день.
        </p>
        <p className="approve">Пожалуйста, подтвердите или отклоните участие</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btnApprove">Подтвердить</button>
          <button className="btnReject">Отклонить</button>
        </div>
      </div>

      <img
        src="https://wedinvent.ru/css/lace/img/pic-guest-flowers-1.png"
        alt=""
        className="flowersBottom"
      />
    </div>
  );
};
export default ApproveSection;
