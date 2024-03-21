"use client";

import React, { useState, useEffect } from "react";
import { getWeatherByCity } from "../components/server/weather/weatherByCity";
import { IWeather } from "@/libs/types/weather";

function Weather() {
  const [cityDebouncer, setCityDebouncer] = useState("");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<IWeather>();
  const isLoading = city !== cityDebouncer && cityDebouncer !== "";

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityDebouncer(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getWeatherByCity(city);
      resp && setWeatherData(resp);
    };
    city.length > 0 ? fetchData() : setWeatherData(undefined);
  }, [city]);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setCity(cityDebouncer);
    }, 1000);
    return () => clearTimeout(delayInputTimeoutId);
  }, [cityDebouncer]);

  return (
    <div>
      <h2 className="m-3 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Weather
      </h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter city's name"
          onChange={handleCityChange}
        />
      </div>

      {isLoading ? (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div role="status" className="animate-pulse">
            <div className="h-5 w-12 bg-gray-200 rounded-full dark:bg-gray-700 mb-2 mt-1"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-3 mt-1"></div>
            <div className="h-2 w-32 bg-gray-200 rounded-full dark:bg-gray-700 mb-2 mt-1"></div>
            <div className="h-2 w-28 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2 mt-1"></div>
            <div className="h-2 w-28 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2 mt-1"></div>
          </div>
        </div>
      ) : (
        weatherData && (
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h4 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {weatherData.main.temp}°C
            </h4>
            <h5 className="mb-2 text-xl font-italic tracking-tight text-gray-700 dark:text-white">
              {weatherData.name}, {weatherData.sys.country}
            </h5>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
              {weatherData.weather[0].description}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              🌬️{weatherData.wind.speed} MpH
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              💧{weatherData.main.humidity}%
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default Weather;
