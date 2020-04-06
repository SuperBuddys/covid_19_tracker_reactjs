import axios from 'axios'; //for api request

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        //object de-structuring
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {
        console.log("error ", error.message);
    }
}
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        console.log("data ", data);
    } catch (error) {

    }
}