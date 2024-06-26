import { useEffect, useState } from "react";
import { countriesAPI } from "../api/countriesAPI";
import "../index.css";

// 깃발
// 국가명
// 수도
// 한글 표기명
type Country = {
  capital: string[];
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
  translations: {
    kor: {
      common: string;
      official: string;
    };
  };
};

type CountryList<T> = {
  data: T[];
};

export default function CountriesList() {
  const [countries, setCountries] = useState<CountryList<Country>>();
  const [pending, setPending] = useState<boolean>(true);

  const fetchCountries = async (): Promise<CountryList<Country>> => {
    const response = await countriesAPI.get("");
    return response.data;
  };

  useEffect(() => {
    fetchCountries().then((res) => {
      setCountries(res);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <div>로딩중...</div>;
  }

  if (!countries || !Array.isArray(countries)) {
    return <div>No countries data available.</div>;
  }

  return (
    <ul className="grid grid-cols-4 gap-4">
      {countries.map((country) => (
        <li
          key={country.flags.svg}
          className="border-2 border-solid rounded-xl"
        >
          <div className="flex justify-center items-center h-44">
            <img
              className="h-32 object-contain"
              src={country.flags.svg}
              alt="국기 사진"
            />
          </div>
          <div className="border-t p-2">
            <h2 className="text-xl font-semibold">{country.name.common}</h2>
            <p className="">{country.capital}</p>
            <p>{country.translations.kor.common}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
