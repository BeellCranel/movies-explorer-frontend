import "./Main.scss";
import MainPageNav from "../MainPageNav/MainPageNav";
import About from "../About/About";
import Technologies from "../Technologies/Technologies";
import Student from "../Student/Student";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <main className="content">
        <MainPageNav />
        <About />
        <Technologies />
        <Student />
      </main>
      <Footer />
    </>
  );
}

export default Main;
