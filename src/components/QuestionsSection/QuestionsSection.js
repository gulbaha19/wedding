import "./questions.css";
const questions = [
  {
    question: "Есть ли у нас свадебный хештег?",
    answer: "Да, при публикациях в социальных сетях, используйте этот тег #kamila&arman",
  },
  {
    question: "Кому можно задать вопросы по организации мероприятия?",
    answer: "C радостью ответиm на ваши вопросы. Hомер телефона: +7 (707) 157-18-14.",
  },
];
const QuestionsSection = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h3>Отвечаем на ваши вопросы</h3>
      {questions.map((el, i) => (
        <div key={i} style={{ textAlign: "start", padding: "5px 10px" }}>
          <p style={{ fontSize: "18px", fontWeight: 600, marginLeft: "20px" }}>
            {i + 1}.{el.question}
          </p>
          <p>{el.answer}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
export default QuestionsSection;
