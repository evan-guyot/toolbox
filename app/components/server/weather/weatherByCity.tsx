"use server";

import axios from "axios";
import { IWeather } from "@/libs/types/weather";

export const getWeatherByCity = async (
  city: string,
  setError?: (value: string | null) => void,
) => {
  setError && setError(null);

  try {
    const response = await axios.get<IWeather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f731cd34fda14e92c63f2bfcf692e392`,
    );

    return response.data;
  } catch (err: any) {
    setError && setError(err.message);
  }

  return null;
};
