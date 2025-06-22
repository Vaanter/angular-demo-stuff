export interface Country {
  code: string;
  name: string;
  tld: string;
}

export interface City {
  code: string;
  name: string;
  postNumber: string;
}

export interface Continent {
  name: string;
  landAreaKm: number;
  population: number;
}
