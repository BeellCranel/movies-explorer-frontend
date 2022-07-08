import "./Main.scss";
import MainPageNav from "../MainPageNav/MainPageNav";
import About from "../About/About";

function Main() {
  return (
    <main className="content">
      <MainPageNav />
      <About />
    </main>
  );
}

export default Main;
