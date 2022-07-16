import "./Profile.scss";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Роман</h1>
      <div className="profile__container">
        <div className="profile__el">
          <p className="profile__item profile__item_lable">Имя</p>
          <p className="profile__item profile__item_value">Роман</p>
        </div>
        <div className="profile__el">
          <p className="profile__item profile__item_lable">E-mail</p>
          <p className="profile__item profile__item_value">pochta@yandex.ru</p>
        </div>
      </div>
      <div className="profile__bottom">
        <button className="profile__edit-btn opacity" type="button">
          Редактировать
        </button>
        <Link className="profile__link opacity" to="/sign-in">
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
