interface WeatherImageInterface {
  type: string;
  id: number[];
  src: string;
}

const weatherImages: WeatherImageInterface[] = [
  {
    type: 'sunny',
    id: [400, 401, 402, 403, 800],
    src: '/assets/animated/day.svg',
  },
  {
    type: 'partly-cloudy',
    id: [801],
    src: '/assets/animated/cloudy-day-1.svg',
  },
  {
    type: 'cloudy',
    id: [802, 803, 804],
    src: '/assets/animated/cloudy.svg',
  },
  {
    type: 'light-rain',
    id: [500, 501],
    src: '/assets/animated/rainy-2.svg',
  },
  {
    type: 'rain',
    id: [502, 503],
    src: '/assets/animated/rainy-5.svg',
  },
  {
    type: 'thunderstorm',
    id: [504, 200, 201, 202],
    src: '/assets/animated/thunder.svg',
  },
  {
    type: 'snow-with-rain',
    id: [511, 615],
    src: '/assets/animated/rainy-7.svg',
  },
  {
    type: 'light-snow',
    id: [600],
    src: '/assets/animated/snowy-4.svg',
  },
  {
    type: 'snow',
    id: [601],
    src: '/assets/animated/snowy-5.svg',
  },
  {
    type: 'heavy-snow',
    id: [602],
    src: '/assets/animated/snowy-6.svg',
  },
];

export const getWeatherImageById = (
  weatherId: number
): WeatherImageInterface => {
  return (
    weatherImages.find((weatherImage) =>
      weatherImage.id.includes(weatherId)
    ) ?? {
      type: 'undefined',
      id: [0],
      src: '/assets/animated/weather.svg',
    }
  );
};
