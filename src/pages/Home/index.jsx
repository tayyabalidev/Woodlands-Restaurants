import React, { useEffect, useState } from "react";
import SearchBar from "../../components/Home/SearchBar/SearchBar";
import FilterPanel from "../../components/Home/filterPanel/FilterPanel";
import List from "../../components/Home/list/List";
import "./style.css";
import EmptyView from "../../components/common/EmptyView/EmptyView";
import { dataList } from "../../constents/Constents";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [inputSearch, setInputSearch] = useState("");
  const [resultFound, setResultFound] = useState(false);
  const [cuisines, setCuisines] = useState([
    {
      id: 1,
      checked: false,
      label: "American",
    },
    {
      id: 2,
      checked: false,
      label: "Chinese",
    },
    {
      id: 3,
      checked: false,
      label: "Italian",
    },
  ]);

  const [list, setList] = useState(dataList);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cuisinesStateList = cuisines;
    const changeCheckedCuisines = cuisinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const handleChangePrice = (event, value) => setSelectedPrice(value);

  const applyFilters = () => {
    let updatedList = dataList;

    // Rating filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Cuisine filter
    const cuisineChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLocaleLowerCase());

    if (cuisineChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisineChecked.includes(item.cuisine.toLocaleLowerCase())
      );
    }

    // price filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    // InputSearch
    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title
            .toLocaleLowerCase()
            .search(inputSearch.toLocaleLowerCase().trim()) !== -1
      );
    }

    setList(updatedList);

    // not found
    !updatedList.length ? setResultFound(false) : setResultFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cuisines, selectedPrice, inputSearch]);

  return (
    <div className="home">
      <SearchBar
        value={inputSearch}
        changeInput={(e) => setInputSearch(e.target.value)}
      />
      <div className="home-panelList-Wrap">
        <div className="home-panel-wrap">
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            selectedRating={selectedRating}
            selectRating={handleSelectRating}
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
            cuisines={cuisines}
            changeChecked={handleChangeChecked}
          />
        </div>
        <div className="home-list-wrap">
          {resultFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Home;
