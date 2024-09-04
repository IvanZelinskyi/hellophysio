import React from "react";
import img1 from "../assets/3.jpg";
import Paragraph from "../components/Paragraph";
import Character from "../components/Character";
// import Word from "../components/Word";
const Methods = () => {
  const firstP = `Електростимуляція — це метод фізіотерапії, який використовує електричні імпульси для стимуляції м'язів та нервів. Пристрій для електростимуляції подає слабкі електричні розряди через електроди,
              розташовані на шкірі. Ці імпульси імітують сигнали, які зазвичай
              посилаються мозком для скорочення м'язів, що може допомогти
              відновити функцію м'язів, зняти м'язову напругу, полегшити біль та
              покращити кровообіг.`;
  return (
    <div className="methods">
      {/* TITLE  */}
      <div className="section-title">
        {/* <Paragraph value={"Методи"} /> */}
        <Character value={"Нашi Методи"} />
      </div>

      {/* METHODS CONTENT  */}
      <div className="methods-content">
        <div className="methods-left-container">
          <ul>
            <li>Електростимуляцiя</li>
            <li>Кiнезiотерапiя</li>
            <li>Массаж</li>
          </ul>
          <div className="method-description">
            {/* <Paragraph value={firstP} /> */}
            <p>{firstP}</p>
            <p>
              Метод широко використовується в реабілітації після травм,
              операцій, а також при захворюваннях опорно-рухового апарату, таких
              як параліч, атрофія м'язів, остеохондроз та інші.
              Електростимуляція може бути корисною для спортсменів для
              відновлення після тренувань, а також для профілактики м'язової
              атрофії у пацієнтів, які тривалий час знаходяться в іммобілізації.
            </p>
          </div>
        </div>
        <div className="methods-right-container">
          <img src={img1} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Methods;
