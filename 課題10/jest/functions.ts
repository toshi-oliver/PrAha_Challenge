import { DatabaseMock } from './util/index';
import { NameApiService } from "./nameApiService";
import { WeatherApiService } from "./weatherApiService";


var dateFormat = require("dateformat");


export const sumOfArray = (numbers: number[]): number => {
  return numbers.reduce((a: number, b: number): number => a + b, 0);
};

export const asyncSumOfArray = (numbers: number[]): Promise<number> => {
  return new Promise((resolve): void => {
    resolve(sumOfArray(numbers));
  });
};

export const asyncSumOfArraySometimesZero = (
  numbers: number[], database: DatabaseMock
): Promise<number> => {
  return new Promise((resolve): void => {
    try {
      database.save(numbers);
      resolve(sumOfArray(numbers));
    } catch (error) {
      resolve(0);
    }
  });
};

export const getFirstNameThrowIfLong = async (
  maxNameLength: number, nameApiSerivce: NameApiService
): Promise<string> => {
  const firstName = await nameApiSerivce.getFirstName();

  if (firstName.length > maxNameLength) {
    throw new Error("first_name too long");
  }
  return firstName;
};

// ここから追加
export const timeFormat = (time_str:string, time_fmt:string): string => {
  try {
    return dateFormat(new Date("1970-01-01T" + time_str ), time_fmt);
  } catch (e) {
    return time_str;
  }
}

export const formatBytes = (bytes: number, decimals: number): string => {

  if (bytes === 0) return '0.0 B';

  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  let k = 1000;
  let i = Math.floor(Math.log(bytes) / Math.log(k));

  return (bytes / Math.pow(k, i)).toFixed(dm) + sizes[i];
}

export const getWeatherToday = async (
  day: string, weatherApiService: WeatherApiService
): Promise<string> => {
  const weather = await weatherApiService.getWeather();

  if (weather.dateLabel === day) {
    return weather.telop;
  } else {
    throw new Error("first_name too long");
  }
};