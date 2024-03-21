interface IWeather {
  weather: IWeatherInfo[];
  main: IWeatherMain;
  wind: IWeatherWind;
  sys: IWeatherSys;
  name: string;
}

interface IWeatherInfo {
  main: string;
  description: string;
  icon: string;
}

interface IWeatherMain {
  temp: number;
  humidity: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}

interface IWeatherWind {
  speed: number;
  deg: number;
}

interface IWeatherSys {
  country: string;
}

export type { IWeather };
