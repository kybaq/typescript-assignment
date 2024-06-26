// 깃발
// 국가명
// 수도
// 한글 표기명
// translation?  같은 경우는 있을 수도 있고 없을 수도 있다를 나타내기 위해 '?' 사용함
// 필요없지만 그냥 써보자

type ExtraProperties = {
  [key: string]: string;
};

type Country = {
  capital: string[];
  flags: {
    [key: string]: string;
  };
  name: {
    [key: string]: string;
  };
  translations?: {
    // 인덱스 시그니처, 객체 타입의 모든 프로퍼티가 특정 타입의 키와 특정 타입의 값을 갖는다고 명시하는 구문.
    // key 의 타입: string, value 의 타입: string
    [key: string]: {
      common: string;
      official: string;
    };
  };
  extraProperties?: ExtraProperties;
};

export type CountryWithisSelected = Country & {
  // toggle 기능을 위한 프로퍼티 추가
  isSelected: boolean;
};

export interface CountryCardProps {
  // props 중 country 의 type 은 Country 다
  country: CountryWithisSelected;
  countries: CountryWithisSelected[];
  setSelectedCountries: React.Dispatch<
    React.SetStateAction<CountryWithisSelected[]>
  >;
}
