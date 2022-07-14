import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";

function Movies() {
  return (
    <>
      <main className="content">
        <SearchForm />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
