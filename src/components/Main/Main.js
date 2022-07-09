import "./Main.scss";
import MainPageNav from "../MainPageNav/MainPageNav";
import About from "../About/About";
import Technologies from "../Technologies/Technologies";
import Student from "../Student/Student";

function Main() {
  return (
    <main className="content">
      <MainPageNav />
      <About />
      <Technologies />
      <Student />
    </main>
  );
}

export default Main;
