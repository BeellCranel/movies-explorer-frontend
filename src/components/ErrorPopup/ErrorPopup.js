import "./ErrorPopup.scss";

function ErrorPopup({ isOpen, onClose, errorMesage }) {
  const navPopupClassName = `error-popup${isOpen ? " error-popup__opened" : ""}`;
  function handleOnClose(e) {
    if (e.target.classList.contains("error-popup__opened")) {
      onClose();
    }
  }

  return (
    <div className={navPopupClassName} onClick={handleOnClose}>
      <div className="error-popup__container">
        <button className="error-popup__close-btn opacity" type="button" onClick={onClose} />
        <h1 className="error-popup__title">{errorMesage.status}</h1>
        <p className="error-popup__subtitle">{errorMesage.message}</p>
      </div>
    </div>
  );
}

export default ErrorPopup;
