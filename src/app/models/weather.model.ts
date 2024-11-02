export interface WeatherGroupWeeklyCityInterface {
  date: string;
  nightTemp: number;
  dayTemp: number;
  dayOfWeek: string;
}

export interface WeatherWeeklyCityInterface {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: { pod: string };
  visibility: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
}

export interface WeatherCityLocationInterface {
  lat: number;
  lon: number;
}

export interface WeatherInterface {
  id: number;
  city: string;
  temperature: number;
  weather_id: number;
  weather: string;
  wind: {
    speed: number;
    deg: number;
  };
  condition: {
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
  };
  list?: WeatherGroupWeeklyCityInterface[];
}

export const testWeatherData: WeatherInterface[] = [
  {
    id: 706483,
    city: 'Kharkiv',
    temperature: 10.33,
    weather_id: 400,
    weather: 'sunny',
    wind: {
      speed: 10,
      deg: 90,
    },
    condition: {
      feels_like: 1,
      humidity: 70,
      pressure: 1007,
      temp_min: 10.33,
      temp_max: 10.33,
    },
  },
  {
    id: 706484,
    city: 'Kyiv',
    temperature: 15.2,
    weather_id: 501,
    weather: 'raining',
    wind: {
      speed: 50,
      deg: 90,
    },
    condition: {
      feels_like: 1,
      humidity: 60,
      pressure: 1012,
      temp_min: 12.0,
      temp_max: 18.0,
    },
  },
  {
    id: 706485,
    city: 'Odesa',
    temperature: 20.5,
    weather_id: 800,
    weather: 'sunny',
    wind: {
      speed: 10,
      deg: 90,
    },
    condition: {
      feels_like: 1,
      humidity: 55,
      pressure: 1010,
      temp_min: 18.0,
      temp_max: 22.0,
    },
  },
  {
    id: 706486,
    city: 'Lviv',
    temperature: 8.4,
    weather_id: 802,
    weather: 'sunny',
    wind: {
      speed: 10,
      deg: 90,
    },
    condition: {
      feels_like: 1,
      humidity: 80,
      pressure: 1005,
      temp_min: 7.0,
      temp_max: 9.0,
    },
  },
  {
    id: 706487,
    city: 'Dnipro',
    temperature: 12.0,
    weather: 'sunny',
    weather_id: 803,
    wind: {
      speed: 10,
      deg: 90,
    },
    condition: {
      feels_like: 1,
      humidity: 65,
      pressure: 1008,
      temp_min: 10.0,
      temp_max: 14.0,
    },
  },
];
