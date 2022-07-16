import "./SavedMovies.scss";
import SearchForm from "../SearchForm/SearchForm";
import CardsSaved from "../CardsSaved/CardsSaved";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return (
    <>
      <main className="content">
        <SearchForm />
        <CardsSaved />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
