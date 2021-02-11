import axios from "axios";

export class WeatherApiService {
  public async getWeather(): Promise<any> {
    await axios.get(
      "https://weather.tsukumijima.net/api/forecast/city/130010"
    ).then((res) => {
      const weather = res.data.res.filter((item: any, index: String) => {
        if (item.dateLabel === "今日") return true;
      });
      return weather
    }).catch((error) => {
      console.log(error.status)
    });
  }
}