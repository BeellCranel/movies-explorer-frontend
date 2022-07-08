import "./About.scss";

function About() {
  return (
    <section id="about" className="about">
      <h2 className="about__title">О проекте</h2>
      <section className="about__fact">
        <h3 className="about__fact_title">Дипломный проект включал 5 этапов</h3>
        <p className="about__fact_text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
      </section>
      <section className="about__fact">
        <h3 className="about__fact_title">Дипломный проект включал 5 этапов</h3>
        <p className="about__fact_text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
      </section>
      <div className="about__schedule">
        <div className="about__schedule_el_1">
          <h3 className="about__schedule_title">1 неделя</h3>
          <p className="about__schedule_subtitle">Back-end</p>
        </div>
        <div className="about__schedule_el_2">
          <h3 className="about__schedule_title">4 недели</h3>
          <p className="about__schedule_subtitle">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default About;
