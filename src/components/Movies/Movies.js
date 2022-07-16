import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import MoreButton from "../MoreButton/MoreButton";

function Movies() {
  return (
    <>
      <main className="content">
        <SearchForm />
        <Cards />
        <MoreButton />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
