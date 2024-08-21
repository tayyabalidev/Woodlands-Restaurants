import React from "react";
import "./FilterPanel.css";
import FilterListToggle from "../../common/filterListToggle/FilterListToggle";
import { categoryList, ratingList } from "../../../constents/Constents";
import CheckBox from "../../common/checkboxProton/CheckBox";
import SliderProton from "../../common/sliderProton/SliderProto";

const FilterPanel = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectRating,
  cuisines,
  changeChecked,
  changePrice,
  selectedPrice,
}) => {
  return (
    <div>
      {/* {category} */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectCategory}
        />
      </div>
      {/* {Cuisines} */}
      <div className="input-group">
        <p className="label">Cuisines</p>
        {cuisines?.map((cuisine) => (
          <CheckBox
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      {/* {Price} */}
      <div className="input-group">
        <p className="label-range">label range</p>
        <SliderProton value={selectedPrice} changePrice={changePrice} />
      </div>

      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
