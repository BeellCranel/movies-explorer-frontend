import "./Technologies.scss";

function Technologies() {
  return (
    <section id="technologies" className="technologies">
      <h2 className="technologies__title">Технологии</h2>

      <section className="technologies__kinds">
        <h3 className="technologies__kinds_title">7 технологий</h3>

        <p className="technologies__kinds_subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>

        <section className="technologies__kinds_stack">
          <p className="technologies__kinds_item" lang="en">
            HTML
          </p>
          <p className="technologies__kinds_item" lang="en">
            CSS
          </p>
          <p className="technologies__kinds_item" lang="en">
            JS
          </p>
          <p className="technologies__kinds_item" lang="en">
            React
          </p>
          <p className="technologies__kinds_item" lang="en">
            Git
          </p>
          <p className="technologies__kinds_item" lang="en">
            Express.js
          </p>
          <p className="technologies__kinds_item" lang="en">
            mongoDB
          </p>
        </section>
      </section>
    </section>
  );
}

export default Technologies;
