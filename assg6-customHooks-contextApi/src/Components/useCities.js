import { useState, useEffect } from "react";

export default function useCities(stateName, stateList) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCities(stateList[stateName]);
  }, [stateName]);
  return cities;
}
