import { useEffect, useState } from "react";
import { countriesAPI } from "../api/countriesAPI";
import CountryCard from "./CountryCard";
import { CountryWithisSelected } from "../types/country.type";

export default function CountriesList() {
  const [countries, setCountries] = useState<CountryWithisSelected[]>([]);
  const [pending, setPending] = useState<boolean>(true);
  const [selectedCountries, setSelectedCountries] = useState<
    CountryWithisSelected[]
  >([]);

  const fetchCountries = async (): Promise<CountryWithisSelected[]> => {
    // 꼼꼼한 Type Check 를 위해 get method 또한 타입을 명시해준다.
    const response = await countriesAPI.get<CountryWithisSelected[]>("");

    const countriesList = response.data.map((item) => ({
      ...item,
      isSelected: false,
    }));
    return countriesList;
  };

  useEffect((): void => {
    fetchCountries().then((res) => {
      setCountries(res);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <div>로딩중...</div>;
  }

  if (!countries || !Array.isArray(countries)) {
    // Array 인지 확인
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <>
      <h1 className="text-center my-4 text-xl font-bold">Favorite Countries</h1>
      <ul className="grid grid-cols-4 gap-4">
        {selectedCountries.map((country, index) => (
          <CountryCard
            key={index}
            country={country}
            countries={countries}
            setSelectedCountries={setSelectedCountries}
          />
        ))}
      </ul>
      <h1 className="text-center my-4 text-xl font-bold">Whole Countries</h1>
      <ul className="grid grid-cols-4 gap-4">
        {countries.map((country, index) => (
          <CountryCard
            key={index}
            country={country}
            countries={countries}
            setSelectedCountries={setSelectedCountries}
          />
        ))}
      </ul>
    </>
  );
}
