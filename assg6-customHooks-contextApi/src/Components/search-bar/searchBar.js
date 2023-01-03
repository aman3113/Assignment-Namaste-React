import { useEffect, useState, useRef } from "react";
import "./searchBar.css";
import stateList from "../../Data/state-city.json";
import useCities from "../Hooks/useCities";

export default SearchComponent = (props) => {
  //
  const [searchInput, setSearchInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  //
  const { userData, setFilteredData, setMatchFound } = props;
  //
  const cityList = useCities(stateInput, stateList);

  // useEffect to handle change of cities and state
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    getFilteredData();
  }, [stateInput, cityInput]);

  // Search filter functions

  const searchedData = stateInput
    ? getSearchedDataByLocation()
    : getSearchedDataByName();

  function getSearchedDataByName() {
    return userData?.filter((member) =>
      member?.name?.toLowerCase().includes(searchInput)
    );
  }

  function getSearchedDataByLocation() {
    return userData?.filter(
      (member) =>
        member?.state?.toLowerCase().includes(stateInput.toLowerCase()) &&
        member?.city?.toLowerCase().includes(cityInput.toLowerCase())
    );
  }

  // searchInput handler

  function getFilteredData() {
    if (searchedData.length > 0) {
      setFilteredData(() => searchedData);
      setMatchFound(true);
    } else {
      setMatchFound(false);
    }
  }

  return (
    <div className="search-bar">
      <input
        type="search"
        id="search-input"
        name="searchInput"
        value={searchInput}
        placeholder="search here"
        onChange={(e) => setSearchInput(() => e.target.value.toLowerCase())}
        onKeyDown={(e) => {
          if (e.key === "Enter") return getFilteredData();
        }}
      />

      <select
        name="stateList"
        id="stateList"
        value={stateInput}
        onChange={(e) => setStateInput(() => e.target.value)}
      >
        <option key={"All States"} value={""}>
          Select State
        </option>
        {Object.keys(stateList).map((state) => {
          return (
            <option key={state} value={state}>
              {state}
            </option>
          );
        })}
      </select>

      <select
        name="cityList"
        id="cityList"
        value={cityInput}
        onChange={(e) => setCityInput(() => e.target.value)}
      >
        <option key={"All Cities"} value={""}>
          Select City
        </option>
        {cityList?.map((city) => {
          city = city.replace("*", "");
          return (
            <option key={city} value={city}>
              {city}
            </option>
          );
        })}
      </select>
    </div>
  );
};
