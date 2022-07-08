import "./Main.scss";
import MainPageNav from "../MainPageNav/MainPageNav";
import About from "../About/About";
import Technologies from "../Technologies/Technologies";

function Main() {
  return (
    <main className="content">
      <MainPageNav />
      <About />
      <Technologies />
    </main>
  );
}

export default Main;
