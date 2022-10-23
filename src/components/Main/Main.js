import "./Main.scss";
import MainPageHeader from "../MainPageHeader/MainPageHeader";
import About from "../About/About";
import Technologies from "../Technologies/Technologies";
import Student from "../Student/Student";
import Footer from "../Footer/Footer";

function Main({
  aboutRef,
  technologiesRef,
  studentRef,
  goToHeader,
  goToAbout,
  goToTechnologies,
  goToStudent,
}) {
  return (
    <>
      <main className="content">
        <MainPageHeader
          goToHeader={goToHeader}
          goToAbout={goToAbout}
          goToTechnologies={goToTechnologies}
          goToStudent={goToStudent}
        />
        <About aboutRef={aboutRef} />
        <Technologies technologiesRef={technologiesRef} />
        <Student studentRef={studentRef} />
      </main>
      <Footer />
    </>
  );
}

export default Main;
