import "./CustomCheckBox.scss";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function CustomCheckBox({ isFilterMovies, changeFilter }) {
  const { register, setValue } = useForm({ mode: "onChange" });

  useEffect(() => {
    setValue("checkbox", isFilterMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilterMovies]);

  return (
    <label className="check">
      <input
        className="check__input"
        type="checkbox"
        name="short-films"
        onClick={changeFilter}
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
