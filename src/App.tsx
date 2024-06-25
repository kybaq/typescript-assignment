import { useEffect, useState } from "react";
import { countriesAPI } from "./api/countriesAPI";

type country = {};

type CountryList<T> = {
  data: T[];
};

export default function App(): JSX.Element {
  const [data, setData] = useState(null);

  const fetchCountries = async () => {
    const response = await countriesAPI.get("");

    console.log(response);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return <div></div>;
}
