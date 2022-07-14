import "./CustomCheckBox.scss";

function CustomCheckBox() {
  return (
    <label className="check">
      <input
        className="check__input"
        type="checkbox"
        id="short-films"
        name="short-films"
        defaultChecked
      />
      <span className="check__box">
        <span className="check__box_item" />
      </span>
      Короткометражки
    </label>
  );
}

export default CustomCheckBox;
