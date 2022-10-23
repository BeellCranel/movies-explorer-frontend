import "./About.scss";

function About({ aboutRef }) {
  return (
    <section ref={aboutRef} className="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__facts">
        <section className="about__fact">
          <h3 className="about__fact_title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__fact_subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </section>
        <section className="about__fact">
          <h3 className="about__fact_title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__fact_subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </section>
      </div>

      <div className="about__schedule">
        <section className="about__schedule_el about__schedule_el_1">
          <h3 className="about__schedule_title">1 неделя</h3>
          <p className="about__schedule_subtitle" lang="en">
            Back-end
          </p>
        </section>
        <section className="about__schedule_el about__schedule_el_2">
          <h3 className="about__schedule_title">4 недели</h3>
          <p className="about__schedule_subtitle" lang="en">
            Front-end
          </p>
        </section>
      </div>
    </section>
  );
}

export default About;
