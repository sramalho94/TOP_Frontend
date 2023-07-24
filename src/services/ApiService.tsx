import axios from 'axios';


export default class ApiService {

//     static getWeather = async (cityName: string, apiUnit: string): Promise<Response> => {

//         return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}
//         &appid=${API_TOKEN}&units=${apiUnit}`)
//     }
  
//     static getDBWeather = () => {

//         return axios.get(`http://10.0.2.2:3000/api/v1/weather`)
           
//    }

//     static handleAddCity = (name: string) => {

//         return axios.post("http://10.0.2.2:3000/api/v1/weather", name)

//     }


//     static handleDelete = (id: number) => {
//         return axios.delete("http://10.0.2.2:3000/api/v1/weather/" + id)
//     }

    static REPLACENAME = async (): Promise<Response> => {

        return await fetch() //api call

    }


}