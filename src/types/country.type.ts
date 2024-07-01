// 깃발
// 국가명
// 수도
// 한글 표기명
// translation?  같은 경우는 있을 수도 있고 없을 수도 있다를 나타내기 위해 '?' 사용함
// 필요없지만 그냥 써보자

type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      // 인덱스 시그니처, 객체 타입의 모든 프로퍼티가 특정 타입의 키와 특정 타입의 값을 갖는다고 명시하는 구문.
      // key 의 타입: string, value 의 타입: string
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: {
    png?: string;
    svg?: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
  isSelected: boolean;
};

export type CountryWithisSelected = Country & {
  // toggle 기능을 위한 프로퍼티 추가
  isSelected: boolean;
};

export interface CountryCardProps {
  // props 중 country 의 type 은 Country 다
  country: CountryWithisSelected;
  setSelectedCountries: React.Dispatch<
    React.SetStateAction<CountryWithisSelected[]>
  >;
}
