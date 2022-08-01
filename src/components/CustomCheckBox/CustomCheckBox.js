import "./CustomCheckBox.scss";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function CustomCheckBox({ filterState, changeFilter, isMovies }) {
  const { register, setValue } = useForm({ mode: "onChange" });



  function changeFilterP() {
    changeFilter(isMovies);
  }

  useEffect(() => {
    setValue("checkbox", filterState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState]);

  return (
    <label className="check">
      <input
        className="check__input"
        type="checkbox"
        name="short-films"
        onClick={changeFilterP}
        {...register("checkbox")}
      />
      <span className="check__box opacity">
        <span className="check__box_item" />
      </span>
      Короткометражки
    </label>
  );
}

export default CustomCheckBox;
