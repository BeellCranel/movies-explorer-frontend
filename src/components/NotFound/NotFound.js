import "./NotFound.scss";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__link opacity" onClick={goBack}>Назад</button>
    </section>
  );
}

export default NotFound;
