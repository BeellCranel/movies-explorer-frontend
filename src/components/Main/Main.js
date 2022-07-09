import "./Main.scss";
import MainPageHeader from "../MainPageHeader/MainPageHeader";
import About from "../About/About";
import Technologies from "../Technologies/Technologies";
import Student from "../Student/Student";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <main className="content">
        <MainPageHeader />
        <About />
        <Technologies />
        <Student />
      </main>
      <Footer />
    </>
  );
}

export default Main;
