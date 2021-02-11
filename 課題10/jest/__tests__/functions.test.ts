import { DatabaseMock } from '../util/index';
import { asyncSumOfArray, sumOfArray, asyncSumOfArraySometimesZero, getFirstNameThrowIfLong } from "../functions";
import { NameApiService } from "../nameApiService";
import { formatBytes, timeFormat, getWeatherToday } from "../functions";
import { WeatherApiService } from "../weatherApiService";
// import { mocked } from 'ts-jest/utils';


// 自動モックを返す。クラスのコンストラクタおよびすべてのメソッドの呼び出しをスパイするのに使用できる。
jest.mock('../util/index')
const Database = DatabaseMock as jest.Mock;

jest.mock('../nameApiService')
const NameApi = NameApiService as jest.Mock;

jest.mock('../weatherApiService')
const WeatherApi = WeatherApiService as jest.Mock;

describe('test sumOfArray', (): void => {

  test('Test sumOfArray', () => {
    expect(sumOfArray([1, 2, 3])).toBe(6);
  })
  test('Failure of test sumOfArray', () => {
    expect(sumOfArray([1, 2, 3])).not.toBe(7);
  })
  test('Except of test sumOfArray', () => {
    expect(sumOfArray([1,6,7])).toBeGreaterThan(10);
  })
  test.only('empty of test sumOfArray', () => {
    // expect(sumOfArray([])).toThrow();
    expect(sumOfArray([])).toBe(0);
  })
});

test('test asyncSumOfArray', () => {
  expect.assertions(1);
  return expect(asyncSumOfArray([1, 2, 3])).resolves.toEqual(6);
});

test.only('test empty array in asyncSumOfArray', () => {
  expect.assertions(1);
  return expect(asyncSumOfArray([])).resolves.toBe(0);
});

describe('test the error pattern of asyncSumOfArraySometimesZero', () => {
  test('Should throw an error when calling DatabaseMock', () => {
    // インスタンスを呼び出し、asyncSumOfArraySometimesZeroがrejectsするか確かめたい
      // Databaseモックが常にErrorを返すように設定
    Database.mockImplementation(() => {
      return {
        save: ()=> {
          throw new Error("fail!")
        },
      };
    });
    expect.assertions(1);
    return expect(asyncSumOfArraySometimesZero([1, 2, 3], new DatabaseMock)).resolves.toBe(0);
  });

  test('Should normal when calling DatabaseMock', () => {
    // インスタンスを呼び出し、asyncSumOfArraySometimesZeroがrejectsするか確かめたい
    Database.mockImplementation(() => {});
    expect.assertions(1);
    return expect(asyncSumOfArraySometimesZero([1, 2, 3], new DatabaseMock)).resolves.toEqual(6);
  });

  // test(`asyncSumOfArraySometimesZeroはエラーをスローします`, (): void => {
  //   mocked(new DatabaseMock()).save.mockImplementationOnce((): void => {
  //     throw new Error();
  //   });
  //   expect(asyncSumOfArraySometimesZero([])).rejects.toMatch("error");
  // });
});

describe('test getFirstNameThrowIfLon', () => {
  test.only('test the Error pattern', async () => {
    // mockResolvedValue
    NameApi.mockImplementation(() => {
      return {
        getFirstName: () => {
          throw new Error("first_name too long");
        },
      };
    });
    expect.assertions(1);
    await expect(getFirstNameThrowIfLong(5, new NameApiService)).rejects.toEqual(new Error("first_name too long"));
  });

  test.only('test the nomal pattern', async () => {
    NameApi.mockImplementation(() => {
      return {
        getFirstName: () => {
          const firstName = "Toshi";
          return firstName;
        }
      };
    });
    expect.assertions(1);
    await expect(getFirstNameThrowIfLong(6, new NameApiService)).resolves.toEqual("Toshi");
  });
});

describe('test getFirstNameThrowIfLon', () => {
  test.only('test timeformat', () => {
    expect(timeFormat("23:00:00", "HH:MM")).toBe("23:00");
  });
  test.only('test formatBytes', () => {
    expect(formatBytes(6000, 1)).toBe("6.0KB");
  });

  test.only('test weatherApi', async () => {
    WeatherApi.mockImplementation(() => {
      return {
        getWeather: () => {
          const todayWeather = "晴れ";
          return todayWeather;
        }
      };
    });
    expect.assertions(1);
    await expect(getWeatherToday("今日", new WeatherApiService)).resolves.toEqual("晴れ");
  });
});
