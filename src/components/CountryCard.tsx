import { CountryCardProps } from "../types/country.type";

export default function CountryCard({
  country,
  setSelectedCountries,
}: CountryCardProps) {
  const handleCardClick = () => {
    setSelectedCountries((prevSelected) => {
      // prevSelected 인 경우
      if (
        prevSelected.some((item) => item.name.common === country.name.common)
      ) {
        // 클릭한 card 만을 제거
        return prevSelected.filter(
          (item) => item.name.common !== country.name.common
        );
        // prevSelected 에 없는 경우
      } else {
        // prevSelected 에 추가해준다
        return [...prevSelected, country];
      }
    });
  };

  return (
    <li
      className="border-2 border-solid rounded-xl cursor-pointer"
      onClick={handleCardClick}
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
        <p>{country.translations?.kor.common}</p>
      </div>
    </li>
  );
}
