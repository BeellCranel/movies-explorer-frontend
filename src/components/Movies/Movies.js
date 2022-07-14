import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";

function Movies() {
  return (
    <>
      <main className="content">
        <SearchForm />
        <Cards />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
